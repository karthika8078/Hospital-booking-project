const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const appointmentRoutes = require('./routes/appointment');
const healthCheckupRoutes = require('./routes/healthCheckup');
const emailRouter=require('./routes/email')
const login = require('./routes/login');
const adminRoutes = require('./routes/admin');


const register = require('./routes/register');
const reviewRoutes = require('./routes/reviewRoutes');
const admin = require('./routes/adminRoutes');



const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(morgan('dev'));



app.use('/api/appointments', appointmentRoutes);
app.use('/api', healthCheckupRoutes)
app.use('/api',emailRouter);
app.use('/api/admin', adminRoutes);
app.use('/api',login);
app.use('/api', register);
app.use('/reviews', reviewRoutes);
app.use('/api/admin', admin);



require('dotenv').config();
const port = process.env.PORT || 5000;
require('./config/db');








app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

