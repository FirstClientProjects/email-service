require('dotenv').config();
const express = require('express');
const cors = require('cors');

const logger = require('./utils/logger');
const emailRoutes = require('./api/routes/emailRoutes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '20mb' }));

app.use('/api/v1/email', emailRoutes);

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
    logger.info(`Email service is up and running on port ${PORT}`);
});