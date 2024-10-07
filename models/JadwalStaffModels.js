import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import User from "./UserModel.js";

const JadwalStaff = db.define(
    "JadwalStaff",
    {
        jadwal_staff: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_staff: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        tgl_kerja: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        shift: {
            type: DataTypes.ENUM('Pagi', 'Siang', 'Sore', 'Malam'),
            allowNul: false,
        },
    },
    {
        tableName: "JadwalStaff",
    }
)

export default JadwalStaff;