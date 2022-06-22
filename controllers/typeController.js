const { Type } = require('../models/models')

class typeController {
    async create(req, res) {
        const { name } = req.body
        const type = await Type.create({ name })
        return res.json(type)
    }
    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
    async update(req,res){
        const {name, id } = req.body
        await Type.update({name},{
            where:{
                id
            }
        })
        return res.json("Успешно")
    }
    async delete(req,res){
        const {id} = req.body
        await Type.destroy({
            where: {
                id
            }
        })
        return res.json("Успешно")
    }
}
module.exports = new typeController()