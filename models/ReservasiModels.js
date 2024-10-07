import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import User from "./UserModel.js";

const Reservasi = db.define(
    "Reservasi",
    {
        id_tamu: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_kamar: {
            type: DataTypes.INTEGER,
            allowNul: false,
        },
        id_reservasi: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        tgl_check_in: {
            type: DataTypes.DATE,
            allowNul: false,
        },
        tgl_check_out: {
            type: DataTypes.DATE,
            allowNul: false,
        },
    },
    {
        tableName: "Reservasi",
    }
)

export default Reservasi;