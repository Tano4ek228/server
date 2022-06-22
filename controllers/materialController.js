const { Material, MaterialInfo } = require('../models/models')
const ApiError = require('../error/ApiError');
const { nextTick } = require('process');

class materialController {
    async create(req, res, next) {
        try {
            const { name, price, NDS, qant, typeId} = req.body
            const material = await Material.create({ name, price, NDS, qant, typeId })
            return res.json(material)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const { typeId } = req.query
        console.log(req.query)
        let materials;
        if (!typeId) {
            materials = await Material.findAll()
        } else
            materials = await Material.findAll({ where: { typeId } })
        return res.json(materials)
    }
    async getOne(req, res) {
        const { id } = req.params
        const material = await Material.findOne({
            where: { id },
            include: [{ model: MaterialInfo, as: 'info' }]
        })
        return res.json(material)
    }
}
module.exports = new materialController()