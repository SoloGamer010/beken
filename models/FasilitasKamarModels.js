import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import User from "./UserModel.js";

const FasilitasKamar = db.define(
    "FasilitasKamar",
    {
        id_kamar: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_fasilitas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "FasilitasKamar",
    }
)

export default FasilitasKamar;