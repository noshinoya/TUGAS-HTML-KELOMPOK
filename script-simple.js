// Fungsi untuk menampilkan promo
function tampilPromo() {
    alert("🎉 PROMO SPESIAL! 🎉\n\nService AC Mobil hanya Rp 99.000!\n\nHubungi kami sekarang:\nWA: 0812-3456-7890");
}

// Fungsi untuk mengirim pesan dari form kontak
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var telepon = document.getElementById('telepon').value;
    var pesan = document.getElementById('pesan').value;
    
    if (nama && email && telepon && pesan) {
        alert("Terima kasih " + nama + "!\n\nPesan Anda telah diterima.\nKami akan menghubungi Anda segera.");
        
        // Reset form
        document.getElementById('contactForm').reset();
    }
});

// Fungsi untuk mencetak form affiliate
function cetakForm() {
    var nama = document.getElementById('namaAffiliate').value;
    var email = document.getElementById('emailAffiliate').value;
    var telp = document.getElementById('telpAffiliate').value;
    var alamat = document.getElementById('alamatAffiliate').value;
    var kode = document.getElementById('kodeReferral').value;
    
    if (!nama || !email || !telp || !alamat) {
        alert("Mohon lengkapi semua data yang wajib diisi!");
        return;
    }
    
    // Buat window baru untuk print
    var printWindow = window.open('', '', 'height=600,width=800');
    
    printWindow.document.write('<html><head><title>Form Pendaftaran Affiliate</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: Arial, sans-serif; padding: 40px; }');
    printWindow.document.write('h1 { color: #ff6600; text-align: center; }');
    printWindow.document.write('table { width: 100%; border-collapse: collapse; margin-top: 30px; }');
    printWindow.document.write('td { padding: 10px; border: 1px solid #ccc; }');
    printWindow.document.write('.label { font-weight: bold; width: 200px; background-color: #ffcc99; }');
    printWindow.document.write('.footer { margin-top: 50px; text-align: center; font-size: 12px; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    
    printWindow.document.write('<h1>🚗 DOKTER MOBIL</h1>');
    printWindow.document.write('<h2 style="text-align: center;">Form Pendaftaran Affiliate</h2>');
    
    printWindow.document.write('<table>');
    printWindow.document.write('<tr><td class="label">Nama Lengkap</td><td>' + nama + '</td></tr>');
    printWindow.document.write('<tr><td class="label">Email</td><td>' + email + '</td></tr>');
    printWindow.document.write('<tr><td class="label">No. Telepon</td><td>' + telp + '</td></tr>');
    printWindow.document.write('<tr><td class="label">Alamat</td><td>' + alamat + '</td></tr>');
    printWindow.document.write('<tr><td class="label">Kode Referral</td><td>' + (kode || '-') + '</td></tr>');
    printWindow.document.write('</table>');
    
    printWindow.document.write('<div class="footer">');
    printWindow.document.write('<p>Tanggal Pendaftaran: ' + new Date().toLocaleDateString('id-ID') + '</p>');
    printWindow.document.write('<p>Dokter Mobil - Bengkel AC & Tune Up Terpercaya</p>');
    printWindow.document.write('<p>Hubungi: 0812-3456-7890 | Email: info@doktermobil.com</p>');
    printWindow.document.write('</div>');
    
    printWindow.document.write('</body></html>');
    
    printWindow.document.close();
    printWindow.print();
}

// Smooth scroll untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
