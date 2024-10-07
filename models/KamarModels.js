import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import User from "./UserModel.js";

const Kamar = db.define(
    "Kamar",
    {
        id_kamar: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        tipe_kamar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        harga_semalam: {
            type: DataTypes.INTEGER,
            allowNul: false,
        },
        status_kamar: {
            type: DataTypes.ENUM('Tersedia', 'Dipesan')
        }
    },
    {
        tableName: "Kamar",
    }
)

export default Kamar;