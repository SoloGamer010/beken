import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import User from "./UserModel.js";

const KamarFasilitas = db.define(
    "KamarFasilitas",
    {
        id_kamar: {
            type: DataTypes.INTEGER,
            // primaryKey: true,
            // autoIncrement: true,
            allowNull: false,
        },
        // tipe_kamar: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        id_fasilitas: {
            type: DataTypes.INTEGER,
            allowNul: false,
        },
        // status_kamar: {
        //     type: DataTypes.ENUM('Tersedia', 'Dipesan')
        // }
    },
    {
        tableName: "KamarFasilitas",
    }
)

export default KamarFasilitas;