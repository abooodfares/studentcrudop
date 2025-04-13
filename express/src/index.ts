import express from 'express';
import mongoose from 'mongoose';
import studentmodel from './models/studentmodel'; // assuming you're using it somewhere
import rout from './routing/students';
import cors from 'cors';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/students-system')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors({
  origin:[ 'http://localhost:5173',
     'http://localhost:5176'

  ]
  ,
  

 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/students', rout);

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
