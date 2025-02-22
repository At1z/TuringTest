import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";
import ChatWindow from "./ChatWindow";
import UserInput from "./UserInput";
import SendButton from "./SendButton";
import Modal from "./Modal";

const socket = io("http://91.231.61.8:3001");

function MainView() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const [room, setRoom] = useState(null);
  const [timer, setTimer] = useState(120);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [vote, setVote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      setChatHistory((prevChat) => [...prevChat, data]);
    });

    socket.on("roomAssigned", ({ assignedRoom, randomTopic }) => {
      setRoom(assignedRoom);
      setTopic(randomTopic);
      setIsLoading(false);
      console.log(assignedRoom);
    });

    socket.on("roomFull", () => {
      alert("All rooms are full. Please try again later.");
      setIsLoading(false);
    });

    socket.on("startTimer", () => {
      setIsTimerActive(true);
    });

    socket.on("notYourTurn", () => {
      alert("Nie twoja kolej");
    });

    return () => {
      socket.off("message");
      socket.off("roomAssigned");
      socket.off("roomFull");
      socket.off("notYourTurn");
      socket.off("startTimer");
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
      setIsModalVisible(true);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() && room) {
      const data = { user: username, message, room, timerStarted: false };
      socket.emit("message", data);
      setMessage("");
    }
  };

  const handleVote = (voteData) => {
    setVote(voteData);
    console.log(`User voted: ${voteData.vote}, Correct: ${voteData.isCorrect}`);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleSetUsername = () => {
    if (username.trim()) {
      socket.emit("setUsername", username);
      socket.emit("requestRoom");
      setIsUsernameSet(true);
      setIsLoading(true);
      const randomDelay = Math.floor(Math.random() * 2000) + 3000;
      setTimeout(() => {
        setIsLoading(false);
      }, randomDelay);
      setIsTimerActive(true);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleUsernameKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSetUsername();
    }
  };

  if (!isUsernameSet) {
    return (
      <div className="username-setup">
        <h2>Ustaw swoją nazwę</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleUsernameKeyPress}
          placeholder="Wprowadź swoją nazwę"
          maxLength={20} // Set maximum length to 20 characters
        />
        <button className="user-button" onClick={handleSetUsername}>
          Ustaw nazwę
        </button>
        <span className="recording-notice">* Rozmowy są rejestrowane</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loader">
        <div className="spinner"></div>
        <div className="loader-text">Ładowanie...</div>
      </div>
    );
  }

  return (
    <div className="background-MainView">
      {isModalVisible && (
        <Modal
          title="Czas minął!"
          message="Z kim myślisz, że rozmawiałeś?"
          closeModal={closeModal}
          onVote={handleVote}
          room={room}
          chatHistory={chatHistory}
        />
      )}
      <div className="container-for-header-timer">
        <div className="header-text">Witaj {username}!</div>
        <div className="chat-topic">Temat rozmowy: {topic}</div>
        <div className="timer">{formatTime(timer)}</div>
      </div>
      <div className="chat-container">
        <ChatWindow chatHistory={chatHistory} username={username} />
        <div className="input-area">
          <div>
            <UserInput
              message={message}
              handleInputChange={handleInputChange}
              handleKeyPress={handleKeyPress}
            />
          </div>
          <div>
            <SendButton handleSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainView;
