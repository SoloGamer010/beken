import db from "../utils/connection.js";
import Tamu from "../models/TamuModels.js";
import Kamar from "../models/KamarModels.js";
import Reservasi from "../models/ReservasiModels.js";
import Pembayaran from "../models/PembayaranModels.js";
import FasilitasHotel from "./FasilitasHotelModels.js";
import FasilitasKamar from "./FasilitasKamarModels.js";
import Staff from "./StaffModels.js";
import JadwalStaff from "./JadwalStaffModels.js";
import UlasanTamu from "./UlasanTamuModels.js";
import Penawaran from "./PenawaranModels.js";
import KamarFasilitas from "./KamarFasilitasModels.js";

Tamu.hasMany(Reservasi, {
    foreignKey: "id_tamu",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Reservasi.belongsTo(Tamu, {
    foreignKey: "id_tamu",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Kamar.hasMany(Reservasi, {
    foreignKey: "id_kamar",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Pembayaran.belongsTo(Reservasi, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "id_reservasi"
});

Kamar.belongsToMany(Tamu, {
    through: Reservasi,
    foreignKey: "id_tamu",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

FasilitasKamar.belongsToMany(Kamar, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "fasilitas",
    through: "KamarFasilitas.is_staff"
})

Reservasi.hasMany(Pembayaran, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "id_reservasi"
});

Kamar.belongsToMany(FasilitasKamar, {
    // foreignKey: "id_kamar",
    through: "KamarFasilitas",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Staff.hasMany(JadwalStaff, { 
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

JadwalStaff.belongsTo(Staff, {
    foreignKey: "id_staff",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

JadwalStaff.hasMany(Reservasi, {
    foreignKey: "reservasi.id_staff",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

JadwalStaff.hasMany(Pembayaran, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "pembayaran.id_staff"
});

JadwalStaff.hasMany(Kamar, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "kamar.id_staff"
});

JadwalStaff.hasMany(UlasanTamu, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "ulasan.id_staff"
});

Tamu.hasMany(UlasanTamu, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "id_tamu"
});

Kamar.hasMany(UlasanTamu, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "id_kamar"
});

Penawaran.hasMany(Reservasi, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "id_penawaran"
});

FasilitasHotel.belongsToMany(FasilitasKamar, {
    through: "KamarFasilitas",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// await Tamu.sync();
// await Kamar.sync();
// await Reservasi.sync();
// await Pembayaran.sync();
// await FasilitasHotel.sync();
// await FasilitasKamar.sync();
// await Staff.sync();
// await JadwalStaff.sync();
// await Ulasan.sync();
// await Penawaran.sync();
await db.sync({ alter: true });