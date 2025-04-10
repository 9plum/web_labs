const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const User = require('./models/User');
const Event = require('./models/Event');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Синхронизация моделей с базой данных
sequelize.sync({ alter: true }).then(() => {
    console.log('База данных синхронизирована');
});

// Тестовый маршрут
app.get('/', (req, res) => {
    res.json({ message: 'API работает!' });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});