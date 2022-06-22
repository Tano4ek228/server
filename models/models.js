const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: "USER" },
})
const Material = sequelize.define('material', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: true },
	price: { type: DataTypes.INTEGER, allowNull: true },
	NDS: { type: DataTypes.INTEGER, allowNull: true },
	qant: { type: DataTypes.INTEGER }
})
const Type = sequelize.define('type', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, allowNull: true },
})
const Application = sequelize.define('application',{
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING, allowNull:true},
	number: {type: DataTypes.STRING, allowNull:true}
})

Type.hasMany(Material)
Material.belongsTo(Type)


module.exports = {
	User,
	Material,
	Type,
	Application
}