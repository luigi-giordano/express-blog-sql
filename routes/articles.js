const express = require('express');
const router = express.Router();

//importazione controller
const articlesController = require('../controllers/articleController')

//rotte crud per gli articoli
//index
router.get('/', articlesController.index)

//show
router.get('/:id', articlesController.show)

//store
router.post('/', articlesController.store)

//update
router.put('/:id', articlesController.update)

//modify
router.patch('/:id', articlesController.modify)

//destroy
router.delete('/:id', articlesController.destroy)

module.exports = router;