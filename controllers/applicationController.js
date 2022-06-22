const { Application } = require('../models/models')
class applicationController {
    async create(req, res) {
        const { name,number } = req.body
        const type = await Application.create({ name,number })
        return res.json(type)
    }
    async getAll(req, res) {
        const types = await Application.findAll()
        return res.json(types)
    }
    async delete(req,res){
        const {id} = req.body
        await Application.destroy({
            where: {
                id
            }
        })
        return res.json("Успешно")
    }
}
module.exports = new applicationController()