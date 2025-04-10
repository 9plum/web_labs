const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/db');
const User = require('./models/User');
const Event = require('./models/Event');
const eventRoutes = require('./routes/eventRoutes');
const limiter = require('./middleware/rateLimiter');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// Добавляем rate limiting
app.use(limiter);
// Добавляем middleware для статических файлов
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Подключаем маршруты
app.use('/events', eventRoutes);

// Тестовый маршрут
app.get('/', (req, res) => {
    res.json({ message: 'API работает!' });
});

// Синхронизация моделей с базой данных
sequelize.sync({ alter: true }).then(() => {
    console.log('База данных синхронизирована');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});