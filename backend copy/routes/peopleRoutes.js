const router = require('express').Router();
const { peopleCtrl } = require('../controllers') //all functions/methods imported from people's controller's index.js

// ROUTES - METHODS //
router.get('/', peopleCtrl.getPeople)
router.post('/', peopleCtrl.createPeople)

module.exports = router;

