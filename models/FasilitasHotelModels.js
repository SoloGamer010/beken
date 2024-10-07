import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import User from "./UserModel.js";

const FasilitasHotel = db.define(
    "FasilitasHotel",
    {
        nama_fasilitas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_fasilitas: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        tableName: "FasilitasHotel",
    }
)

export default FasilitasHotel;