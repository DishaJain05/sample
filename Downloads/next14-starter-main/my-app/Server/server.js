const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_signup'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

app.post('/api/signup', (req, res) => {
  const { name, email, phone, address, dob, course } = req.body;
  const sql = 'INSERT INTO students (name, email, phone, address, dob, course) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, email, phone, address, dob, course], (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).send('An error occurred. Please try again.');
    } else {
      res.status(201).send('Signup successful!');
    }
  });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body; // Assume password is also sent for login
    const sql = 'SELECT * FROM students WHERE email = ?';
    db.query(sql, [email], (err, results) => {
      if (err) {
        console.error('Error fetching data from MySQL:', err);
        res.status(500).send('An error occurred. Please try again.');
      } else if (results.length === 0) {
        res.status(404).send('Student not found.');
      } else {
        // You should also verify the password here
        res.status(200).json(results[0]);
      }
    });
  });
  
  app.get('/api/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching data from MySQL:', err);
        res.status(500).send('An error occurred. Please try again.');
      } else {
        res.status(200).json(results);
      }
    });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
