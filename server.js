import express from 'express';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
//Connect Database
connectDB();

const app = express();
// Init Middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/', (req, res) => res.send('API RUNNING'));

// Define Routes
app.use('/api/users', userRoutes);
// app.use('/api/profile', require('./routes/profile'));
// app.use('/api/auth', require('./routes/auth'));

const port = process.env.PORT || 5000;
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
