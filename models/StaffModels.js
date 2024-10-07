import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import JadwalStaff from "./JadwalStaffModels.js";
// import User from "./UserModel.js";

const Staff = db.define(
    "Staff",
    {
        id_staff: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        nama_staff: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        posisi: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        no_telp: {
            type: DataTypes.STRING,
            allowNul: false,
        },
    },
    {
        tableName: "Staff", 
    }
)

// Staff.hasMany(JadwalStaff, {
//     onDelete: "CASCADE",
//     onUpdate: "CASCADE",
// })

// JadwalStaff.belongsTo(Staff, {
//     foreignKey: "id_staff",
//     onDelete: "CASCADE",
//     onUpdate: "CASCADE",
// })

export default Staff;