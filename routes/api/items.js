const express = require('express');
const router = express.Router();
const itemsController = require('../../controllers/api/items');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/tasks
router.get('/', itemsController.index);
// router.post('/', ensureLoggedIn, tasksController.create);
router.get('/:id', itemsController.detail)
// router.delete('/:id', ensureLoggedIn, tasksController.deleteTask);
// router.put('/:id', tasksController.update)

module.exports = router;