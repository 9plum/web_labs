const { Event } = require('../models');

const eventController = {
    async getEvent(req, res) {
        try {
            const event = await Event.findByPk(req.params.id);
            if (!event) {
                return res.status(404).json({ message: 'Мероприятие не найдено' });
            }
            res.json(event);
        } catch (error) {
            res.status(500).json({ message: 'Ошибка сервера' });
        }
    },

    async uploadImage(req, res) {
        try {
            const event = await Event.findByPk(req.params.id);
            if (!event) {
                return res.status(404).json({ message: 'Мероприятие не найдено' });
            }

            if (!req.file) {
                return res.status(400).json({ message: 'Файл не был загружен' });
            }

            event.image_url = `/uploads/${req.file.filename}`;
            await event.save();

            res.json({ 
                message: 'Изображение успешно загружено',
                image_url: event.image_url 
            });
        } catch (error) {
            res.status(500).json({ message: 'Ошибка сервера' });
        }
    }
};

module.exports = eventController;