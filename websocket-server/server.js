const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 3001;

const rooms = ["room1", "room2", "room3", "room4", "room5"];
const roomOccupancy = {
  room1: 0,
  room2: 0,
  room3: 0,
  room4: 0,
  room5: 0,
};

app.get("/", (req, res) => {
  res.send("WebSocket server is running!");
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("requestRoom", () => {
    let assignedRoom = null;
  
    // Kopiowanie listy dostępnych pokojów, aby zapobiec przypadkowym parom
    let shuffledRooms = [...rooms].filter((room) => roomOccupancy[room] < 2);
  
    if (shuffledRooms.length > 0) {
      // Mieszanie listy pokojów
      shuffledRooms = shuffledRooms.sort(() => Math.random() - 0.5);
  
      // Wybierz pierwszy dostępny pokój po wymieszaniu
      assignedRoom = shuffledRooms[0];
  
      // Zwiększ zajętość pokoju i przypisz użytkownika
      roomOccupancy[assignedRoom]++;
      socket.join(assignedRoom);
      socket.emit("roomAssigned", assignedRoom);
      console.log(`User ${socket.id} assigned to room ${assignedRoom}`);
    } else {
      // Jeśli brak dostępnych pokojów
      socket.emit("roomFull");
      console.log(`No available rooms for user ${socket.id}`);
    }
  });
  

  socket.on("setUsername", (username) => {
    socket.username = username;
    console.log(`User ${socket.username} connected with ID: ${socket.id}`);
  });

  socket.on("message", (data) => {
    console.log(`Message from ${socket.id} in room ${data.room}:`, data.message);
    io.to(data.room).emit("message", { user: data.user, message: data.message });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    for (const room of rooms) {
      if (socket.rooms.has(room)) {
        roomOccupancy[room]--;
        break;
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});