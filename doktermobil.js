// Fungsi untuk menampilkan alert promo
function tampilkanPromo() {
	alert("🎉 PROMO SPESIAL! 🎉\n\nService AC Mobil hanya Rp 99.000!\n\nTermasuk:\n✓ Cek AC Gratis\n✓ Isi Freon\n✓ Cuci Evaporator\n\nHubungi kami sekarang:\nWA: 0812-3456-7890\n\nPromo terbatas!");
}

// Fungsi untuk mengirim pesan dari form kontak
function kirimPesan() {
	var nama = document.getElementById("nama").value;
	var email = document.getElementById("email").value;
	var telepon = document.getElementById("telepon").value;
	var pesan = document.getElementById("pesan").value;

	if (nama && email && telepon && pesan) {
		alert("Terima kasih " + nama + "!\n\nPesan Anda telah diterima.\nKami akan menghubungi Anda segera melalui email: " + email + " atau telepon: " + telepon);
		
		// Reset form
		document.getElementById("nama").value = "";
		document.getElementById("email").value = "";
		document.getElementById("telepon").value = "";
		document.getElementById("pesan").value = "";
	} else {
		alert("Mohon lengkapi semua field!");
	}
}

// Fungsi untuk mencetak form affiliate
function cetakFormAffiliate() {
	// Ambil data dari form
	var nama = document.getElementById("affNama").value;
	var email = document.getElementById("affEmail").value;
	var telepon = document.getElementById("affTelepon").value;
	var alamat = document.getElementById("affAlamat").value;
	var ktp = document.getElementById("affKTP").value;
	var rekening = document.getElementById("affRekening").value;
	var bank = document.getElementById("affBank").value;
	var platform = document.getElementById("affPlatform").value;

	// Validasi form
	if (!nama || !email || !telepon || !alamat || !ktp || !rekening || !bank || !platform) {
		alert("Mohon lengkapi semua field sebelum mencetak!");
		return;
	}

	// Buat tanggal pendaftaran
	var tanggal = new Date();
	var tanggalStr = tanggal.getDate() + "/" + (tanggal.getMonth() + 1) + "/" + tanggal.getFullYear();

	// Buat konten untuk dicetak
	var isiCetak = `
		<div style="padding: 20px; font-family: Arial, sans-serif;">
			<table style="width: 100%; border-collapse: collapse;">
				<tr>
					<td colspan="2" style="padding: 10px 0; border-bottom: 2px solid #ff6600;">
						<strong style="font-size: 18px;">DATA PENDAFTAR</strong>
					</td>
				</tr>
				<tr>
					<td style="padding: 10px; width: 200px;"><strong>Tanggal Pendaftaran:</strong></td>
					<td style="padding: 10px;">${tanggalStr}</td>
				</tr>
				<tr>
					<td style="padding: 10px;"><strong>Nama Lengkap:</strong></td>
					<td style="padding: 10px;">${nama}</td>
				</tr>
				<tr>
					<td style="padding: 10px;"><strong>Email:</strong></td>
					<td style="padding: 10px;">${email}</td>
				</tr>
				<tr>
					<td style="padding: 10px;"><strong>No. Telepon:</strong></td>
					<td style="padding: 10px;">${telepon}</td>
				</tr>
				<tr>
					<td style="padding: 10px;"><strong>Alamat Lengkap:</strong></td>
					<td style="padding: 10px;">${alamat}</td>
				</tr>
				<tr>
					<td style="padding: 10px;"><strong>No. KTP:</strong></td>
					<td style="padding: 10px;">${ktp}</td>
				</tr>
				<tr>
					<td style="padding: 10px;"><strong>No. Rekening:</strong></td>
					<td style="padding: 10px;">${rekening}</td>
				</tr>
				<tr>
					<td style="padding: 10px;"><strong>Nama Bank:</strong></td>
					<td style="padding: 10px;">${bank}</td>
				</tr>
				<tr>
					<td style="padding: 10px;"><strong>Platform Promosi:</strong></td>
					<td style="padding: 10px;">${platform}</td>
				</tr>
			</table>

			<div style="margin-top: 50px; padding-top: 20px; border-top: 2px solid #ff6600;">
				<h3 style="color: #ff6600;">SYARAT DAN KETENTUAN:</h3>
				<ol style="line-height: 1.8;">
					<li>Affiliate wajib mempromosikan layanan Dokter Mobil dengan jujur dan profesional</li>
					<li>Komisi 20% akan dibayarkan setiap akhir bulan</li>
					<li>Minimal penarikan komisi adalah Rp 500.000</li>
					<li>Affiliate tidak diperkenankan melakukan spam atau promosi yang merugikan</li>
					<li>Dokter Mobil berhak membatalkan keanggotaan jika melanggar ketentuan</li>
				</ol>
			</div>

			<div style="margin-top: 50px; display: flex; justify-content: space-between;">
				<div style="text-align: center; width: 45%;">
					<p>Pendaftar,</p>
					<br><br><br>
					<p style="border-top: 1px solid #333; display: inline-block; padding-top: 5px; min-width: 200px;">
						${nama}
					</p>
				</div>
				<div style="text-align: center; width: 45%;">
					<p>Manajer Affiliate,</p>
					<br><br><br>
					<p style="border-top: 1px solid #333; display: inline-block; padding-top: 5px; min-width: 200px;">
						(.................................)
					</p>
				</div>
			</div>

			<div style="margin-top: 30px; text-align: center; font-size: 12px; color: #666;">
				<p>Dokumen ini adalah bukti pendaftaran program affiliate Dokter Mobil</p>
				<p>Untuk informasi lebih lanjut hubungi: affiliate@doktermobil.com</p>
			</div>
		</div>
	`;

	// Masukkan konten ke area cetak
	document.getElementById("isiCetak").innerHTML = isiCetak;

	// Tampilkan area cetak dan cetak
	document.getElementById("areaCetak").style.display = "block";
	
	// Tunggu sebentar agar konten ter-render
	setTimeout(function() {
		window.print();
		// Sembunyikan kembali area cetak setelah print
		setTimeout(function() {
			document.getElementById("areaCetak").style.display = "none";
		}, 100);
	}, 100);
}

// Smooth scrolling untuk navigasi
document.addEventListener('DOMContentLoaded', function() {
	// Ambil semua link navigasi
	var links = document.querySelectorAll('.navigasi a');
	
	// Tambahkan event listener untuk setiap link
	links.forEach(function(link) {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			
			// Ambil target section
			var targetId = this.getAttribute('href');
			var targetSection = document.querySelector(targetId);
			
			// Scroll ke section dengan smooth
			if (targetSection) {
				targetSection.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});
});

// Animasi sederhana saat scroll
window.addEventListener('scroll', function() {
	var cards = document.querySelectorAll('.card-service, .card-lokasi');
	
	cards.forEach(function(card) {
		var cardPosition = card.getBoundingClientRect().top;
		var screenPosition = window.innerHeight / 1.3;
		
		if (cardPosition < screenPosition) {
			card.style.opacity = '1';
			card.style.transform = 'translateY(0)';
		}
	});
});

// Set initial state untuk animasi
document.addEventListener('DOMContentLoaded', function() {
	var cards = document.querySelectorAll('.card-service, .card-lokasi');
	cards.forEach(function(card) {
		card.style.opacity = '0';
		card.style.transform = 'translateY(20px)';
		card.style.transition = 'opacity 0.5s, transform 0.5s';
	});
});
