require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB  =  require("./database/db");
const app = express();
const path  = require('path');
const postRoutes  = require("./routes/posts");

app.use(cors());

app.use(express.json());

// Middleware
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
connectDB();

// Routes
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));