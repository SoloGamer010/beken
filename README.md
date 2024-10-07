# Projek database untuk UTS 
- Nama    : Radithya Haikal Ardhana
- Kelas   : XII 
- Jurusan : PPLG/RPL

## Sistem Reservasi Hotel

### Tabel tamu
- Menyimpan informasi tentang tamu hotel
- Relasi : 
    - Satu tamu dapat memiliki banyak reservasi (One - Many)

### Tabel Kamar
- Menyimpan informasi tentang kamar yang tersedia di hotel
- Relasi :
    - Satu kamar dapat memiliki banyak reservasi (One - Many)
    - Kamar memiliki banyak fasilitas melalui tabel Kamar_Fasilitas (Many - Many)

### Tabel Reservasi
- Menyimpan informasi tentang reservasi yang dilakukan oleh tamu
- Relasi :
    - Reservasi berhubungan dengan satu tamu (Many - One)
    - Reservasi berhubungan dengan satu kamar (Many - One)

### Tabel Fasilitas Hotel
- Menyimpan informasi tentang fasilitas yang ada di hotel
- Relasi :
    - Fasilitas hotel dapat di hubungkan ke staff yang bertanggung jawab (One - One/Many)

### Tabel Fasilitas Kamar
- Menyimpan informasi tentang fasilitas yang disediakan di setiap kamar
- Relasi :
    - Kamar memiliki banyak fasilitas dan fasilitas dapat dimiliki oleh banyak kamar (Many - Many)

### Tabel Staff
- Menyimpan informasi tentang staff yang bekerja di hotel
- Relasi :
    - Staff dapat bertanggung jawab atas fasilitas hotel atau fasilitas kamar (One - Many)
    - Staff memiliki jadwal yang diatus dalam tabel jadwal staff

### Tabel Jadwal Staff
- Menyimpan jadwal kerja dari staff hotel
- Relasi :
    - Satu staff dapat memiliki banyak jadwal (One - Many)

### Tabel Pembayaran
- Menyimpan informasi tentang pembayaran dari reservasi
- Relasi :
    - Satu reservasi memiliki satu pembayaran (One - One) 

### Tabel Layanan Tambahan
- Menyimpan informasi tentang layanan tambahan yang dipesan oleh tamu
- Relasi :
    - Satu reservasi dapat memiliki banyak layanan tambahan (One - Many)