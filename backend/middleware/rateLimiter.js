const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 минута
    max: 100, // максимум 100 запросов в минуту
    message: {
        message: 'Слишком много запросов, пожалуйста, попробуйте позже'
    }
});

module.exports = limiter;