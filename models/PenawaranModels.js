import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import User from "./UserModel.js";

const Penawaran = db.define(
    "Penawaran ",
    {
        id_penawaran : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            // allowNull: false,
        },
        nama_penawaran : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNul: false,
        },
        tgl_mulai: {
            type: DataTypes.DATE,
            allowNul: false,
        },
        tgl_akhir: {
            type: DataTypes.DATE,
            allowNul: false,
        },
        diskon: {
            type: DataTypes.FLOAT
        }
    },
    {
        tableName: "Penawaran",
    }
)

export default Penawaran ;