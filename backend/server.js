const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/todolist', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(cors());
app.use(express.json());

const taskRoutes = require('./routes/tasks');
app.use('/api', taskRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
