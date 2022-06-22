const Router = require('express')
const
	router = new Router
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', typeController.create)
router.post('/update',typeController.update)
router.post('/delete',typeController.delete)
router.get('/', typeController.getAll)

module.exports = router