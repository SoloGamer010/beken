import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Kamar from "./KamarModels.js";

const Tamu = db.define(
    "Tamu",
    {
        id_tamu: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        no_telp: {
            type: DataTypes.STRING,
            allowNul: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNul: false,
        },
    },
    {
        tableName: "Tamu",
    }
)

//relasi user -> booking 

// tamu bisa booking banyak Kamar
// Tamu.hasMany(Kamar, {
//     onDelete: "CASCADE",
//     onUpdate: "CASCADE",
// })

// kamar dimiliki 1 Tamu
// Kamar.belongsToMany(Tamu, {
//     foreignKey: "id_tamu",
//     onDelete: "CASCADE",
//     onUpdate: "CASCADE",
// })

export default Tamu;