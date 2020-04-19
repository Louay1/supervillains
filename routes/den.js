var express = require('express')
var router = express.Router()

var supervillains_controller = require('../controllers/supervillainsController.js')

// Get the home page
router.get('/', supervillains_controller.index);

// Create a supervillain GET
router.get('supervillain/create', supervillains_controller.supervillain_create_get)

// Create a supervillain POST
router.post('supervillain/create', supervillains_controller.supervillain_create_post)

// Update a supervillain GET
router.get('supervillain/:id/update', supervillains_controller.supervillain_update_get)

// Update a supervillain POST
router.post('supervillain/:id/update', supervillains_controller.supervillain_update_post)

// Delete a supervillain GET
router.get('supervillain/:id/delete', supervillains_controller.supervillain_delete_get)

// Delete a supervillain POST
router.post('supervillain/:id/delete', supervillains_controller.supervillain_delete_post)

// Get all list of supervillains
router.get('/supervillains', supervillains_controller.supervillain_list)

// Get a supervillain details
router.get('supervillain/:id', supervillains_controller.supervillain_detail)


module.exports = router
