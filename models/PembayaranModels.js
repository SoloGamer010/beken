import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import User from "./UserModel.js";

const Pembayaran = db.define(
    "Pembayaran",
    {
        id_pembayaran: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_reservasi: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        jumlah_pembayaran: {
            type: DataTypes.FLOAT,
            allowNul: false,
        },
        tgl_pembayaran: {
            type: DataTypes.DATE,
            allowNul: false,
        },
        metode_pembayaran: {
            type: DataTypes.ENUM('Tunai', 'Tranfer', 'Kartu Kredit')
        }
    },
    {
        tableName: "Pembayaran",
    }
)

export default Pembayaran;