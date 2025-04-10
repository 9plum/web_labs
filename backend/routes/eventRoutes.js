const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const upload = require('../middleware/upload');

// Маршрут для получения мероприятия
router.get('/:id', eventController.getEvent);

// Маршрут для загрузки изображения
router.post('/:id/image', upload.single('image'), eventController.uploadImage);

module.exports = router;