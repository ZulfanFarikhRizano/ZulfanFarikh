function updateJam() {
    var sekarang = new Date();
    var jam = sekarang.getHours();
    var menit = sekarang.getMinutes();
    var detik = sekarang.getSeconds();

    // Tambahkan nol di depan jam, menit, dan detik jika kurang dari 10
    jam = jam < 10 ? '0' + jam : jam;
    menit = menit < 10 ? '0' + menit : menit;
    detik = detik < 10 ? '0' + detik : detik;

    var waktu = jam + ':' + menit + ':' + detik;

    document.getElementById('jam').innerText = waktu;
}

// Perbarui setiap detik
setInterval(updateJam, 1000);

// Panggil pertama kali agar tampilan awal tidak menunjukkan 00:00:00
updateJam();