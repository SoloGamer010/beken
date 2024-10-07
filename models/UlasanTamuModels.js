import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Ulasan from "./UlasanTamuModels.js";

const UlasanTamu = db.define(
    "UlasanTamu",
    {
        id_ulasan: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_tamu: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_kamar: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNul: false,
        },
        tgl_ulasan: {
            type: DataTypes.DATE,
            allowNul: false,
        },
        komentar: {
            type: DataTypes.TEXT,
            allowNul: false,
        },
    },
    {
        tableName: "UlasanTamu",
    }
)

export default UlasanTamu;