const express = require("express");
const mysql = require("mysql");
const db = require("./db/sqldb"); // Import MySQL connection
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Endpoint to handle chat messages
app.post("/chats", async (req, res) => {
  try {
    const { username, group, message } = req.body;
    console.log("i'm here");
    // Insert the message into the database
    const query = `INSERT INTO chats (username, \`group\`, message) VALUES (?, ?, ?)`;
    db.query(query, [username, group, message], (err, result) => {
      if (err) {
        console.error("Error inserting message:", err);
        console.log("i'm error");
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(201).json({ success: true, message: "Message sent successfully" });
      }
    });
  } catch (error) {
    console.error("Error handling chat request:", error);
    res.status(500).json({ error: error.message }); // Send error message back in response
  }
});

// Endpoint to retrieve all messages
app.get("/chats", async (req, res) => {
  try {
    // Retrieve all messages from the database
    const query = "SELECT * FROM chats";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error retrieving messages:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error("Error handling chat request:", error);
    res.status(500).json({ error: error.message }); // Send error message back in response
  }
});


// Endpoint to retrieve all messages in ASC order
app.get("/chatsdsc", async (req, res) => {
  try {
    // Retrieve all messages from the database
    const query = "SELECT * FROM chats ORDER BY msg_id DESC";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error retrieving messages:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error("Error handling chat request:", error);
    res.status(500).json({ error: error.message }); // Send error message back in response
  }
});

// Endpoint to retrieve all messages in ASC order for Science chat
app.get("/chatsSciencedsc", async (req, res) => {
  try {
    // Retrieve all messages from the database
    const query = "SELECT * FROM chats WHERE `group` = 'Science' ORDER BY msg_id DESC";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error retrieving messages:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error("Error handling chat request:", error);
    res.status(500).json({ error: error.message }); // Send error message back in response
  }
});


// Endpoint to retrieve all messages in ASC order for Arts chat
app.get("/chatsArtsdsc", async (req, res) => {
  try {
    // Retrieve all messages from the database
    const query = "SELECT * FROM chats WHERE `group` = 'Arts' ORDER BY msg_id DESC";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error retrieving messages:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error("Error handling chat request:", error);
    res.status(500).json({ error: error.message }); // Send error message back in response
  }
});

// Server creation
app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});
