/* KasirKu v1.8.2 — logika kasir toko lokal (web standar murni).
   v1.8.2 (26 Nov 2026): BUNYI BEEP SCAN — saat scan barcode kasir berhasil dan produk ditemukan, aplikasi membunyikan satu beep pendek (~100 ms, 1500 Hz, WebAudio tanpa berkas, jalan offline); barcode yang tidak dikenal TIDAK dibunyikan supaya dari bunyinya ketahuan ada yang tidak beres. Konteks audio disiapkan di bukaScan() (ketuk tombol Scan = gestur pengguna) karena WebView bawaan menuntut gestur sebelum audio boleh berbunyi. Getar yang sudah ada tidak diubah. ANIMASI STOK HABIS — tile produk yang stoknya habis (terbatas dan = 0) berdenyut merah pelan (class habis, 1,2 dtk sekali); ketuk produk habis menampilkan "Stok habis" dan tidak masuk keranjang; stok menipis tetap merah polos tanpa kedip (kedip = habis, merah polos = menipis); produk tanpa batas stok tidak berkedip.
   v1.8.1 (25 Nov 2026): (1) AKTIVASI KODE SAJA — kolom email DIHAPUS dari semua tempat aktivasi (layar kunci, kartu Lisensi); aktivasi hanya butuh kode seperti dulu (perintah ARIFIN 21:15 WITA: v1.8.0 "terlalu ribet"). Email HANYA diminta di dua tempat: "Lupa kode?" (kirim ulang kode) dan "Pindah ke perangkat ini" (bila kode sudah dipakai perangkat lain + email cocok -> ikat ulang; record lama tanpa email menerima email yang dimasukkan). (2) PESAN GALAT JUJUR — fetch yang ditolak hanya disebut "tidak ada internet" bila navigator.onLine === false; bila internet menyala tapi fetch gagal -> "Tidak bisa terhubung ke server"; bila server menjawab dengan status bukan 2xx (mis. rules menolak tulis -> permission denied) -> "Server menolak, coba lagi". Berlaku di aktivasi, pindah perangkat, kirim ulang, dan keluar.
   v1.7.8 (25 Nov 2026): (1) CROP PERSEGI — satu pemotong untuk foto
   produk + gambar QRIS: sesudah pilih gambar, tampil bingkai persegi
   (geser untuk atur posisi, tombol ＋/－ untuk zoom, "Potong" simpan,
   "Batal" kembali tanpa menyimpan; tanpa pustaka luar); (2) QRIS
   TAJAM — gambar QRIS disimpan PNG (bukan JPEG 0.72) sisi terpanjang
   maks 1024px supaya tepi kode QR tetap tajam dan mudah di-scan
   (JPEG + diperkecil ke 512/320px yang membuat buram); (3) QRIS LAYAR
   PENUH — ketuk tombol QRIS di kasir (atau gambar QRIS di area QRIS)
   membuka overlay layar penuh: gambar QRIS besar + total besar +
   tombol Simpan Transaksi; Tutup kembali ke kasir (metode tetap QRIS).
   v1.7.7 (25 Nov 2026): (1) TOMBOL FLASH DI KAMERA BARCODE — tombol
   "🔦 Lampu" di modal scan (tersembunyi bila HP tidak mendukung torch;
   pustaka html5-qrcode sudah punya getRunningTrackCameraCapabilities +
   applyVideoConstraints); (2) PILIHAN PEMBAYARAN TUNAI / QRIS DI KASIR
   — dua tombol besar di keranjang (kembali ke Tunai tiap transaksi
   baru); QRIS: gambar QRIS warung diunggah di Pengaturan (diperkecil
   seperti foto produk, ikut cadangan JSON), area QRIS tampil di kasir
   (gambar + total + 1 kalimat), bayar = total, kembalian 0, transaksi
   tercatat metode tunai/qris (struk + Riwayat + Laporan dipisah).
   QRIS di sini STATIS: jumlah tetap diketik pembeli di aplikasi
   banknya — aplikasi offline tidak bisa membuat QRIS dinamis.
   v1.7.6 (25 Nov 2026): TATA LETAK TABLET OTOMATIS — aturan CSS
   @media screen (min-width: 768px): konten utama melebar (main 960px),
   grid Pilih Produk 3 kolom, tab Kasir 2 kolom (kiri keranjang +
   subtotal + total, kanan diskon/bayar/kembalian/tombol Simpan),
   dialog/modal melebar (560px). Di HP layar kecil tidak ada perubahan;
   urutan DOM dan logika JS tidak berubah.
   v1.7.5 (25 Nov 2026): PILIHAN CETAK EKSPLISIT — tiap tekan Cetak
   (label barcode maupun struk) tanya dulu lewat dialog kecil dua
   tombol besar: "PDF / Printer biasa" (dialog print sistem v1.7.4)
   atau "Printer Bluetooth" (ESC/POS 58mm; label thermal berisi nama +
   harga + barcode CODE128 GS k 73 + teks kode di bawah barcode,
   jumlah salinan ikut pemilih 1–48); bila Bluetooth belum terhubung,
   beri tahu singkat + arahkan ke Pengaturan > Printer.
   v1.7.4 (25 Nov 2026): (1) PEMBERITAHUAN UPDATE — saat layar utama
   dibuka + online, baca node /versi Firebase RTDB (fetch polos, tanpa
   secret); bila vc jarak jauh > VERSI_KODE lokal, dialog "Ada versi
   baru X — Unduh / Nanti", maks 1x sehari, tidak paksa, tidak unduh
   otomatis; (2) CETAK tersambung ke dialog print sistem Android lewat
   bridge native PrintBridge (window.print() polos di WebView tidak
   memunculkan apa-apa); lembar label barcode A4: N salinan label yang
   sama, grid 3 kolom, tiap label nama + harga + barcode CODE128 + kode.
   v1.7.3 (25 Nov 2026): URL database Firebase DI-HARDCODE, kolom URL
   dihapus dari Pengaturan; kartu Lisensi punya kolom masukkan kode +
   tombol "Aktifkan Kode"; spanduk masa percobaan bisa diketuk (buka
   Pengaturan + fokus ke kolom kode); teks versi jadi 1.7.3.
   v1.7.2 (25 Nov 2026): tautan "Beli Kode di lynk.id" (sambutan + kunci)
   langsung ke listing kode; teks versi "Tentang KasirKu" + catatan
   Laporan jadi 1.7.2.
   v1.7 (25 Nov 2026): tombol Hapus di tiap kartu Riwayat + modal 3 pilihan
   (Simpan dulu / Hapus / Batal); undo "Baru Dihapus" — transaksi terhapus
   bisa dipulihkan 1 hari; Riwayat tampil 50 terbaru + "Tampilkan lebih
   banyak" (+50); pengingat cadangan otomatis tiap 30 hari. TEKS SIMPEL
   (perintah pemilik 25 Nov 09:19): dialog dan tombol sependek mungkin,
   tanpa keterangan panjang.
   v1.6 (25 Nov 2026): Modal/HPP keluar dari "Lanjutan (opsional)" ke form
   utama; format ribuan otomatis saat mengetik uang (bayar/diskon/harga/
   modal) + pengurai bacaUang; jumlah di keranjang bisa diketik langsung;
   fokus kolom uang menggulir tombol Simpan ke tampilan (keyboard tidak
   menutupi Kembalian + Simpan); satuan baru Dus/Kg/Gram/Bungkus/Sachet/
   Renteng/Botol/Butir/Tabung (Kg/Gram curah desimal seperti Liter/mili).
   v1.5 (25 Nov 2026): layar sambutan (trial mulai HANYA sesudah tombol
   trial diketuk; masukkan kode dari sambutan); motto "Hitung cepat,
   jualan tenang."; printer hanya perangkat dipasangkan + animasi loading
   + daftar dikosongkan saat Bluetooth mati; Laporan: Produk Terlaris
   top 5 (sepanjang waktu) + Rekap Harian; Riwayat dikelompokkan per
   tanggal; tile menipis merah + batas minStok di form produk; Backup
   JSON + pulihkan + ekspor rekap CSV; tab Kasbon (tambah/lunas/tagih
   via WA); UI ramah semua usia.
   v1.4 — logika kasir toko lokal (web standar murni).
   v1.4: CETAK BLUETOOTH ESC/POS (permintaan ARIFIN 23 Nov 2026 —
   printer thermal dinyalakan tapi aplikasi tidak bisa menemukannya karena
   belum ada pencarian perangkat; tombol Cetak lama hanya dialog print
   sistem yang tidak melihat printer thermal Bluetooth). Pengaturan >
   Printer: cari perangkat (scan Bluetooth classic) + hubungkan + simpan
   + Cetak Tes; koneksi native RFCOMM SPP di MainActivity (WebView tidak
   bisa Bluetooth classic — Web Bluetooth hanya BLE GATT); byte ESC/POS
   58mm (32 kolom) dibentuk di JS (murni, bisa diuji Node) lalu dikirim
   native; tombol Cetak (sesudah bayar + riwayat) memakai Bluetooth bila
   printer tersimpan dan terhubung, bila tidak FALLBACK ke dialog print
   sistem. Isi struk TIDAK diubah (teksStruk yang sama).
   v1.4-test3: (1) IKON LAUNCHER PAS — foreground adaptive dibuat ulang
   (gambar mesin kasir diskalakan ke 62% bingkai, muat di zona aman 66dp;
   foreground lama gambar utuh terpotong masker launcher); (2) RIWAYAT:
   tiap kartu transaksi ada tombol Cetak + WA (cetak struk lewat
   window.print, WA memakai ulang teksStruk + linkWa).
   v1.4-test2: (1) TOMBOL KEMBALI pola SAMRIDE — onBackPressed native
   v1.4: KUNCI LISENSI + TRIAL 7 HARI (install -> pakai bebas 7 hari ->
   hari ke-8 terkunci -> kode unik terikat perangkat, cek ke Firebase RTDB
   sekali) + FOTO PRODUK (kamera/galeri, diperkecil sebelum simpan) +
   CETAK BARCODE SENDIRI (kode internal KSR-0001, CODE128 via JsBarcode
   bundle lokal, cetak label lewat window.print).
   v1.4-test2: (1) TOMBOL KEMBALI pola SAMRIDE — onBackPressed native
   diserahkan ke tanganiTombolKembali(): modal ditutup dulu, layar dalam
   kembali ke kasir, di kasir tampil dialog bersih "Apakah Anda ingin
   keluar?" (Ya/Tidak saja, tanpa URL/teks lain) -> Ya memanggil
   AndroidBridge.keluarAplikasi(); (2) tautan mailto:/tel: dibuka lewat
   Intent native (MainActivity), bukan WebView.
   v1.3: halaman Kasir bersih + halaman Pilih Produk (grid ketuk nama).
   Barcode BUKAN kunci produk: satu produk boleh pegang BANYAK barcode.
   Struk via WA (wa.me). Haptic: getar halus tiap ketukan tombol.
   Tanpa API khusus Android: data di localStorage, tanpa fetch/server
   kecuali SEKALI saat aktivasi kode (cek Firebase RTDB).
   Bagian logika (KasirLogic) tidak menyentuh DOM supaya bisa diuji di Node. */
(function (root) {
  "use strict";

  var KEY_PRODUK = "kasirku_products_v1";
  var KEY_TRX = "kasirku_txns_v1";
  var KEY_HURUF = "kasirku_huruf_v1";
  var MIN_STOK_DEFAULT = 5;
  var DURASI_GETAR = 12; /* ms — getar halus tiap ketukan tombol */
  /* v1.4 — lisensi + trial */
  var KEY_LISENSI = "kasirku_lisensi_v1";
  /* v1.4 — printer Bluetooth tersimpan (nama + MAC) */
  var KEY_PRINTER = "kasirku_printer_v1";
  /* v1.7.7 — gambar QRIS warung tersimpan (data URL, di Pengaturan) */
  var KEY_QRIS = "kasirku_qris_v1";
  var TRIAL_HARI = 7;          /* install -> pakai bebas 7 hari, hari ke-8 terkunci */
  var MASA_KODE_HARI = 30;     /* kode berlaku 30 hari sejak diterbitkan */

  /* Skala ukuran huruf: Normal 1, Besar 1.15, Sangat Besar 1.3. */
  var SKALA_HURUF = { normal: 1, besar: 1.15, sangat: 1.3 };
  function skalaHuruf(nama) {
    var s = SKALA_HURUF[String(nama || "").toLowerCase()];
    return s ? s : 1;
  }

  /* Getar aman: panggil vibrate bila tersedia, diam bila tidak ada/tidak
     didukung — tidak pernah melempar galat. */
  function getarAman(vibrateFn) {
    if (typeof vibrateFn !== "function") return false;
    try { vibrateFn(DURASI_GETAR); return true; }
    catch (e) { return false; }
  }

  function rupiah(n) {
    n = Math.round(Number(n) || 0);
    return "Rp" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function angka(v, def) {
    var n = parseFloat(v);
    return isNaN(n) ? (def || 0) : n;
  }

  /* v1.6 — baca uang yang diketik dengan pemisah ribuan ("20.000" -> 20000).
     angka() memakai parseFloat mentah ("20.000" terbaca 20), jadi uang yang
     tampil berformat ribuan WAJIB dibaca lewat helper ini, bukan angka(). */
  function bacaUang(v) {
    var s = String(v == null ? "" : v).replace(/\./g, "").trim();
    var n = parseFloat(s);
    return isNaN(n) ? 0 : n;
  }

  /* v1.6 — format ribuan tanpa "Rp": 20000 -> "20.000". */
  function formatRibu(n) {
    n = Math.round(Number(n) || 0);
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  /* Format jumlah: 2 -> "2", 0.5 -> "0,5", 100 -> "100". */
  function formatQty(q) {
    var s = String(Math.round(angka(q) * 100) / 100);
    return s.replace(".", ",");
  }

  function tanggalHariIni(d) {
    d = d || new Date();
    var m = d.getMonth() + 1, t = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (t < 10 ? "0" : "") + t;
  }

  function isBulk(p) {
    var s = (p && p.satuan) || "Pcs";
    return s === "Liter" || s === "mili" || s === "Kg" || s === "Gram";
  }

  function satuanLabel(p) {
    return (p && p.satuan) || "Pcs";
  }

  /* Stok terbatas = ada angka stok. Stok kosong/null = tidak dibatasi. */
  function stokTerbatas(p) {
    return p && p.stok !== null && p.stok !== undefined && p.stok !== "" && !isNaN(parseFloat(p.stok));
  }

  /* v1.5 — stok menipis: stok terbatas dan sudah di batas (minStok) atau
     di bawahnya. Produk lama tanpa minStok memakai bawaan 5. */
  function stokMenipis(p) {
    return !!stokTerbatas(p) && angka(p.stok) <= angka(p.minStok, MIN_STOK_DEFAULT);
  }

  /* Langkah + / - di keranjang: Pcs 1, Liter 0.5, mili 100, Kg 0.25, Gram 100. */
  function langkahQty(p) {
    var s = satuanLabel(p);
    if (s === "Liter") return 0.5;
    if (s === "mili") return 100;
    if (s === "Kg") return 0.25;
    if (s === "Gram") return 100;
    return 1;
  }

  /* Tombol cepat jumlah: Liter -> 1/2, 1, 2 ; mili -> 100, 250, 500 ;
     Kg -> 1/4, 1/2, 1 ; Gram -> 100, 250, 500. */
  function jumlahCepat(p) {
    var s = satuanLabel(p);
    if (s === "Liter") return [0.5, 1, 2];
    if (s === "mili") return [100, 250, 500];
    if (s === "Kg") return [0.25, 0.5, 1];
    if (s === "Gram") return [100, 250, 500];
    return [1, 2, 5];
  }

  function produkContoh() {
    return [
      { id: "p1", nama: "Minyak Goreng 2L", kategori: "Sembako", harga: 42000, hpp: 36000, stok: 12, satuan: "Pcs", barcodes: ["899123456001"], minStok: 5 },
      { id: "p2", nama: "Minyak Goreng Curah", kategori: "Sembako", harga: 15000, hpp: 12000, stok: 50, satuan: "Liter", barcodes: ["899123456002"], minStok: 5 },
      { id: "p3", nama: "Kopi Sachet", kategori: "Minuman", harga: 1500, hpp: 1000, stok: 48, satuan: "Pcs", barcodes: ["899123456003"], minStok: 10 },
      { id: "p4", nama: "Mie Instan", kategori: "Makanan", harga: 3500, hpp: 2800, stok: 30, satuan: "Pcs", barcodes: ["899123456004"], minStok: 5 },
      { id: "p5", nama: "Sirup Melon", kategori: "Minuman", harga: 25, hpp: 18, stok: 5000, satuan: "mili", barcodes: ["899123456005"], minStok: 5 },
      { id: "p6", nama: "Gorengan Pisang", kategori: "Gorengan", harga: 2000, hpp: 1200, stok: null, satuan: "Pcs", barcodes: [], minStok: 5 },
      { id: "p7", nama: "Es Teh Manis", kategori: "Minuman", harga: 5000, hpp: 2000, stok: null, satuan: "Pcs", barcodes: [], minStok: 5 }
    ];
  }

  /* Migrasi data v1.0/v1.1/v1.2 -> v1.3: semua field lama dipertahankan apa
     adanya, field yang belum ada diisi default. Barcode tunggal lama
     (field `barcode`) diubah jadi array `barcodes` berisi satu barcode.
     Tidak ada data yang dihapus. */
  function migrasikanProduk(products) {
    return (products || []).map(function (p) {
      var c = {}; for (var k in p) c[k] = p[k];
      if (!c.satuan) c.satuan = "Pcs";
      if (c.minStok === undefined || c.minStok === null || c.minStok === "") c.minStok = MIN_STOK_DEFAULT;
      if (!c.kategori) c.kategori = "Umum";
      /* hpp kosong (undefined/null/"") = tidak diketahui -> laba tidak dihitung */
      if (c.hpp === undefined || c.hpp === null || c.hpp === "") c.hpp = 0;
      /* v1.4: foto produk — dipertahankan bila ada, null bila belum ada */
      if (c.foto === undefined) c.foto = null;
      /* v1.3: barcode tunggal -> array barcodes (satu produk boleh banyak barcode) */
      if (!c.barcodes || !c.barcodes.length) {
        c.barcodes = c.barcode ? [String(c.barcode).trim()] : [];
      }
      delete c.barcode;
      return c;
    });
  }

  /* Semua barcode milik satu produk (array; produk tanpa barcode -> []). */
  function barcodes(p) {
    if (!p) return [];
    if (p.barcodes && p.barcodes.length) return p.barcodes.slice();
    if (p.barcode) return [String(p.barcode).trim()];
    return [];
  }

  /* Sambungkan barcode baru ke produk (murni, tanpa mutasi): bila sudah ada,
     kembalikan salinan apa adanya; bila belum, tambahkan ke akhir array. */
  function tambahBarcode(products, idProduk, kode) {
    kode = String(kode == null ? "" : kode).trim();
    var salin = products.map(function (p) {
      var c = {}; for (var k in p) c[k] = p[k];
      c.barcodes = barcodes(p);
      delete c.barcode;
      return c;
    });
    if (!kode) return salin;
    for (var i = 0; i < salin.length; i++) {
      if (salin[i].id === idProduk) {
        var ada = false;
        for (var j = 0; j < salin[i].barcodes.length; j++)
          if (salin[i].barcodes[j] === kode) ada = true;
        if (!ada) salin[i].barcodes.push(kode);
      }
    }
    return salin;
  }

  /* Kelompokkan produk per kategori untuk grid Pilih Produk. Produk tanpa
     kategori masuk "Lainnya" (selalu paling akhir). */
  function susunKategori(products) {
    var urutan = [], kelompok = {};
    (products || []).forEach(function (p) {
      var kat = (p.kategori || "").trim() || "Lainnya";
      if (!kelompok[kat]) { kelompok[kat] = []; urutan.push(kat); }
      kelompok[kat].push(p);
    });
    urutan.sort(function (a, b) {
      if (a === "Lainnya") return 1;
      if (b === "Lainnya") return -1;
      return a < b ? -1 : a > b ? 1 : 0;
    });
    return urutan.map(function (kat) { return { kategori: kat, items: kelompok[kat] }; });
  }

  /* Ketuk nama produk: Pcs langsung masuk keranjang (false = tidak perlu
     panel jumlah); barang curah (Liter/mili/Kg/Gram) perlu panel jumlah dulu (true). */
  function butuhJumlah(p) {
    return isBulk(p);
  }

  function hitungSubtotal(items) {
    var s = 0;
    for (var i = 0; i < items.length; i++) s += angka(items[i].harga) * angka(items[i].qty);
    return s;
  }

  function hitungTotal(subtotal, diskon) {
    var d = Math.max(0, angka(diskon));
    return Math.max(0, angka(subtotal) - d);
  }

  function hitungKembalian(bayar, total) {
    return angka(bayar) - angka(total);
  }

  function hitungLaba(items) {
    var l = 0;
    for (var i = 0; i < items.length; i++)
      l += (angka(items[i].harga) - angka(items[i].hpp)) * angka(items[i].qty);
    return l;
  }

  /* Apakah ada HPP yang diketahui di item-item ini (untuk tampilkan laba)? */
  function adaHpp(items) {
    for (var i = 0; i < items.length; i++) if (angka(items[i].hpp) > 0) return true;
    return false;
  }

  function cariProduk(products, q) {
    q = (q || "").toLowerCase().trim();
    if (!q) return products.slice();
    return products.filter(function (p) {
      return (p.nama + " " + (p.kategori || "") + " " + barcodes(p).join(" "))
        .toLowerCase().indexOf(q) !== -1;
    });
  }

  function cariByBarcode(products, kode) {
    kode = String(kode == null ? "" : kode).trim();
    if (!kode) return null;
    for (var i = 0; i < products.length; i++) {
      var daftar = barcodes(products[i]);
      for (var j = 0; j < daftar.length; j++)
        if (String(daftar[j]).trim() === kode) return products[i];
    }
    return null;
  }

  /* Teks struk untuk dikirim via WhatsApp. */
  function teksStruk(trx) {
    var garis = "------------------------------";
    var baris = ["*KasirKu*", trx.waktu, garis];
    trx.items.forEach(function (it) {
      baris.push(it.nama + " x " + formatQty(it.qty) + " " + (it.satuan || "Pcs")
        + " = " + rupiah(it.harga * it.qty));
    });
    baris.push(garis);
    baris.push("Subtotal: " + rupiah(trx.subtotal));
    if (trx.diskon > 0) baris.push("Diskon: " + rupiah(trx.diskon));
    baris.push("*Total: " + rupiah(trx.total) + "*");
    /* v1.7.7 — baris Metode; QRIS: bayar = total, tanpa kembalian. */
    baris.push("Metode: " + (trx.metode === "qris" ? "QRIS" : "Tunai"));
    if (trx.metode === "qris") {
      baris.push("QRIS: " + rupiah(trx.bayar));
    } else {
      baris.push("Tunai: " + rupiah(trx.bayar));
      baris.push("Kembalian: " + rupiah(trx.kembalian));
    }
    baris.push("Terima kasih sudah berbelanja!");
    return baris.join("\n");
  }

  /* Tautan WA: nomor terisi -> wa.me/nomor; kosong -> api.whatsapp.com/send
     (pengguna pilih kontak sendiri). Nomor dibersihkan ke digit saja. */
  function linkWa(nomor, teks) {
    var digit = String(nomor || "").replace(/[^0-9]/g, "");
    if (digit.indexOf("0") === 0) digit = "62" + digit.slice(1);
    var isi = encodeURIComponent(teks);
    if (digit) return "https://wa.me/" + digit + "?text=" + isi;
    return "https://api.whatsapp.com/send?text=" + isi;
  }

  /* ================= ESC/POS 58mm — printer thermal Bluetooth (v1.4)
     WebView tidak bisa Bluetooth classic (Web Bluetooth hanya BLE GATT),
     sedangkan printer thermal pakai SPP — jadi byte dibentuk di sini
     (logika murni, bisa diuji di Node) lalu dikirim native lewat
     PrinterBridge.printBase64. Lebar struk 58mm = 32 kolom.
     Isi struk TIDAK diubah: teksStruk yang sama dengan struk WA / cetak
     sistem, hanya jalurnya yang baru. */
  var ESCPOS_LEBAR = 32;
  function escposBersih(teks) {
    // buang penanda tebal WA (*) + ganti karakter non-Latin-1 (mis. —) jadi "-"
    return String(teks == null ? "" : teks).replace(/\*/g, "")
      .replace(/[^\x00-\xFF]/g, "-");
  }
  function escposPotongBaris(baris) {
    // potong baris yang lebih panjang dari 32 kolom; usahakan putus di spasi
    var bersih = escposBersih(baris), keluar = [];
    while (bersih.length > ESCPOS_LEBAR) {
      var pot = bersih.lastIndexOf(" ", ESCPOS_LEBAR);
      if (pot <= 0) pot = ESCPOS_LEBAR;
      keluar.push(bersih.slice(0, pot));
      bersih = bersih.slice(pot).replace(/^ +/, "");
    }
    keluar.push(bersih);
    return keluar;
  }
  function escposBytes(teks) {
    var b = [0x1B, 0x40]; /* ESC @ = init printer */
    String(teks == null ? "" : teks).split("\n").forEach(function (baris) {
      escposPotongBaris(baris).forEach(function (p) {
        for (var i = 0; i < p.length; i++) b.push(p.charCodeAt(i) & 0xFF);
        b.push(0x0A); /* LF */
      });
    });
    b.push(0x0A, 0x0A, 0x0A, 0x1D, 0x56, 0x00); /* feed 3 baris + GS V = potong kertas */
    return b;
  }
  function escposBase64(teks) {
    var b = escposBytes(teks), s = "";
    for (var i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
    if (typeof btoa !== "undefined") return btoa(s);
    return ""; /* Node (uji) tidak punya btoa — byte diuji langsung via escposBytes */
  }
  function teksStrukTes(namaPrinter) {
    return "KasirKu\nTes Printer Bluetooth\n" + (namaPrinter || "Printer thermal 58mm")
      + "\n------------------------------\nCetak tes berhasil\nTerima kasih";
  }

  /* ============ LABEL THERMAL 58mm via Bluetooth (v1.7.5) ============
     Satu label: nama produk + harga + barcode CODE128 + teks kode di
     bawah barcode (HRI). Barcode dibentuk dengan perintah ESC/POS baku
     GS k 73 (CODE128, Code Set B — awalan "{B"), lebar modul GS w 2
     (lebar total ±290 dot < 384 dot lebar kertas 58mm; w 3 akan
     meluber), tinggi GS h 64, HRI di bawah barcode (GS H 2, font A).
     Byte dibentuk murni di sini (bisa diuji Node) lalu dikirim native
     lewat PrinterBridge.printBase64 — pola yang sama dengan struk. */
  function jepitJumlahLabel(n) {
    n = parseInt(n, 10);
    if (isNaN(n)) return 12; /* bawaan pemilih jumlah label */
    return Math.max(1, Math.min(48, n));
  }
  function escposKodeBarcode(kode) {
    /* hanya karakter ASCII yang bisa dikode Code Set B (0x20-0x7E) */
    return String(kode == null ? "" : kode).replace(/[^\x20-\x7E]/g, "");
  }
  function escposTengah(baris) {
    var b = escposBersih(baris);
    if (b.length >= ESCPOS_LEBAR) return b;
    var kiri = Math.floor((ESCPOS_LEBAR - b.length) / 2);
    return new Array(kiri + 1).join(" ") + b;
  }
  function escposLabelBytes(nama, hargaRupiah, kode) {
    var k = escposKodeBarcode(kode);
    if (!k) return [];
    var b = [0x1B, 0x40]; /* ESC @ = init printer */
    b.push(0x1B, 0x61, 0x01); /* ESC a 1 = rata tengah */
    escposPotongBaris(nama || "").forEach(function (p) {
      var t = escposTengah(p);
      for (var i = 0; i < t.length; i++) b.push(t.charCodeAt(i) & 0xFF);
      b.push(0x0A);
    });
    var h = escposTengah(hargaRupiah || "");
    for (var j = 0; j < h.length; j++) b.push(h.charCodeAt(j) & 0xFF);
    b.push(0x0A);
    b.push(0x1D, 0x77, 0x02); /* GS w 2 = lebar modul barcode */
    b.push(0x1D, 0x68, 0x40); /* GS h 64 = tinggi barcode */
    b.push(0x1D, 0x66, 0x00); /* GS f 0 = font HRI A */
    b.push(0x1D, 0x48, 0x02); /* GS H 2 = teks kode di bawah barcode */
    var data = "{B" + k;
    b.push(0x1D, 0x6B, 0x49, data.length); /* GS k 73 = CODE128 */
    for (var d = 0; d < data.length; d++) b.push(data.charCodeAt(d) & 0xFF);
    b.push(0x1B, 0x61, 0x00); /* ESC a 0 = rata kiri lagi */
    b.push(0x0A, 0x0A, 0x0A, 0x1D, 0x56, 0x00); /* feed + GS V = potong */
    return b;
  }
  function escposLabelBanyakBytes(nama, hargaRupiah, kode, jumlah) {
    var satu = escposLabelBytes(nama, hargaRupiah, kode);
    if (!satu.length) return [];
    var n = jepitJumlahLabel(jumlah), keluar = [];
    for (var i = 0; i < n; i++) keluar = keluar.concat(satu);
    return keluar;
  }
  function escposBytesKeBase64(bytes) {
    var s = "";
    for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i] & 0xFF);
    if (typeof btoa !== "undefined") return btoa(s);
    return ""; /* Node (uji) tidak punya btoa — byte diuji langsung */
  }
  function escposLabelBase64(nama, hargaRupiah, kode, jumlah) {
    return escposBytesKeBase64(escposLabelBanyakBytes(nama, hargaRupiah, kode, jumlah));
  }

  /* Tambah item ke keranjang (murni, tanpa mutasi): produk yang sama bergabung
     di satu baris, jumlahnya dijumlah. qty default 1 (untuk Pcs hasil scan). */
  function tambahItem(cart, produk, qty) {
    var q = angka(qty, 0);
    if (!(q > 0)) q = 1;
    var baru = cart.map(function (c) { return { id: c.id, qty: c.qty }; });
    var ada = null;
    baru.forEach(function (c) { if (c.id === produk.id) ada = c; });
    if (ada) ada.qty = Math.round((angka(ada.qty) + q) * 100) / 100;
    else baru.push({ id: produk.id, qty: q });
    return baru;
  }

  function stokKurang(products, items) {
    var kurang = [];
    for (var i = 0; i < items.length; i++) {
      var p = null;
      for (var j = 0; j < products.length; j++) if (products[j].id === items[i].id) p = products[j];
      if (!p) { kurang.push({ id: items[i].id, nama: items[i].nama, perlu: items[i].qty, ada: 0 }); continue; }
      if (!stokTerbatas(p)) continue; /* stok tidak dibatasi */
      if (angka(p.stok) < angka(items[i].qty))
        kurang.push({ id: p.id, nama: p.nama, perlu: items[i].qty, ada: p.stok });
    }
    return kurang;
  }

  /* Kembalikan salinan produk dengan stok sudah dikurangi (tidak mutasi input).
     Produk tanpa batas stok tidak berubah. */
  function terapkanPenjualan(products, items) {
    var salin = products.map(function (p) {
      var c = {}; for (var k in p) c[k] = p[k]; return c;
    });
    for (var i = 0; i < items.length; i++)
      for (var j = 0; j < salin.length; j++)
        if (salin[j].id === items[i].id && stokTerbatas(salin[j]))
          salin[j].stok = Math.round((angka(salin[j].stok) - angka(items[i].qty)) * 100) / 100;
    return salin;
  }

  function ringkasan(txns, tanggal) {
    var omset = 0, laba = 0, n = 0, labaAda = false;
    for (var i = 0; i < txns.length; i++) {
      if (txns[i].tanggal === tanggal) {
        omset += angka(txns[i].total); laba += angka(txns[i].laba); n++;
        if (adaHpp(txns[i].items)) labaAda = true;
      }
    }
    return { omset: omset, laba: laba, jumlah: n, labaAda: labaAda };
  }

  /* v1.7.7 — omset hari ini dipisah Tunai vs QRIS (untuk Laporan).
     Transaksi lama tanpa field metode dihitung Tunai (bawaan). */
  function ringkasanMetode(txns, tanggal) {
    var t = { tunaiOmset: 0, tunaiJumlah: 0, qrisOmset: 0, qrisJumlah: 0 };
    for (var i = 0; i < txns.length; i++) {
      if (txns[i].tanggal !== tanggal) continue;
      if (txns[i].metode === "qris") { t.qrisOmset += angka(txns[i].total); t.qrisJumlah++; }
      else { t.tunaiOmset += angka(txns[i].total); t.tunaiJumlah++; }
    }
    return t;
  }

  /* v1.5 — rekap harian: kelompokkan transaksi per tanggal (YYYY-MM-DD),
     tanggal terbaru dulu. Tiap baris: tanggal, omset, laba, jumlah
     transaksi, labaAda (true bila ada HPP diketahui hari itu). */
  function rekapHarian(txns) {
    var map = {}, urutan = [];
    (txns || []).forEach(function (t) {
      var k = (t && t.tanggal) || "";
      if (!k) return;
      if (!map[k]) { map[k] = { tanggal: k, omset: 0, laba: 0, jumlah: 0, labaAda: false }; urutan.push(k); }
      map[k].omset += angka(t.total);
      map[k].laba += angka(t.laba);
      map[k].jumlah += 1;
      if (t.labaAda) map[k].labaAda = true;
    });
    urutan.sort().reverse();
    return urutan.map(function (k) { return map[k]; });
  }

  /* v1.5 — kelompokkan riwayat per tanggal (terbaru dulu), tiap kelompok
     berisi transaksi hari itu + total omset hari itu. Urutan transaksi
     di dalam kelompok dipertahankan apa adanya (paling baru dulu). */
  function kelompokRiwayat(txns) {
    var map = {}, urutan = [];
    (txns || []).forEach(function (t) {
      var k = (t && t.tanggal) || "";
      if (!k) return;
      if (!map[k]) { map[k] = { tanggal: k, omset: 0, jumlah: 0, trx: [] }; urutan.push(k); }
      map[k].omset += angka(t.total);
      map[k].jumlah += 1;
      map[k].trx.push(t);
    });
    urutan.sort().reverse();
    return urutan.map(function (k) { return map[k]; });
  }

  /* v1.5 — Produk Terlaris: jumlah terjual per produk di seluruh
     transaksi, urut terbanyak dulu, maksimal 5 produk. Kalau baru 2
     produk yang pernah terjual, tampilkan 2 saja — tanpa slot kosong.
     Periode: sepanjang waktu (paling sederhana dan konsisten). */
  var TERLARIS_MAKS = 5;
  function produkTerlaris(txns, maks) {
    var m = (maks == null) ? TERLARIS_MAKS : Math.max(0, Math.floor(maks));
    var map = {}, urutan = [];
    (txns || []).forEach(function (t) {
      (t.items || []).forEach(function (it) {
        var k = it.id || it.nama || "?";
        if (!map[k]) { map[k] = { id: it.id || null, nama: it.nama || "?", qty: 0, total: 0 }; urutan.push(k); }
        map[k].qty = Math.round((map[k].qty + angka(it.qty)) * 100) / 100;
        map[k].total += angka(it.harga) * angka(it.qty);
      });
    });
    var daftar = urutan.map(function (k) { return map[k]; });
    daftar.sort(function (a, b) {
      if (b.qty !== a.qty) return b.qty - a.qty;
      return a.nama < b.nama ? -1 : a.nama > b.nama ? 1 : 0;
    });
    return daftar.slice(0, m);
  }

  /* ============ HAPUS TRANSAKSI + UNDO 1 HARI + BATAS TAMPIL (v1.7) ============
     Teks aplikasi dibuat SIMPEL (perintah pemilik 25 Nov 09:19): dialog dan
     tombol sependek mungkin, tanpa keterangan panjang. */
  var KEY_TERHAPUS = "kasirku_terhapus_v1";
  var KEY_CADANGAN_TERAKHIR = "kasirku_cadangan_terakhir_v1";
  var KEY_CADANGAN_INGAT_TERAKHIR = "kasirku_cadangan_ingat_terakhir_v1"; /* v1.7.1 — kapan pengingat terakhir DITAMPILKAN */
  var TERHAPUS_MAKS = 50;                 /* simpanan "Baru Dihapus" maks 50 entri */
  var TERHAPUS_MASA_MS = 24 * 3600 * 1000; /* bisa dipulihkan 1 hari */
  var RIWAYAT_TAMPIL_AWAL = 50;           /* tampil 50 terbaru (batas tampilan saja) */
  var RIWAYAT_TAMBAH = 50;                /* "Tampilkan lebih banyak" +50 tiap ketuk */
  var CADANGAN_INGAT_HARI = 30;           /* pengingat cadangan tiap 30 hari */

  /* Urutan riwayat dari yang terbaru (kelompok per tanggal, terbaru dulu;
     di dalam satu tanggal mengikuti urutan txns — transaksi baru di depan). */
  function urutRiwayatBaru(list) {
    var hasil = [];
    kelompokRiwayat(list).forEach(function (g) { hasil = hasil.concat(g.trx); });
    return hasil;
  }
  /* Batas TAMPILAN saja: ambil N transaksi terbaru, tanpa mengubah data. */
  function batasTampilRiwayat(list, batas) {
    return urutRiwayatBaru(list).slice(0, Math.max(0, batas || 0));
  }
  /* Sisa transaksi yang belum tampil (untuk label tombol "lebih banyak"). */
  function sisaRiwayat(jumlah, batas) {
    return Math.max(0, angka(jumlah) - Math.max(0, batas || 0));
  }
  /* Hapus satu transaksi ke "Baru Dihapus" (murni, tanpa mutasi). */
  function hapusTransaksiKeTempatSampah(list, terhapus, idx, sekarangMs) {
    var tx = (list || []).slice();
    var th = (terhapus || []).slice();
    if (idx == null || idx < 0 || idx >= tx.length) return { txns: tx, terhapus: th, dihapus: null };
    var t = tx[idx];
    tx.splice(idx, 1);
    th.unshift({ trx: t, dihapusMs: Number(sekarangMs) || Date.now() });
    if (th.length > TERHAPUS_MAKS) th.length = TERHAPUS_MAKS;
    return { txns: tx, terhapus: th, dihapus: t };
  }
  /* Pulihkan transaksi terhapus ke urutan kronologis yang benar (murni).
     txns tersimpan terbaru dulu (id TRX-<ms> menurun), jadi sisipkan
     berdasarkan angka di id. */
  function pulihkanTransaksi(list, terhapus, id) {
    var tx = (list || []).slice();
    var th = (terhapus || []).slice();
    var pos = -1, entri = null;
    for (var i = 0; i < th.length; i++) {
      if (th[i] && th[i].trx && th[i].trx.id === id) { pos = i; entri = th[i]; break; }
    }
    if (!entri) return { txns: tx, terhapus: th, dipulihkan: false };
    th.splice(pos, 1);
    var ms = 0;
    var m = String(entri.trx.id || "").match(/^TRX-(\d+)/);
    if (m) ms = Number(m[1]);
    var sisip = tx.length;
    for (var j = 0; j < tx.length; j++) {
      var mj = String(tx[j].id || "").match(/^TRX-(\d+)/);
      var msj = mj ? Number(mj[1]) : 0;
      if (ms > msj) { sisip = j; break; }
    }
    tx.splice(sisip, 0, entri.trx);
    return { txns: tx, terhapus: th, dipulihkan: true };
  }
  /* Buang entri terhapus yang sudah lebih dari 24 jam (murni). */
  function buangTerhapusKedaluarsa(terhapus, sekarangMs) {
    var kini = Number(sekarangMs) || Date.now();
    return (terhapus || []).filter(function (e) {
      return e && e.trx && e.trx.id && (kini - Number(e.dihapusMs || 0)) <= TERHAPUS_MASA_MS;
    });
  }
  /* Perlu ingatkan cadangan? Ada transaksi DAN jatuh tempo (belum pernah
     cadangan ATAU cadangan terakhir sudah >= 30 hari) DAN pengingat belum
     pernah ditampilkan ATAU sudah >= 30 hari sejak terakhir ditampilkan
     (v1.7.1 — supaya tidak muncul tiap buka aplikasi). Argumen ke-4 boleh
     kosong (pemanggil lama): dianggap belum pernah ditampilkan. */
  function perluIngatCadangan(terakhirMs, jumlahTxns, sekarangMs, ditampilkanMs) {
    if (!(angka(jumlahTxns) >= 1)) return false;
    var kini = Number(sekarangMs);
    var jatuhTempo;
    if (terakhirMs == null || isNaN(Number(terakhirMs))) jatuhTempo = true;
    else jatuhTempo = (kini - Number(terakhirMs)) >= CADANGAN_INGAT_HARI * 86400000;
    if (!jatuhTempo) return false;
    if (ditampilkanMs == null || isNaN(Number(ditampilkanMs))) return true;
    return (kini - Number(ditampilkanMs)) >= CADANGAN_INGAT_HARI * 86400000;
  }

  function buatTransaksi(items, diskon, bayar, sekarang, metode) {
    var subtotal = hitungSubtotal(items);
    var total = hitungTotal(subtotal, diskon);
    var d = sekarang || new Date();
    return {
      id: "TRX-" + d.getTime(),
      waktu: d.toLocaleString("id-ID"),
      tanggal: tanggalHariIni(d),
      /* v1.7.7 — metode pembayaran ("tunai" bawaan; "qris" bila dipilih
         di kasir). Transaksi lama tanpa field ini dihitung Tunai. */
      metode: metode === "qris" ? "qris" : "tunai",
      items: items.map(function (it) {
        return { id: it.id, nama: it.nama, harga: angka(it.harga), hpp: angka(it.hpp), qty: angka(it.qty), satuan: it.satuan || "Pcs" };
      }),
      subtotal: subtotal,
      diskon: Math.max(0, angka(diskon)),
      total: total,
      bayar: angka(bayar),
      kembalian: hitungKembalian(bayar, total),
      laba: hitungLaba(items),
      labaAda: adaHpp(items)
    };
  }

  /* ================= LISENSI + TRIAL (v1.4) =================
     Trial 7 hari otomatis sejak install pertama; hari ke-8 terkunci.
     Kode unik (KSR-XXXX-XXXX-XXXX) dicek ke Firebase RTDB SEKALI saat
     aktivasi, lalu terikat perangkat itu dan kebuka selamanya; pakai
     harian tetap offline. Kode berlaku 30 hari sejak diterbitkan. */

  /* ID perangkat: dibuat sekali, tersimpan di localStorage. Install ulang
     = ID baru (trial mulai lagi dari nol — penahan alami, data warung
     ikut hilang tiap install ulang). */
  function buatIdPerangkat() {
    var h = "0123456789abcdef", s = "";
    for (var i = 0; i < 8; i++) s += h[Math.floor(Math.random() * 16)];
    return "KSR-DEV-" + s;
  }

  /* Hari penuh yang berlalu sejak install (negatif -> 0). */
  function hariBerlalu(installMs, sekarangMs) {
    var d = Math.floor((Number(sekarangMs) - Number(installMs)) / 86400000);
    return d < 0 ? 0 : d;
  }

  /* Status lisensi: {status: "belum-mulai"|"trial"|"aktif"|"terkunci", sisaHari}.
     Aktif = sudah masukkan kode (selamanya). Belum-mulai (v1.5) = layar
     sambutan belum dijawab — trial BELUM jalan. Trial = sisa hari hitung
     mundur sejak tombol trial diketuk. Terkunci = trial habis dan belum aktif. */
  function statusLisensi(lisensi, sekarangMs) {
    var l = lisensi || {};
    if (l.aktif) return { status: "aktif", sisaHari: null };
    if (!l.installMs) return { status: "belum-mulai", sisaHari: null };
    var berlalu = hariBerlalu(l.installMs, sekarangMs);
    if (berlalu < TRIAL_HARI) return { status: "trial", sisaHari: TRIAL_HARI - berlalu };
    return { status: "terkunci", sisaHari: 0 };
  }

  function normalisasiKode(kode) {
    return String(kode == null ? "" : kode).trim().toUpperCase();
  }

  function validasiFormatKode(kode) {
    return /^KSR-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(normalisasiKode(kode));
  }

  /* Sisa hari berlakunya kode (boleh negatif bila sudah lewat). */
  function sisaHariKode(berlakuSampaiMs, sekarangMs) {
    return Math.ceil((Number(berlakuSampaiMs) - Number(sekarangMs)) / 86400000);
  }

  /* Record kode seperti yang ditulis Worker ke RTDB (dipakai Worker juga). */
  function buatRecordKode(kode, sekarangMs) {
    var m = Number(sekarangMs) || Date.now();
    return {
      kode: normalisasiKode(kode),
      dibuat: new Date(m).toISOString(),
      dibuatMs: m,
      berlakuSampaiMs: m + MASA_KODE_HARI * 86400000,
      status: "belum",
      deviceId: null
    };
  }

  /* Kode lisensi baru: KSR-XXXX-XXXX-XXXX, huruf tanpa O/I dan angka
     tanpa 0/1 supaya gampang dibaca/diketik pembeli. */
  function buatKodeBaru() {
    var abjad = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    function satu() {
      var g = "";
      for (var i = 0; i < 4; i++) g += abjad[Math.floor(Math.random() * abjad.length)];
      return g;
    }
    return "KSR-" + satu() + "-" + satu() + "-" + satu();
  }

  /* URL database RTDB yang ditempel di pengaturan: harus https + domain
     Firebase RTDB. Kosong/salah -> null (aplikasi memberi pesan jelas). */
  function normalisasiUrlDatabase(url) {
    var u = String(url == null ? "" : url).trim().replace(/\/+$/, "");
    if (!u) return null;
    if (u.indexOf("https://") !== 0) return null;
    if (u.indexOf("firebaseio.com") === -1 && u.indexOf("firebasedatabase.app") === -1) return null;
    if (/\s/.test(u)) return null;
    return u;
  }

  /* Perkiraan ukuran byte sebuah data URL (base64 -> byte). */
  function hitungUkuranDataUrl(dataUrl) {
    var s = String(dataUrl || "");
    var i = s.indexOf(",");
    var b64 = i === -1 ? s : s.slice(i + 1);
    return Math.floor(b64.length * 3 / 4);
  }

  /* Kode barcode internal berikutnya: KSR-0001, KSR-0002, ... — lanjut
     dari nomor terbesar yang sudah dipakai produk mana pun. */
  function buatKodeInternal(products) {
    var maks = 0;
    (products || []).forEach(function (p) {
      barcodes(p).forEach(function (k) {
        var m = /^KSR-(\d{4})$/.exec(String(k).trim());
        if (m) maks = Math.max(maks, parseInt(m[1], 10));
      });
    });
    var n = maks + 1;
    return "KSR-" + ("000" + n).slice(-4);
  }

  /* v1.8.0 — email pembeli: huruf kecil + tanpa spasi (perbandingan
     abaikan huruf besar/kecil). */
  function normalisasiEmail(email) {
    return String(email == null ? "" : email).trim().toLowerCase();
  }
  function validasiEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalisasiEmail(email));
  }

  /* v1.8.1 — bedakan "benar-benar offline" dari "server menjawab tapi
     menolak/gagal" (temuan ARIFIN 25 Nov 21:17 WITA: internet HP menyala
     tapi aplikasi menulis "tidak ada internet"). Aturan: fetch yang
     DITOLAK (jaringan) hanya boleh disebut "tidak ada internet" bila
     navigator.onLine === false; bila internet menyala tapi fetch gagal
     -> "tidak-bisa-terhubung"; bila server menjawab dengan status bukan
     2xx (mis. rules menolak tulis -> permission denied) -> "server-
     menolak". JANGAN tulis "tidak ada internet" bila server sempat
     menjawab. */
  function alasanJaringan() {
    try {
      if (typeof navigator !== "undefined" && navigator && navigator.onLine === false) return "tidak-ada-internet";
    } catch (e) {}
    return "tidak-bisa-terhubung";
  }

  /* Cek kode ke Firebase RTDB (REST) — fetchFn disuntik supaya bisa diuji.
     Mengembalikan Promise {ok, alasan?, sudah?}.
     Alasan: format-salah | belum-diatur | tidak-ditemukan | kedaluwarsa |
     dipakai | tidak-ada-internet | tidak-bisa-terhubung | server-menolak.
     v1.8.1 — AKTIVASI KODE SAJA (perintah ARIFIN 25 Nov 21:15 WITA):
     email TIDAK lagi diminta/dicocokkan di sini; bila status "dipakai"
     + deviceId perangkat lain -> "dipakai" (pindah diurus fungsi
     pindahPerangkat, bukan di sini). Slot kosong sesudah keluar
     (dipakai + deviceId kosong) langsung diikat tanpa email.
     PATCH mengikat deviceId (+ status "dipakai" bila masih "belum")
     SEKALIGUS (satu panggilan, fetch polos TANPA secret); rules RTDB
     mengizinkan tulis bila kode belum kedaluwarsa dan status "belum"
     atau "dipakai" (berkas backend/firebase-rules.json WAJIB
     diterbitkan ulang di console). */
  function cekKodeFirebase(dbUrl, kode, deviceId, fetchFn, sekarangMs) {
    kode = normalisasiKode(kode);
    if (!validasiFormatKode(kode)) return Promise.resolve({ ok: false, alasan: "format-salah" });
    var url = normalisasiUrlDatabase(dbUrl);
    if (!url) return Promise.resolve({ ok: false, alasan: "belum-diatur" });
    var f = fetchFn || (typeof fetch !== "undefined" ? fetch : null);
    if (!f) return Promise.resolve({ ok: false, alasan: alasanJaringan() });
    var sekarang = Number(sekarangMs) || Date.now();
    var alamat = url + "/kode/" + encodeURIComponent(kode) + ".json";
    return f(alamat).then(function (r) {
      if (!r || r.ok === false) return { ok: false, alasan: "server-menolak" };
      return r.json().then(function (rek) {
        if (!rek) return { ok: false, alasan: "tidak-ditemukan" };
        if (rek.status === "dipakai" && rek.deviceId && rek.deviceId !== deviceId)
          return { ok: false, alasan: "dipakai" };
        if (rek.status === "dipakai" && rek.deviceId === deviceId)
          return { ok: true, sudah: true };
        if (rek.berlakuSampaiMs && Number(rek.berlakuSampaiMs) < sekarang)
          return { ok: false, alasan: "kedaluwarsa" };
        var patch = { deviceId: deviceId };
        /* Status hanya ditulis bila masih "belum" — menulis status
           "dipakai" di atas status "dipakai" ditolak rules. */
        if (rek.status !== "dipakai") patch.status = "dipakai";
        return f(alamat, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(patch)
        }).then(function (r2) {
          if (!r2 || r2.ok === false) return { ok: false, alasan: "server-menolak" };
          return { ok: true };
        });
      }, function () { return { ok: false, alasan: "server-menolak" }; });
    }).catch(function () { return { ok: false, alasan: alasanJaringan() }; });
  }

  /* v1.8.1 — pindah lisensi ke perangkat ini (tombol "Pindah ke
     perangkat ini" sesudah aktivasi ditolak "dipakai"). Email pembeli
     HARUS cocok dengan email di record (abaikan huruf besar/kecil);
     bila record LAMA tanpa email tersimpan, email yang dimasukkan
     diterima dan ikut diikat ke record (migrasi). PATCH memakai
     mekanisme yang SAMA dengan aktivasi (fetch polos TANPA secret):
     {deviceId, perangkatLama, email?} (+ status bila masih "belum").
     Mengembalikan Promise {ok, alasan?, sudah?, ikatUlang?}. */
  function pindahPerangkat(dbUrl, kode, deviceId, email, fetchFn, sekarangMs) {
    kode = normalisasiKode(kode);
    if (!validasiFormatKode(kode)) return Promise.resolve({ ok: false, alasan: "format-salah" });
    var emailDiketik = normalisasiEmail(email);
    if (!validasiEmail(emailDiketik)) return Promise.resolve({ ok: false, alasan: "email-salah" });
    var url = normalisasiUrlDatabase(dbUrl);
    if (!url) return Promise.resolve({ ok: false, alasan: "belum-diatur" });
    var f = fetchFn || (typeof fetch !== "undefined" ? fetch : null);
    if (!f) return Promise.resolve({ ok: false, alasan: alasanJaringan() });
    var sekarang = Number(sekarangMs) || Date.now();
    var alamat = url + "/kode/" + encodeURIComponent(kode) + ".json";
    return f(alamat).then(function (r) {
      if (!r || r.ok === false) return { ok: false, alasan: "server-menolak" };
      return r.json().then(function (rek) {
        if (!rek) return { ok: false, alasan: "tidak-ditemukan" };
        if (rek.status === "dipakai" && rek.deviceId === deviceId)
          return { ok: true, sudah: true };
        var emailRek = normalisasiEmail(rek.email);
        if (emailRek && emailDiketik !== emailRek)
          return { ok: false, alasan: "email-tidak-cocok" };
        if (rek.berlakuSampaiMs && Number(rek.berlakuSampaiMs) < sekarang)
          return { ok: false, alasan: "kedaluwarsa" };
        var patch = { deviceId: deviceId, perangkatLama: rek.deviceId || null };
        if (rek.status !== "dipakai") patch.status = "dipakai";
        if (!emailRek && emailDiketik) patch.email = emailDiketik;
        return f(alamat, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(patch)
        }).then(function (r2) {
          if (!r2 || r2.ok === false) return { ok: false, alasan: "server-menolak" };
          return { ok: true, ikatUlang: true };
        });
      }, function () { return { ok: false, alasan: "server-menolak" }; });
    }).catch(function () { return { ok: false, alasan: alasanJaringan() }; });
  }

  /* v1.8.0 — lepas ikatan kode dari perangkat ini (tombol Keluar):
     PATCH deviceId jadi null (di RTDB, null = hapus isi), status
     TETAP "dipakai" supaya jendela 30 hari tidak ke-reset. Mekanisme
     yang SAMA dengan aktivasi: fetch polos TANPA secret; rules
     mengizinkan hapus deviceId bila status "dipakai". */
  function lepasIkatanKode(dbUrl, kode, fetchFn) {
    kode = normalisasiKode(kode);
    if (!validasiFormatKode(kode)) return Promise.resolve({ ok: false, alasan: "format-salah" });
    var url = normalisasiUrlDatabase(dbUrl);
    if (!url) return Promise.resolve({ ok: false, alasan: "belum-diatur" });
    var f = fetchFn || (typeof fetch !== "undefined" ? fetch : null);
    if (!f) return Promise.resolve({ ok: false, alasan: alasanJaringan() });
    var alamat = url + "/kode/" + encodeURIComponent(kode) + ".json";
    return f(alamat, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deviceId: null })
    }).then(function (r) {
      if (!r || r.ok === false) return { ok: false, alasan: "server-menolak" };
      return { ok: true };
    }).catch(function () { return { ok: false, alasan: alasanJaringan() }; });
  }

  /* v1.8.0 — cek ulang ikatan saat aplikasi dibuka (hanya instalasi
     berlisensi): terkunci = record punya deviceId yang BUKAN perangkat
     ini (lisensi pindah / ikat ulang darurat dari perangkat lain).
     Gagal baca / tidak ada record / deviceId kosong = tidak terkunci
     (jangan kunci pengguna karena gangguan jaringan). */
  function periksaIkatanKode(dbUrl, kode, deviceId, fetchFn) {
    kode = normalisasiKode(kode);
    if (!validasiFormatKode(kode)) return Promise.resolve({ terkunci: false });
    var url = normalisasiUrlDatabase(dbUrl);
    if (!url) return Promise.resolve({ terkunci: false });
    var f = fetchFn || (typeof fetch !== "undefined" ? fetch : null);
    if (!f) return Promise.resolve({ terkunci: false });
    var alamat = url + "/kode/" + encodeURIComponent(kode) + ".json";
    return f(alamat).then(function (r) {
      if (!r || r.ok === false) return { terkunci: false };
      return r.json();
    }).then(function (rek) {
      if (!rek || !rek.deviceId) return { terkunci: false };
      return { terkunci: rek.deviceId !== deviceId };
    }).catch(function () { return { terkunci: false }; });
  }

  /* v1.8.0 — minta kirim ulang kode ke email (tombol Lupa kode?).
     URL web app Apps Script TANPA token (?k= TIDAK ditempel di sini):
     aksi kirimUlang memang dibolehkan server tanpa token karena ia
     HANYA mengirim kode ke email yang sudah tercatat pernah membeli,
     dan TIDAK PERNAH mengembalikan kode di dalam respons — jadi
     tidak ada yang bocor bila dipanggil siapa pun. Penerbitan kode
     baru tetap butuh ?k= dan hanya lynk.id yang tahu URL lengkapnya.
     Hasilnya sengaja tidak dibedakan (ok:true untuk jawaban server
     apa pun) supaya tampilan di aplikasi selalu memakai pesan generik
     yang sama; hanya gagal jaringan yang dibedakan. */
  var WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbx5tlcEQTfQImgejkJxaQ3CtwPK_8nvXiZQm_fLS3Yb26pM9Ym_cps-M204veAb8Ko0YA/exec";
  function mintaKirimUlang(webhookUrl, email, fetchFn) {
    email = normalisasiEmail(email);
    if (!validasiEmail(email)) return Promise.resolve({ ok: false, alasan: "email-salah" });
    var f = fetchFn || (typeof fetch !== "undefined" ? fetch : null);
    if (!f) return Promise.resolve({ ok: false, alasan: alasanJaringan() });
    return f(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ aksi: "kirimUlang", email: email })
    }).then(function (r) {
      if (r && r.ok === false) return { ok: false, alasan: "server-menolak" };
      return { ok: true };
    }).catch(function () { return { ok: false, alasan: alasanJaringan() }; });
  }

  /* ================= CROP PERSEGI (v1.7.8) =================
     Geometri pemotong gambar — murni, bisa diuji di Node. Bingkai
     persegi sisi vp (px CSS); gambar ditampilkan dengan skala cover
     dan digeser (offX/offY = posisi kiri/atas gambar relatif ke
     bingkai, dalam px CSS). */
  var CROP_VP = 300; /* sisi bingkai crop di layar (px CSS) */
  function cropSkalaPas(imgW, imgH, vp) {
    if (!(imgW > 0) || !(imgH > 0) || !(vp > 0)) return 1;
    return Math.max(vp / imgW, vp / imgH);
  }
  function cropJepitOffset(off, ukuranTampil, vp) {
    if (!(ukuranTampil > vp)) return (vp - ukuranTampil) / 2;
    if (off > 0) return 0;
    if (off < vp - ukuranTampil) return vp - ukuranTampil;
    return off;
  }
  function cropPersegi(imgW, imgH, skala, offX, offY, vp) {
    var sisi = vp / skala;
    var x = -offX / skala, y = -offY / skala;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + sisi > imgW) sisi = imgW - x;
    if (y + sisi > imgH) sisi = imgH - y;
    if (sisi < 1) sisi = 1;
    return { x: Math.round(x), y: Math.round(y), sisi: Math.round(sisi) };
  }
  function cropUkuranKeluaran(sisiSumber, maks) {
    return Math.max(1, Math.min(maks, Math.round(sisiSumber)));
  }

  /* ================= PEMBERITAHUAN UPDATE (v1.7.4) =================
     Baca node /versi Firebase RTDB (REST) — fetchFn disuntik supaya
     bisa diuji. Pola yang SAMA dengan cekKodeFirebase: fetch polos
     TANPA ?auth=, TANPA secret (secret TIDAK PERNAH masuk aplikasi).
     Mengembalikan Promise berisi isi node {versi, vc, tautan} atau
     null bila node tidak ada / fetch gagal / tidak ada internet. */
  var VERSI_KODE = 25;   /* HARUS sama dengan versionCode AndroidManifest */
  var LINK_UPDATE = "https://lynk.id/immangarif/4dvo1rqp7r3v"; /* listing gratis */
  var KEY_UPDATE_TERAKHIR = "kasirku_update_terakhir_v1"; /* tanggal YYYY-MM-DD terakhir dialog tampil */
  function bacaInfoVersi(dbUrl, fetchFn) {
    var url = normalisasiUrlDatabase(dbUrl);
    if (!url) return Promise.resolve(null);
    var f = fetchFn || (typeof fetch !== "undefined" ? fetch : null);
    if (!f) return Promise.resolve(null);
    return f(url + "/versi.json").then(function (r) { return r.json(); }).catch(function () { return null; });
  }
  /* Putuskan apakah dialog update boleh tampil (murni, bisa diuji):
     tampil hanya bila vc jarak jauh berupa angka DAN lebih besar dari
     kode lokal, DAN dialog belum tampil hari ini (terakhirTampil =
     "YYYY-MM-DD" atau null). */
  function perluTampilkanUpdate(infoVersi, kodeLokal, terakhirTampil, sekarangMs) {
    if (!infoVersi || typeof infoVersi !== "object") return false;
    if (typeof infoVersi.vc !== "number" || !(infoVersi.vc > kodeLokal)) return false;
    var hariIni = tanggalHariIni(new Date(Number(sekarangMs) || Date.now()));
    if (terakhirTampil && String(terakhirTampil) === hariIni) return false;
    return true;
  }

  /* ================= KASBON (v1.5) =================
     Catatan hutang pelanggan warung: nama + jumlah + keterangan +
     tanggal; lunas ditandai beserta tanggal lunas. Disimpan di
     localStorage terpisah, ikut masuk file backup JSON. */
  var KEY_KASBON = "kasirku_kasbon_v1";
  function buatKasbon(nama, jumlah, keterangan, sekarang) {
    nama = String(nama == null ? "" : nama).trim();
    var j = angka(jumlah, 0);
    if (!nama || !(j > 0)) return null;
    var d = sekarang || new Date();
    return {
      id: "KSB-" + d.getTime(),
      nama: nama,
      jumlah: j,
      keterangan: String(keterangan == null ? "" : keterangan).trim(),
      tanggal: tanggalHariIni(d),
      waktu: d.toLocaleString("id-ID"),
      lunas: false,
      lunasTanggal: null
    };
  }
  function tambahKasbon(list, kasbon) {
    var salin = (list || []).slice();
    if (!kasbon || !kasbon.id) return salin;
    salin.unshift(kasbon);
    return salin;
  }
  /* Tandai kasbon lunas (tanpa mutasi): kembalikan salinan baru. */
  function lunasiKasbon(list, id, sekarang) {
    var d = sekarang || new Date();
    return (list || []).map(function (k) {
      if (k.id !== id) return k;
      var c = {}; for (var f in k) c[f] = k[f];
      c.lunas = true;
      c.lunasTanggal = tanggalHariIni(d);
      return c;
    });
  }
  /* Total kasbon: bila hanyaBelumLunas true, yang sudah lunas tidak dihitung. */
  function totalKasbon(list, hanyaBelumLunas) {
    var s = 0;
    (list || []).forEach(function (k) {
      if (hanyaBelumLunas && k.lunas) return;
      s += angka(k.jumlah);
    });
    return s;
  }
  /* Normalisasi kasbon dari backup / data lama (field hilang diisi default). */
  function migrasikanKasbon(list) {
    return (list || []).map(function (k) {
      var c = {}; for (var f in k) c[f] = k[f];
      if (!c.id) c.id = "KSB-" + Date.now() + "-" + Math.floor(Math.random() * 100000);
      if (!c.nama) c.nama = "?";
      c.jumlah = angka(c.jumlah, 0);
      if (!c.keterangan) c.keterangan = "";
      if (!c.tanggal) c.tanggal = tanggalHariIni();
      if (!c.waktu) c.waktu = c.tanggal;
      if (c.lunas === undefined || c.lunas === null) c.lunas = false;
      if (!c.lunasTanggal) c.lunasTanggal = null;
      return c;
    }).filter(function (k) { return k.jumlah > 0; });
  }

  /* ================= BACKUP + REKAP CSV (v1.5) =================
     Backup = SATU file JSON berisi produk + transaksi + kasbon +
     pengaturan huruf. SENGAJA TIDAK berisi lisensi/kode/deviceId —
     lisensi tetap terikat perangkat dan tidak boleh pindah lewat backup.
     v1.7.7 — gambar QRIS ikut cadangan (pengaturan.qrisGambar).
     Pulihkan menimpa data di HP, jadi minta konfirmasi dulu di DOM. */
  function buatBackup(products, txns, kasbon, pengaturan) {
    return {
      aplikasi: "KasirKu",
      format: 1,
      tanggal: new Date().toISOString(),
      produk: products || [],
      transaksi: txns || [],
      kasbon: kasbon || [],
      pengaturan: { huruf: (pengaturan && pengaturan.huruf) || "normal", qrisGambar: (pengaturan && pengaturan.qrisGambar) || null }
    };
  }
  /* Periksa isi file backup sebelum dipulihkan. Mengembalikan
     {ok:true, produk, transaksi, kasbon, pengaturan} atau
     {ok:false, alasan}. Field lisensi/kode/deviceId bila ada diabaikan
     (tidak pernah dipulihkan). */
  function validasiBackup(obj) {
    if (!obj || typeof obj !== "object") return { ok: false, alasan: "bukan-json" };
    if (obj.aplikasi !== "KasirKu") return { ok: false, alasan: "bukan-backup-kasirku" };
    if (!obj.produk || !obj.transaksi || !obj.kasbon
        || !Array.isArray(obj.produk) || !Array.isArray(obj.transaksi)
        || !Array.isArray(obj.kasbon))
      return { ok: false, alasan: "isi-tidak-lengkap" };
    var produk = null;
    try { produk = migrasikanProduk(obj.produk); } catch (e) { return { ok: false, alasan: "produk-rusak" }; }
    var transaksi = obj.transaksi.filter(function (t) {
      return t && t.id && t.tanggal && Array.isArray(t.items);
    });
    var kasbon = migrasikanKasbon(obj.kasbon);
    var huruf = (obj.pengaturan && obj.pengaturan.huruf) || "normal";
    if (["normal", "besar", "sangat"].indexOf(huruf) === -1) huruf = "normal";
    /* v1.7.7 — gambar QRIS ikut pulih; yang bukan data URL gambar dibuang. */
    var qrisGambar = (obj.pengaturan && obj.pengaturan.qrisGambar) || null;
    if (qrisGambar && (typeof qrisGambar !== "string" || qrisGambar.indexOf("data:image/") !== 0)) qrisGambar = null;
    return { ok: true, produk: produk, transaksi: transaksi, kasbon: kasbon, pengaturan: { huruf: huruf, qrisGambar: qrisGambar } };
  }
  /* Rekap harian sebagai CSV (pemisah titik koma — Excel Indonesia).
     Baris pertama judul kolom, lalu satu baris per tanggal. */
  function rekapCsv(rekap) {
    var baris = ["Tanggal;Omset (Rp);Laba (Rp);Transaksi"];
    (rekap || []).forEach(function (r) {
      baris.push(r.tanggal + ";" + Math.round(angka(r.omset)) + ";"
        + (r.labaAda ? Math.round(angka(r.laba)) : "") + ";" + r.jumlah);
    });
    return baris.join("\n");
  }

  /* v1.4-test2 — keputusan tombol kembali (pola SAMRIDE, aturan pemilik):
     modal terbuka ditutup dulu; di layar dalam kembali ke kasir; di kasir
     tampilkan dialog konfirmasi keluar. Murni (tanpa DOM) supaya bisa diuji. */
  function keputusanKembali(tabAktif, adaModal) {
    if (adaModal) return "tutup-modal";
    if (tabAktif && tabAktif !== "kasir") return "ke-kasir";
    return "tanya-keluar";
  }

  root.KasirLogic = {
    KEY_PRODUK: KEY_PRODUK, KEY_TRX: KEY_TRX, KEY_HURUF: KEY_HURUF,
    MIN_STOK_DEFAULT: MIN_STOK_DEFAULT, DURASI_GETAR: DURASI_GETAR,
    SKALA_HURUF: SKALA_HURUF, skalaHuruf: skalaHuruf, getarAman: getarAman,
    rupiah: rupiah, angka: angka, formatQty: formatQty,
    bacaUang: bacaUang, formatRibu: formatRibu,
    tanggalHariIni: tanggalHariIni,
    isBulk: isBulk, butuhJumlah: butuhJumlah,
    satuanLabel: satuanLabel, stokTerbatas: stokTerbatas,
    langkahQty: langkahQty, jumlahCepat: jumlahCepat,
    produkContoh: produkContoh, migrasikanProduk: migrasikanProduk,
    barcodes: barcodes, tambahBarcode: tambahBarcode,
    susunKategori: susunKategori,
    teksStruk: teksStruk, linkWa: linkWa,
    /* v1.4 — ESC/POS 58mm + kunci printer tersimpan */
    ESCPOS_LEBAR: ESCPOS_LEBAR, KEY_PRINTER: KEY_PRINTER,
    escposBersih: escposBersih, escposPotongBaris: escposPotongBaris,
    escposBytes: escposBytes, escposBase64: escposBase64,
    teksStrukTes: teksStrukTes,
    /* v1.7.5 — label thermal Bluetooth + jepit jumlah label */
    jepitJumlahLabel: jepitJumlahLabel,
    escposKodeBarcode: escposKodeBarcode, escposTengah: escposTengah,
    escposLabelBytes: escposLabelBytes,
    escposLabelBanyakBytes: escposLabelBanyakBytes,
    escposBytesKeBase64: escposBytesKeBase64,
    escposLabelBase64: escposLabelBase64,
    hitungSubtotal: hitungSubtotal,
    hitungTotal: hitungTotal, hitungKembalian: hitungKembalian,
    hitungLaba: hitungLaba, adaHpp: adaHpp,
    cariProduk: cariProduk, cariByBarcode: cariByBarcode,
    tambahItem: tambahItem,
    stokKurang: stokKurang, terapkanPenjualan: terapkanPenjualan,
    ringkasan: ringkasan, buatTransaksi: buatTransaksi,
    /* v1.7.7 — pemisah omset Tunai vs QRIS + kunci gambar QRIS */
    ringkasanMetode: ringkasanMetode, KEY_QRIS: KEY_QRIS,
    /* v1.7.8 — crop persegi */
    CROP_VP: CROP_VP,
    cropSkalaPas: cropSkalaPas, cropJepitOffset: cropJepitOffset,
    cropPersegi: cropPersegi, cropUkuranKeluaran: cropUkuranKeluaran,
    /* v1.5 — terlaris + rekap harian + kelompok riwayat + stok menipis */
    stokMenipis: stokMenipis,
    TERLARIS_MAKS: TERLARIS_MAKS, produkTerlaris: produkTerlaris,
    rekapHarian: rekapHarian, kelompokRiwayat: kelompokRiwayat,
    /* v1.5 — kasbon + backup + rekap CSV */
    KEY_KASBON: KEY_KASBON,
    buatKasbon: buatKasbon, tambahKasbon: tambahKasbon,
    lunasiKasbon: lunasiKasbon, totalKasbon: totalKasbon,
    migrasikanKasbon: migrasikanKasbon,
    buatBackup: buatBackup, validasiBackup: validasiBackup,
    rekapCsv: rekapCsv,
    /* v1.7 — hapus transaksi + undo 1 hari + batas tampil + ingat cadangan */
    KEY_TERHAPUS: KEY_TERHAPUS, KEY_CADANGAN_TERAKHIR: KEY_CADANGAN_TERAKHIR,
    KEY_CADANGAN_INGAT_TERAKHIR: KEY_CADANGAN_INGAT_TERAKHIR,
    TERHAPUS_MAKS: TERHAPUS_MAKS, TERHAPUS_MASA_MS: TERHAPUS_MASA_MS,
    RIWAYAT_TAMPIL_AWAL: RIWAYAT_TAMPIL_AWAL, RIWAYAT_TAMBAH: RIWAYAT_TAMBAH,
    CADANGAN_INGAT_HARI: CADANGAN_INGAT_HARI,
    urutRiwayatBaru: urutRiwayatBaru, batasTampilRiwayat: batasTampilRiwayat,
    sisaRiwayat: sisaRiwayat,
    hapusTransaksiKeTempatSampah: hapusTransaksiKeTempatSampah,
    pulihkanTransaksi: pulihkanTransaksi,
    buangTerhapusKedaluarsa: buangTerhapusKedaluarsa,
    perluIngatCadangan: perluIngatCadangan,
    /* v1.4 — lisensi + trial + kode + barcode internal + foto */
    /* v1.4-test2 — keputusan tombol kembali */
    keputusanKembali: keputusanKembali,
    KEY_LISENSI: KEY_LISENSI,
    TRIAL_HARI: TRIAL_HARI, MASA_KODE_HARI: MASA_KODE_HARI,
    buatIdPerangkat: buatIdPerangkat, hariBerlalu: hariBerlalu,
    statusLisensi: statusLisensi, validasiFormatKode: validasiFormatKode,
    normalisasiKode: normalisasiKode, sisaHariKode: sisaHariKode,
    buatRecordKode: buatRecordKode, buatKodeBaru: buatKodeBaru,
    normalisasiUrlDatabase: normalisasiUrlDatabase,
    hitungUkuranDataUrl: hitungUkuranDataUrl, buatKodeInternal: buatKodeInternal,
    cekKodeFirebase: cekKodeFirebase,
    /* v1.8.1 — lisensi kode saja + pindah perangkat + pesan galat jujur */
    normalisasiEmail: normalisasiEmail, validasiEmail: validasiEmail,
    alasanJaringan: alasanJaringan, pindahPerangkat: pindahPerangkat,
    lepasIkatanKode: lepasIkatanKode, periksaIkatanKode: periksaIkatanKode,
    WEBHOOK_URL: WEBHOOK_URL, mintaKirimUlang: mintaKirimUlang,
    /* v1.7.4 — pemberitahuan update */
    VERSI_KODE: VERSI_KODE, LINK_UPDATE: LINK_UPDATE,
    KEY_UPDATE_TERAKHIR: KEY_UPDATE_TERAKHIR,
    perluTampilkanUpdate: perluTampilkanUpdate, bacaInfoVersi: bacaInfoVersi
  };

  /* ================= LAPISAN DOM (hanya jalan di browser) ================= */
  if (typeof document === "undefined" || typeof localStorage === "undefined") return;

  var L = root.KasirLogic;
  var products = [];
  var txns = [];
  var cart = [];       // [{id, qty}] — qty boleh desimal untuk Liter/mili
  var editId = null;

  /* ---------- lisensi + trial (v1.4) ---------- */
  var lisensi = null;       // {installMs, aktif, kode, deviceId}
  /* v1.7.3 (25 Nov 2026, perintah ARIFIN): URL database Firebase
     DI-HARDCODE — kolom URL dihapus dari Pengaturan; semua cek kode
     memakai konstanta ini. Nilai dbUrl lama di localStorage diabaikan. */
  var DB_URL = "https://kasirku-lisensi-default-rtdb.asia-southeast1.firebasedatabase.app";
  /* v1.5.1 (25 Nov 2026, perintah ARIFIN): nomor WA + email penjual
     TIDAK lagi tampil/diatur di Pengaturan — email pengembang hanya ada
     di layar sambutan + layar kunci, dan beli kode lewat lynk.id. */
  var EMAIL_PENGEMBANG = "arifinskansal@gmail.com";
  var LINK_BELI_KODE = "https://lynk.id/immangarif/gz5eplyzomoo"; /* v1.7.2 — langsung ke listing kode */
  var formFoto = null;      // data URL foto produk yang sedang diisi di form

  function muatLisensi() {
    try { lisensi = JSON.parse(localStorage.getItem(KEY_LISENSI) || "null"); } catch (e) { lisensi = null; }
    /* v1.7.3: simpanan pengaturan lisensi lama (termasuk dbUrl) TIDAK
       dibaca lagi — URL database hardcode di DB_URL. */
    /* v1.5 — install baru: trial BELUM jalan (installMs null) sampai
       pengguna mengetuk "Coba Gratis 7 Hari" di layar sambutan. Data
       lama (v1.4, installMs sudah ada) langsung dianggap sudah lewat
       sambutan supaya tidak muncul lagi. */
    if (!lisensi) {
      lisensi = { installMs: null, aktif: false, kode: null, deviceId: L.buatIdPerangkat(), sambutan: false };
      simpanLisensi();
    } else {
      if (!lisensi.deviceId) lisensi.deviceId = L.buatIdPerangkat();
      if (lisensi.installMs) lisensi.sambutan = true;
      simpanLisensi();
    }
  }
  function simpanLisensi() { try { localStorage.setItem(KEY_LISENSI, JSON.stringify(lisensi)); } catch (e) {} }
  function statusLisensiSekarang() { return L.statusLisensi(lisensi, Date.now()); }

  function perbaruiTautanPenjual() {
    /* v1.5.1: tanpa WhatsApp — hubungi lewat email pengembang, beli kode
       lewat lynk.id (tautan statis di HTML). */
    var mail = el("kunci-email");
    var pesan = "Halo, saya mau memasukkan kode KasirKu. ID perangkat saya: " + lisensi.deviceId;
    if (mail) mail.href = "mailto:" + EMAIL_PENGEMBANG
      + "?subject=" + encodeURIComponent("Kode KasirKu — " + lisensi.deviceId)
      + "&body=" + encodeURIComponent(pesan);
    /* v1.5 — email penjual di layar sambutan (bertanya sebelum beli). */
    var mailS = el("sambutan-email");
    if (mailS) mailS.href = "mailto:" + EMAIL_PENGEMBANG
      + "?subject=" + encodeURIComponent("Tanya KasirKu");
  }

  /* v1.5 — layar sambutan: "Coba Gratis 7 Hari" baru memulai trial. */
  function mulaiTrial() {
    if (!lisensi) return;
    lisensi.installMs = Date.now();
    lisensi.sambutan = true;
    simpanLisensi();
    terapkanLisensi();
    toast("Masa percobaan 7 hari dimulai — selamat mencoba!");
  }
  /* Entri kode dari layar sambutan: tampilkan layar kunci dengan judul
     yang sesuai (bukan "Masa Percobaan Habis"), plus tombol kembali. */
  function tampilkanLayarKunci(dariSambutan) {
    var kunci = el("layar-kunci");
    if (!kunci) return;
    var judul = el("kunci-judul"), sub = el("kunci-subjudul"), kembali = el("btn-kunci-kembali");
    if (dariSambutan) {
      if (judul) judul.textContent = "Masukkan Kode Unik";
      if (sub) sub.textContent = "Masukkan kode lisensi yang dikirim ke email sesudah pembayaran. Sekali masuk, aplikasi kebuka selamanya.";
      if (kembali) kembali.style.display = "";
    } else {
      if (judul) judul.textContent = "🔒 Masa Percobaan Habis";
      if (sub) sub.textContent = "Masa percobaan 7 hari sudah habis. Masukkan kode lisensi untuk membuka KasirKu selamanya. Kode dikirim ke email sesudah pembayaran.";
      if (kembali) kembali.style.display = "none";
    }
    kunci.style.display = "flex";
  }
  function sembunyikanLayarKunci() {
    var kunci = el("layar-kunci");
    if (kunci) kunci.style.display = "none";
  }

  function terapkanLisensi() {
    var st = statusLisensiSekarang();
    var banner = el("trial-banner");
    if (banner) {
      if (st.status === "trial") {
        banner.style.display = "";
        banner.textContent = "Masa percobaan: sisa " + st.sisaHari + " hari — sesudah itu aplikasi terkunci sampai kode dimasukkan. Ketuk untuk masukkan kode.";
      } else banner.style.display = "none";
    }
    /* v1.5 — layar sambutan hanya bila trial belum pernah dimulai dan
       belum berlisensi; pengguna lama (trial sudah jalan / aktif) tidak
       pernah melihatnya. */
    var sambutan = el("layar-sambutan");
    if (sambutan) sambutan.style.display = st.status === "belum-mulai" ? "flex" : "none";
    var kunci = el("layar-kunci");
    if (kunci) kunci.style.display = st.status === "terkunci" ? "flex" : "none";
    var info = el("lisensi-status");
    if (info) {
      info.textContent = st.status === "aktif" ? "Aktif selamanya (kode " + (lisensi.kode || "") + ")"
        : st.status === "trial" ? "Masa percobaan — sisa " + st.sisaHari + " hari"
        : st.status === "belum-mulai" ? "Belum dimulai — pilih Coba Gratis 7 Hari atau Masukkan Kode Unik"
        : "TERKUNCI — masa percobaan habis";
    }
    var dev = el("lisensi-device");
    if (dev) dev.textContent = "ID perangkat: " + lisensi.deviceId;
    /* v1.7.3 — kolom masukkan kode di kartu Lisensi hanya bila belum aktif. */
    var kodeWrap = el("lisensi-kode-bungkus");
    if (kodeWrap) kodeWrap.style.display = st.status === "aktif" ? "none" : "";
    /* v1.8.1 — tombol Keluar hanya bila berlisensi kode. */
    var keluar = el("btn-keluar-perangkat");
    if (keluar) keluar.style.display = st.status === "aktif" ? "" : "none";
    perbaruiTautanPenjual();
    /* v1.7 — pengingat cadangan 30 hari (hanya bila layar utama terbuka). */
    periksaPengingatCadangan();
    /* v1.7.4 — pemberitahuan update (hanya bila layar utama terbuka). */
    periksaPembaruan();
    /* v1.8.0 — cek ulang ikatan lisensi (hanya instalasi berlisensi). */
    periksaLisensiUlang();
  }

  /* v1.7.3 — aktivasi kode dari kolom mana pun (layar kunci / kartu
     Lisensi di Pengaturan): jalur yang sama, URL database hardcode.
     v1.8.1 — aktivasi KODE SAJA (tanpa email); bila kode sudah dipakai
     perangkat lain, tampilkan tombol "Pindah ke perangkat ini"
     (pindahTampilEl) — pindah diurus pindahPerangkatDari. */
  function aktifkanKodeDari(kodeInput, pesanEl, pindahTampilEl, pindahBungkusEl) {
    var kode = kodeInput ? kodeInput.value : "";
    if (!L.validasiFormatKode(kode)) {
      if (pesanEl) pesanEl.textContent = "Format kode salah. Contoh: KSR-AB12-CD34-EF56";
      return;
    }
    if (pesanEl) pesanEl.textContent = "Memeriksa kode...";
    sembunyikanPindah(pindahTampilEl, pindahBungkusEl);
    L.cekKodeFirebase(DB_URL, kode, lisensi.deviceId,
      (typeof fetch !== "undefined" ? fetch : null), Date.now())
      .then(function (hasil) {
        if (hasil.ok) {
          lisensi.aktif = true;
          lisensi.kode = L.normalisasiKode(kode);
          lisensi.email = null;
          simpanLisensi();
          terapkanLisensi();
          toast("Kode diterima — aplikasi aktif selamanya");
        } else {
          var teks = {
            "belum-diatur": "Pengaturan database belum diisi — hubungi penjual.",
            "tidak-ditemukan": "Kode tidak ditemukan. Periksa lagi ejaannya.",
            "kedaluwarsa": "Kode sudah kedaluwarsa (berlaku 30 hari). Hubungi penjual.",
            "dipakai": "Kode sudah dipakai di perangkat lain.",
            "tidak-ada-internet": "Tidak ada internet — nyalakan internet sekali untuk aktivasi.",
            "tidak-bisa-terhubung": "Tidak bisa terhubung ke server — coba lagi.",
            "server-menolak": "Server menolak — coba lagi.",
            "format-salah": "Format kode salah."
          }[hasil.alasan] || "Kode tidak bisa dipakai.";
          if (pesanEl) pesanEl.textContent = teks;
          if (hasil.alasan === "dipakai" && pindahTampilEl) pindahTampilEl.style.display = "";
        }
      });
  }
  function aktifkanKode() {
    aktifkanKodeDari(el("kunci-kode"), el("kunci-pesan"), el("btn-pindah-tampil"), el("pindah-bungkus"));
  }
  function aktifkanKodePengaturan() {
    aktifkanKodeDari(el("lisensi-kode"), el("lisensi-pesan"), el("btn-pindah-tampil-pengaturan"), el("lisensi-pindah-bungkus"));
  }
  function sembunyikanPindah(tampilEl, bungkusEl) {
    if (tampilEl) tampilEl.style.display = "none";
    if (bungkusEl) bungkusEl.style.display = "none";
  }
  /* v1.8.1 — pindah lisensi ke perangkat ini: baca kode dari kolom
     aktivasi yang sama, email dari form pindah. */
  function tampilkanPindah(tampilEl, bungkusEl, emailInput) {
    if (tampilEl) tampilEl.style.display = "none";
    if (bungkusEl) bungkusEl.style.display = "";
    if (emailInput && emailInput.focus) emailInput.focus();
  }
  function pindahPerangkatDari(kodeInput, emailInput, pesanEl) {
    var kode = kodeInput ? kodeInput.value : "";
    var email = emailInput ? emailInput.value : "";
    if (!L.validasiEmail(email)) {
      if (pesanEl) pesanEl.textContent = "Masukkan email pembeli yang benar.";
      return;
    }
    if (pesanEl) pesanEl.textContent = "Memeriksa...";
    L.pindahPerangkat(DB_URL, kode, lisensi.deviceId, email,
      (typeof fetch !== "undefined" ? fetch : null), Date.now())
      .then(function (hasil) {
        if (hasil.ok) {
          lisensi.aktif = true;
          lisensi.kode = L.normalisasiKode(kode);
          lisensi.email = null;
          simpanLisensi();
          terapkanLisensi();
          toast("Kode diterima — lisensi pindah ke perangkat ini");
        } else {
          var teks = {
            "belum-diatur": "Pengaturan database belum diisi — hubungi penjual.",
            "tidak-ditemukan": "Kode tidak ditemukan. Periksa lagi ejaannya.",
            "kedaluwarsa": "Kode sudah kedaluwarsa (berlaku 30 hari). Hubungi penjual.",
            "email-tidak-cocok": "Email tidak cocok dengan pembelian kode ini.",
            "email-salah": "Masukkan email pembeli yang benar.",
            "tidak-ada-internet": "Tidak ada internet — nyalakan internet sekali untuk aktivasi.",
            "tidak-bisa-terhubung": "Tidak bisa terhubung ke server — coba lagi.",
            "server-menolak": "Server menolak — coba lagi.",
            "format-salah": "Format kode salah."
          }[hasil.alasan] || "Kode tidak bisa dipakai.";
          if (pesanEl) pesanEl.textContent = teks;
        }
      });
  }
  function pindahPerangkatKunci() {
    pindahPerangkatDari(el("kunci-kode"), el("kunci-pindah-email"), el("kunci-pindah-pesan"));
  }
  function pindahPerangkatPengaturan() {
    pindahPerangkatDari(el("lisensi-kode"), el("lisensi-pindah-email"), el("lisensi-pindah-pesan"));
  }

  /* v1.8.0 — lupa kode: kirim ulang kode ke email pembeli. Pesan yang
     tampil SELALU sama ("Bila email ini pernah membeli, kode sudah
     dikirim.") apapun jawaban server, supaya tidak bocor apakah email
     itu ada atau tidak; hanya gagal jaringan yang dibedakan. */
  function tampilkanLupaKode() {
    var b = el("lupa-kode-bungkus");
    if (b) b.style.display = "";
    var inp = el("kunci-lupa-email");
    if (inp && inp.focus) inp.focus();
  }
  function kirimUlangKode() {
    var inp = el("kunci-lupa-email"), pesan = el("kunci-lupa-pesan");
    var email = inp ? inp.value : "";
    if (!L.validasiEmail(email)) {
      if (pesan) pesan.textContent = "Masukkan email pembeli yang benar.";
      return;
    }
    if (pesan) pesan.textContent = "Mengirim...";
    L.mintaKirimUlang(WEBHOOK_URL, email, (typeof fetch !== "undefined" ? fetch : null))
      .then(function (hasil) {
        if (!pesan) return;
        if (hasil.ok) { pesan.textContent = "Bila email ini pernah membeli, kode sudah dikirim."; return; }
        var teks = {
          "tidak-ada-internet": "Tidak ada internet — nyalakan internet, lalu coba lagi.",
          "tidak-bisa-terhubung": "Tidak bisa terhubung ke server — coba lagi.",
          "server-menolak": "Server menolak — coba lagi."
        }[hasil.alasan] || "Tidak bisa mengirim — coba lagi.";
        pesan.textContent = teks;
      });
  }

  /* v1.8.0 — keluar dari perangkat ini: lepas ikatan di RTDB dulu,
     baru lisensi lokal dihapus (kembali ke layar sambutan). Data warung
     (produk, riwayat, kasbon) TIDAK ikut dihapus — hanya lisensi yang
     dilepas, jadi sesudah masuk lagi semuanya tetap ada. Bila lepas
     ikatan gagal (offline), lisensi lokal tetap dipertahankan. */
  function tampilkanModalKeluar() {
    var u = el("keluar-latar");
    if (u) u.style.display = "flex";
  }
  function tutupModalKeluar() {
    var u = el("keluar-latar");
    if (u) u.style.display = "none";
  }
  function jalankanKeluar() {
    tutupModalKeluar();
    var kode = lisensi && lisensi.kode;
    if (!kode) { resetLisensiLokal(); return; }
    L.lepasIkatanKode(DB_URL, kode, (typeof fetch !== "undefined" ? fetch : null))
      .then(function (hasil) {
        if (!hasil.ok) {
          var teks = {
            "tidak-ada-internet": "Tidak ada internet — coba lagi.",
            "tidak-bisa-terhubung": "Tidak bisa terhubung ke server — coba lagi.",
            "server-menolak": "Server menolak — coba lagi."
          }[hasil.alasan] || "Gagal keluar — coba lagi.";
          toast(teks);
          return;
        }
        resetLisensiLokal();
        toast("Sudah keluar — lisensi bisa dipakai di perangkat lain.");
      });
  }
  function resetLisensiLokal() {
    /* Seperti install baru (layar sambutan tampil), tapi ID perangkat
       tetap sama dan data warung tetap ada. Trial BISA dimulai lagi —
       sama seperti pasang ulang hari ini. */
    var deviceId = lisensi ? lisensi.deviceId : null;
    lisensi = { installMs: null, aktif: false, kode: null, email: null, deviceId: deviceId || L.buatIdPerangkat(), sambutan: false };
    simpanLisensi();
    terapkanLisensi();
  }

  /* v1.8.0 — cek ulang ikatan lisensi saat aplikasi dibuka (HANYA
     instalasi berlisensi kode, HANYA bila online, sekali per sesi):
     bila record di server kini terikat perangkat lain (lisensi pindah
     / ikat ulang darurat dari perangkat lain), perangkat ini dikunci
     dan diminta masukkan kode lagi. Diam bila offline / fetch gagal /
     record tidak ada / deviceId kosong — jangan kunci pengguna karena
     gangguan jaringan. Pengecekan ditunda 1,5 detik seperti
     pemberitahuan update. */
  var lisensiUlangSudah = false;      /* hasil cek sudah diproses sesi ini */
  var lisensiUlangDijadwalkan = false;
  function periksaLisensiUlang() {
    if (lisensiUlangSudah || lisensiUlangDijadwalkan) return;
    var st = statusLisensiSekarang();
    if (st.status !== "aktif") return;
    if (!lisensi.kode) return;
    if (typeof navigator !== "undefined" && navigator.onLine === false) return;
    lisensiUlangDijadwalkan = true;
    setTimeout(function () {
      lisensiUlangSudah = true;
      L.periksaIkatanKode(DB_URL, lisensi.kode, lisensi.deviceId,
        (typeof fetch !== "undefined" ? fetch : null))
        .then(function (hasil) {
          if (!hasil || !hasil.terkunci) return;
          lisensi.aktif = false;
          simpanLisensi();
          terapkanLisensi();
          toast("Lisensi sudah pindah ke perangkat lain.");
        });
    }, 1500);
  }

  /* ---------- foto produk (v1.4) ---------- */
  function bacaFoto(file) {
    if (!file) return;
    if (file.type.indexOf("image/") !== 0) { toast("Pilih berkas gambar"); return; }
    var reader = new FileReader();
    reader.onload = function () { bukaCrop(reader.result, "foto"); };
    reader.onerror = function () { toast("Foto tidak bisa dibaca"); };
    reader.readAsDataURL(file);
  }
  /* Perkecil lewat canvas: sisi terpanjang maks 512px, JPEG 0.72. Bila
     hasil masih >120 KB, ulangi di 320px (localStorage cuma ~5 MB). */
  function perkecilFoto(dataUrl, maksPx) {
    var img = new Image();
    img.onload = function () {
      var skala = Math.min(1, maksPx / Math.max(img.width, img.height));
      var w = Math.max(1, Math.round(img.width * skala));
      var h = Math.max(1, Math.round(img.height * skala));
      var c = document.createElement("canvas");
      c.width = w; c.height = h;
      c.getContext("2d").drawImage(img, 0, 0, w, h);
      var hasil = c.toDataURL("image/jpeg", 0.72);
      if (L.hitungUkuranDataUrl(hasil) > 120000 && maksPx > 320) { perkecilFoto(dataUrl, 320); return; }
      formFoto = hasil;
      tampilkanPratinjauFoto();
      toast("Foto ditambahkan (" + Math.round(L.hitungUkuranDataUrl(hasil) / 1024) + " KB)");
    };
    img.onerror = function () { toast("Foto tidak bisa dibaca"); };
    img.src = dataUrl;
  }
  function tampilkanPratinjauFoto() {
    var b = el("f-foto-pratinjau");
    if (!b) return;
    b.innerHTML = formFoto
      ? '<img src="' + formFoto + '" alt="Foto produk" style="max-width:120px;border-radius:10px;display:block;margin-top:6px">'
      : "";
  }

  /* ---------- gambar QRIS warung (v1.7.7; v1.7.8: disimpan PNG) ----------
     Tiap warung memakai QRIS-nya sendiri: gambar diunggah di Pengaturan,
     dipotong persegi dulu (crop), lalu disimpan PNG supaya tepi kode QR
     tetap tajam (JPEG 0.72 + diperkecil yang membuat buram), disimpan di
     localStorage (KEY_QRIS) dan ikut cadangan JSON. Tanpa gambar, QRIS
     tidak bisa dipilih di kasir. Gambar QRIS lama (JPEG) yang sudah
     tersimpan tetap dipakai sampai pengguna unggah ulang. */
  var KEY_QRIS_DOM = L.KEY_QRIS;
  var qrisGambar = null;
  function muatQris() {
    try { qrisGambar = JSON.parse(localStorage.getItem(KEY_QRIS_DOM) || "null"); } catch (e) { qrisGambar = null; }
    if (qrisGambar && (typeof qrisGambar !== "string" || qrisGambar.indexOf("data:image/") !== 0)) qrisGambar = null;
  }
  function simpanQris() { try { localStorage.setItem(KEY_QRIS_DOM, JSON.stringify(qrisGambar)); } catch (e) { toast("Penyimpanan penuh — hapus foto produk yang besar, lalu coba lagi"); } }
  function tampilkanPratinjauQris() {
    var b = el("qris-pratinjau");
    if (!b) return;
    b.innerHTML = qrisGambar
      ? '<img src="' + qrisGambar + '" alt="Kode QRIS" style="max-width:200px;border-radius:10px;display:block;margin-top:6px">'
      : "";
  }
  function bacaQris(file) {
    if (!file) return;
    if (file.type.indexOf("image/") !== 0) { toast("Pilih berkas gambar"); return; }
    var reader = new FileReader();
    reader.onload = function () { bukaCrop(reader.result, "qris"); };
    reader.onerror = function () { toast("Gambar tidak bisa dibaca"); };
    reader.readAsDataURL(file);
  }
  /* v1.7.8 — QRIS disimpan PNG (tanpa kompresi JPEG) supaya tepi kode
     QR tetap tajam dan mudah di-scan; sisi terpanjang maks 1024px.
     Bila hasil masih >200 KB, ulangi di 768px lalu 512px (jangan ke
     320px — kode QR butuh detail; PNG kode QR 2 warna biasanya jauh
     di bawah 200 KB). */
  function perkecilQris(dataUrl, maksPx) {
    var img = new Image();
    img.onload = function () {
      var skala = Math.min(1, maksPx / Math.max(img.width, img.height));
      var w = Math.max(1, Math.round(img.width * skala));
      var h = Math.max(1, Math.round(img.height * skala));
      var c = document.createElement("canvas");
      c.width = w; c.height = h;
      c.getContext("2d").drawImage(img, 0, 0, w, h);
      var hasil = c.toDataURL("image/png");
      if (L.hitungUkuranDataUrl(hasil) > 200000 && maksPx > 512) { perkecilQris(dataUrl, maksPx === 1024 ? 768 : 512); return; }
      qrisGambar = hasil;
      simpanQris();
      tampilkanPratinjauQris();
      toast("QRIS ditambahkan (" + Math.round(L.hitungUkuranDataUrl(hasil) / 1024) + " KB)");
    };
    img.onerror = function () { toast("Gambar tidak bisa dibaca"); };
    img.src = dataUrl;
  }
  function hapusQris() {
    qrisGambar = null;
    simpanQris();
    var inp = el("qris-file");
    if (inp) inp.value = "";
    tampilkanPratinjauQris();
    toast("QRIS dihapus");
  }

  /* ---------- potong gambar persegi / crop (v1.7.8) ----------
     Satu pemotong untuk foto produk + gambar QRIS: sesudah pilih
     gambar, tampil bingkai persegi — geser untuk atur posisi,
     tombol ＋/－ untuk perbesar/perkecil, "Potong" menyimpan,
     "Batal" kembali tanpa menyimpan (gambar lama tetap).
     Tanpa pustaka luar (aplikasi offline). */
  var cropImg = null;      // Image sumber yang sedang dipotong
  var cropMode = null;     // "foto" | "qris"
  var cropSkala = 1, cropOffX = 0, cropOffY = 0;
  var cropSeret = null;    // {x, y, offX, offY} saat drag berjalan
  function cropTitik(e) {
    var vp = el("crop-viewport");
    var r = vp && vp.getBoundingClientRect ? vp.getBoundingClientRect() : { left: 0, top: 0 };
    return { x: (e.clientX == null ? 0 : e.clientX) - (r.left || 0), y: (e.clientY == null ? 0 : e.clientY) - (r.top || 0) };
  }
  function cropTerapkanTampilan() {
    var g = el("crop-gambar");
    if (!g || !cropImg) return;
    g.style.width = Math.round(cropImg.width * cropSkala) + "px";
    g.style.height = Math.round(cropImg.height * cropSkala) + "px";
    g.style.left = Math.round(cropOffX) + "px";
    g.style.top = Math.round(cropOffY) + "px";
  }
  function bukaCrop(dataUrl, mode) {
    if (!dataUrl) return;
    cropMode = mode;
    var img = new Image();
    img.onload = function () {
      cropImg = img;
      cropSkala = L.cropSkalaPas(img.width, img.height, L.CROP_VP);
      cropOffX = (L.CROP_VP - img.width * cropSkala) / 2;
      cropOffY = (L.CROP_VP - img.height * cropSkala) / 2;
      var g = el("crop-gambar");
      if (g) g.src = dataUrl;
      cropTerapkanTampilan();
      el("crop-modal").style.display = "flex";
    };
    img.onerror = function () { toast("Gambar tidak bisa dibaca"); };
    img.src = dataUrl;
  }
  function tutupCrop() {
    var m = el("crop-modal");
    if (m) m.style.display = "none";
    cropImg = null; cropMode = null; cropSeret = null;
  }
  function cropMulaiSeret(e) {
    if (!cropImg) return;
    var t = cropTitik(e);
    cropSeret = { x: t.x, y: t.y, offX: cropOffX, offY: cropOffY };
    if (e.preventDefault) e.preventDefault();
  }
  function cropGerakSeret(e) {
    if (!cropSeret || !cropImg) return;
    var t = cropTitik(e);
    cropOffX = L.cropJepitOffset(cropSeret.offX + (t.x - cropSeret.x), cropImg.width * cropSkala, L.CROP_VP);
    cropOffY = L.cropJepitOffset(cropSeret.offY + (t.y - cropSeret.y), cropImg.height * cropSkala, L.CROP_VP);
    cropTerapkanTampilan();
    if (e.preventDefault) e.preventDefault();
  }
  function cropAkhirSeret() { cropSeret = null; }
  function cropZoom(faktor) {
    if (!cropImg) return;
    var pas = L.cropSkalaPas(cropImg.width, cropImg.height, L.CROP_VP);
    var baru = cropSkala * faktor;
    if (baru < pas) baru = pas;
    if (baru > pas * 4) baru = pas * 4;
    if (baru === cropSkala) return;
    /* zoom dari tengah bingkai: titik di tengah bingkai tetap di tempatnya */
    var px = (L.CROP_VP / 2 - cropOffX) / cropSkala;
    var py = (L.CROP_VP / 2 - cropOffY) / cropSkala;
    cropSkala = baru;
    cropOffX = L.cropJepitOffset(L.CROP_VP / 2 - px * baru, cropImg.width * baru, L.CROP_VP);
    cropOffY = L.cropJepitOffset(L.CROP_VP / 2 - py * baru, cropImg.height * baru, L.CROP_VP);
    cropTerapkanTampilan();
  }
  function terapkanCrop() {
    if (!cropImg || !cropMode) return;
    var rect = L.cropPersegi(cropImg.width, cropImg.height, cropSkala, cropOffX, cropOffY, L.CROP_VP);
    var maks = cropMode === "qris" ? 1024 : 512;
    var uk = L.cropUkuranKeluaran(rect.sisi, maks);
    var c = document.createElement("canvas");
    c.width = uk; c.height = uk;
    c.getContext("2d").drawImage(cropImg, rect.x, rect.y, rect.sisi, rect.sisi, 0, 0, uk, uk);
    var hasil = cropMode === "qris" ? c.toDataURL("image/png") : c.toDataURL("image/jpeg", 0.72);
    var mode = cropMode;
    tutupCrop();
    if (mode === "qris") perkecilQris(hasil, 1024);
    else perkecilFoto(hasil, 512);
  }

  /* ---------- QRIS layar penuh (v1.7.8) ----------
     Ketuk tombol QRIS di kasir (atau gambar QRIS di area QRIS) ->
     overlay layar penuh: gambar QRIS besar + total besar + Simpan.
     "Tutup" kembali ke kasir, metode tetap QRIS. */
  function bukaQrisFullscreen() {
    if (metodeBayar !== "qris" || !qrisGambar) return;
    var g = el("qris-full-gambar");
    if (g) g.src = qrisGambar;
    var items = cartItems();
    var total = L.hitungTotal(L.hitungSubtotal(items), L.bacaUang(el("diskon").value));
    var t = el("qris-full-total");
    if (t) t.textContent = L.rupiah(total);
    var s = el("btn-qris-full-simpan");
    if (s) s.disabled = items.length === 0 || total <= 0;
    el("qris-fullscreen").style.display = "flex";
  }
  function tutupQrisFullscreen() {
    var m = el("qris-fullscreen");
    if (m) m.style.display = "none";
  }

  /* ---------- cetak barcode (v1.4) ---------- */
  var cetakProdukId = null;
  function bukaCetakBarcode(id) {
    var p = produkById(id);
    if (!p) return;
    if (!L.barcodes(p).length) {
      toast("Produk ini belum punya barcode — buat kode internal dulu");
      return;
    }
    cetakProdukId = id;
    el("cetak-nama").textContent = p.nama;
    el("cetak-kode").innerHTML = L.barcodes(p).map(function (k) {
      return '<option value="' + esc(k) + '">' + esc(k) + "</option>";
    }).join("");
    el("cetak-modal").style.display = "flex";
  }
  function jalankanCetak() {
    var p = produkById(cetakProdukId);
    if (!p) return;
    var kode = el("cetak-kode").value;
    var jumlah = L.jepitJumlahLabel(el("cetak-jumlah").value);
    el("cetak-modal").style.display = "none";
    /* v1.7.5 — jangan langsung cetak: tanya dulu PDF atau Bluetooth. */
    tampilkanDialogPilihCetak({ jenis: "label", produkId: cetakProdukId, kode: kode, jumlah: jumlah });
  }

  function muat() {
    try { products = JSON.parse(localStorage.getItem(KEY_PRODUK) || "null") || null; } catch (e) { products = null; }
    try { txns = JSON.parse(localStorage.getItem(KEY_TRX) || "[]"); } catch (e) { txns = []; }
    /* v1.5 — kasbon dimuat di sini juga (didefinisikan di bawah). */
    try { kasbon = L.migrasikanKasbon(JSON.parse(localStorage.getItem(L.KEY_KASBON) || "[]")); } catch (e) { kasbon = []; }
    /* v1.7 — muat "Baru Dihapus": hanya entri yang bentuknya benar, dan
       buang yang sudah lebih dari 24 jam. */
    try { terhapus = JSON.parse(localStorage.getItem(KEY_TERHAPUS) || "[]"); } catch (e) { terhapus = []; }
    if (!Array.isArray(terhapus)) terhapus = [];
    terhapus = terhapus.filter(function (e) { return e && e.trx && e.trx.id && typeof e.dihapusMs === "number"; });
    var terhapusBersih = L.buangTerhapusKedaluarsa(terhapus, Date.now());
    if (terhapusBersih.length !== terhapus.length) { terhapus = terhapusBersih; simpanTerhapus(); }
    if (!products) {
      products = produkContoh();
      localStorage.setItem(KEY_PRODUK, JSON.stringify(products));
    } else {
      /* Migrasi v1.0/v1.1 -> v1.2: data lama dipertahankan, field baru diisi default. */
      products = L.migrasikanProduk(products);
    }
  }
  function simpanProduk() {
    try { localStorage.setItem(KEY_PRODUK, JSON.stringify(products)); }
    catch (e) { toast("Penyimpanan penuh — hapus foto produk yang besar, lalu coba lagi"); }
  }
  function simpanTrx() { localStorage.setItem(KEY_TRX, JSON.stringify(txns)); }

  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var toastTimer = null;
  function toast(pesan) {
    var t = el("toast");
    t.textContent = pesan; t.classList.add("tampil");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("tampil"); }, 2500);
  }

  /* ---------- haptic + ukuran huruf ---------- */
  function getar() {
    if (typeof navigator !== "undefined" && navigator.vibrate)
      L.getarAman(function (ms) { navigator.vibrate(ms); });
  }

  /* ---------- bunyi beep scan berhasil (v1.8.2) ----------
     Satu bunyi pendek lewat WebAudio (tanpa berkas, jalan offline).
     WebView bawaan menuntut gestur pengguna sebelum audio boleh
     berbunyi, jadi konteks audio disiapkan di bukaScan() (ketuk
     tombol Scan = gestur) dan dipakai lagi saat scan berhasil.
     Dipanggil HANYA saat scan kasir berhasil dan produk ditemukan,
     supaya dari bunyinya ketahuan scan sudah beres. Barcode yang
     tidak dikenal TIDAK dibunyikan. Semua dibungkus try/catch:
     bunyi itu opsional, jangan pernah gagalkan scan. */
  var bunyiCtx = null;
  function siapkanBunyi() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!bunyiCtx) bunyiCtx = new AC();
      if (bunyiCtx.state === "suspended" && bunyiCtx.resume) bunyiCtx.resume();
    } catch (e) { /* diam — bunyi opsional */ }
  }
  function bunyiBeep() {
    try {
      siapkanBunyi();
      if (!bunyiCtx) return;
      var osc = bunyiCtx.createOscillator();
      var gain = bunyiCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = 1500;
      gain.gain.setValueAtTime(0.15, bunyiCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, bunyiCtx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(bunyiCtx.destination);
      osc.start();
      osc.stop(bunyiCtx.currentTime + 0.12);
    } catch (e) { /* diam — bunyi opsional, jangan gagalkan scan */ }
  }

  function terapkanHuruf(nama) {
    var skala = L.skalaHuruf(nama);
    document.body.style.zoom = skala === 1 ? "" : String(skala);
    try { localStorage.setItem(KEY_HURUF, nama || "normal"); } catch (e) {}
    var radios = document.querySelectorAll('input[name="huruf"]');
    for (var i = 0; i < radios.length; i++)
      radios[i].checked = radios[i].value === (nama || "normal");
  }

  /* ---------- navigasi tab ---------- */
  function pindahTab(nama) {
    var tabs = ["kasir", "pilih", "produk", "riwayat", "laporan", "pengaturan", "kasbon"];
    tabs.forEach(function (t) {
      var s = el("tab-" + t);
      if (s) s.classList.toggle("aktif", t === nama);
      var n = el("nav-" + t);
      if (n) n.classList.toggle("aktif", t === nama);
    });
    if (nama === "pilih") renderPilih();
    if (nama === "produk") renderProduk();
    if (nama === "riwayat") { riwayatBatas = RIWAYAT_TAMPIL_AWAL; renderRiwayat(); }
    if (nama === "laporan") renderLaporan();
    if (nama === "kasbon") renderKasbon();
  }

  /* ---------- tombol kembali + dialog konfirmasi keluar (v1.4-test2) ----
     Pola SAMRIDE (aturan pemilik 18 Okt 2026): onBackPressed native
     diserahkan ke tanganiTombolKembali() di bawah ini. Dialognya dialog
     halaman sendiri (BUKAN dialog bawaan WebView) supaya yang tampil
     HANYA pertanyaan + Ya/Tidak — tanpa judul "Halaman pada file://",
     tanpa URL, tanpa teks lain (penegasan pemilik 23 Nov 2026). */
  var dlgSelesai = null;
  function dialogTanya(teks) {
    return new Promise(function (res) {
      dlgSelesai = res;
      el("dlg-teks").textContent = teks;
      el("dlg-latar").style.display = "flex";
    });
  }
  function dlgKlik(ya) {
    el("dlg-latar").style.display = "none";
    if (dlgSelesai) { var r = dlgSelesai; dlgSelesai = null; r(!!ya); }
  }
  function modalTerbuka() {
    var s = el("scan-modal"), c = el("cetak-modal");
    var h = el("hapus-latar"), d = el("cadangan-latar"), u = el("update-latar");
    var p = el("cetak-pilih-latar");
    var k = el("crop-modal"), q = el("qris-fullscreen");
    var kl = el("keluar-latar"); /* v1.8.0 — dialog konfirmasi keluar perangkat */
    return (s && s.style.display === "flex") || (c && c.style.display === "flex")
      || (h && h.style.display === "flex") || (d && d.style.display === "flex")
      || (u && u.style.display === "flex") || (p && p.style.display === "flex")
      || (k && k.style.display === "flex") || (q && q.style.display === "flex")
      || (kl && kl.style.display === "flex");
  }
  function tabAktifSekarang() {
    var tabs = ["kasir", "pilih", "produk", "riwayat", "laporan", "pengaturan", "kasbon"];
    for (var i = 0; i < tabs.length; i++) {
      var s = el("tab-" + tabs[i]);
      if (s && s.classList.contains("aktif")) return tabs[i];
    }
    return "kasir";
  }
  function tanganiTombolKembali() {
    var putusan = L.keputusanKembali(tabAktifSekarang(), modalTerbuka());
    if (putusan === "tutup-modal") {
      if (el("scan-modal") && el("scan-modal").style.display === "flex") { tutupScan(); return; }
      if (el("hapus-latar") && el("hapus-latar").style.display === "flex") { tutupModalHapus(); return; }
      if (el("cadangan-latar") && el("cadangan-latar").style.display === "flex") { tutupModalCadangan(); return; }
      if (el("update-latar") && el("update-latar").style.display === "flex") { tutupDialogUpdate(); return; }
      if (el("cetak-pilih-latar") && el("cetak-pilih-latar").style.display === "flex") { tutupDialogPilihCetak(); return; }
      if (el("crop-modal") && el("crop-modal").style.display === "flex") { tutupCrop(); return; }
      if (el("qris-fullscreen") && el("qris-fullscreen").style.display === "flex") { tutupQrisFullscreen(); return; }
      if (el("keluar-latar") && el("keluar-latar").style.display === "flex") { tutupModalKeluar(); return; }
      if (el("cetak-modal")) el("cetak-modal").style.display = "none";
      return;
    }
    if (putusan === "ke-kasir") { pindahTab("kasir"); return; }
    dialogTanya("Apakah Anda ingin keluar?").then(function (ya) {
      if (!ya) return;
      try { if (typeof AndroidBridge !== "undefined" && AndroidBridge.keluarAplikasi) AndroidBridge.keluarAplikasi(); } catch (e) {}
    });
  }
  root.tanganiTombolKembali = tanganiTombolKembali;
  root.mulaiTrial = mulaiTrial;
  root.tampilkanLayarKunci = tampilkanLayarKunci;
  root.tambahKasbonForm = tambahKasbonForm;

  /* ---------- kasir (halaman bersih: scan + keranjang + total) ---------- */
  function produkById(id) {
    for (var i = 0; i < products.length; i++) if (products[i].id === id) return products[i];
    return null;
  }
  function cartItems() {
    return cart.map(function (c) {
      var p = produkById(c.id);
      return { id: c.id, nama: p ? p.nama : "?", harga: p ? p.harga : 0, hpp: p ? p.hpp : 0, qty: c.qty, satuan: p ? L.satuanLabel(p) : "Pcs" };
    });
  }

  function stokTeks(p) {
    if (!L.stokTerbatas(p)) return "Stok: tidak dibatasi";
    var menipis = angka(p.stok) <= angka(p.minStok, MIN_STOK_DEFAULT);
    return "Stok: " + L.formatQty(p.stok) + " " + L.satuanLabel(p) + (angka(p.stok) <= 0 ? " • Habis" : menipis ? " • Menipis" : "");
  }

  function renderKasir() {
    renderKeranjang();
  }

  /* ---------- pilih produk (grid ketuk nama, per kategori) ---------- */
  var pilihKategori = "Semua";
  var pilihCari = "";

  function renderPilih() {
    var list = L.cariProduk(products, pilihCari);
    var kelompok = L.susunKategori(list);
    /* chip kategori */
    var semuaKat = ["Semua"].concat(L.susunKategori(products).map(function (k) { return k.kategori; }));
    var htmlKat = "";
    semuaKat.forEach(function (kat) {
      htmlKat += '<button type="button" class="chip' + (pilihKategori === kat ? " chip-aktif" : "") + '" data-kat="' + esc(kat) + '">' + esc(kat) + "</button>";
    });
    el("pilih-kategori").innerHTML = htmlKat;
    var chips = el("pilih-kategori").querySelectorAll(".chip");
    for (var i = 0; i < chips.length; i++) {
      chips[i].addEventListener("click", function () {
        pilihKategori = this.getAttribute("data-kat");
        renderPilih();
      });
    }
    /* grid produk */
    var html = "";
    var tampil = 0;
    kelompok.forEach(function (k) {
      if (pilihKategori !== "Semua" && k.kategori !== pilihKategori) return;
      html += '<h3 class="grid-judul">' + esc(k.kategori) + "</h3>";
      html += '<div class="grid-pilih">';
      k.items.forEach(function (p) {
        tampil++;
        var habis = L.stokTerbatas(p) && angka(p.stok) <= 0;
        /* v1.5 — stok menipis: tile merah + teks "Stok X • Menipis".
           v1.8.2 — stok habis: tile berdenyut merah pelan (class habis);
           tombol TIDAK disabled supaya ketukan menampilkan peringatan
           "Stok habis" lewat ketukProduk(), bukan diam saja. */
        var menipis = !habis && L.stokMenipis(p);
        html += '<button class="tile' + (habis ? " habis" : "") + (menipis ? " menipis" : "") + '" data-id="' + p.id + '">'
          + (p.foto ? '<img class="tile-foto" src="' + esc(p.foto) + '" alt="">' : "")
          + '<span class="tile-nama">' + esc(p.nama) + "</span>"
          + '<span class="tile-harga">' + L.rupiah(p.harga) + " / " + esc(L.satuanLabel(p)) + "</span>"
          + '<span class="tile-stok">' + (L.stokTerbatas(p) ? "Stok " + L.formatQty(p.stok) + (habis ? " • Habis" : menipis ? " • Menipis" : "") : "Tanpa barcode") + "</span></button>";
      });
      html += "</div>";
    });
    el("grid-pilih").innerHTML = html || '<p class="kosong">Tidak ada produk yang cocok.</p>';
    var tombol = el("grid-pilih").querySelectorAll(".tile");
    for (var j = 0; j < tombol.length; j++) {
      tombol[j].addEventListener("click", function () { ketukProduk(this.getAttribute("data-id"), "pilih"); });
    }
    perbaruiTombolKeranjang();
  }

  function perbaruiTombolKeranjang() {
    var items = cartItems();
    var n = 0, total = 0;
    items.forEach(function (it) { n += 1; total += it.harga * it.qty; });
    el("btn-lihat-keranjang").textContent = items.length
      ? "🛒 Lihat Keranjang (" + n + " item • " + L.rupiah(total) + ")"
      : "🛒 Lihat Keranjang";
  }

  /* Ketuk produk di grid: Pcs langsung masuk; Liter/mili buka panel jumlah
     (panel ada di halaman Kasir, jadi pindah dulu ke Kasir). */
  function ketukProduk(id, dari) {
    var p = produkById(id);
    if (!p) return;
    /* v1.8.2 — stok habis: beri tahu, jangan masukkan ke keranjang. */
    if (L.stokTerbatas(p) && angka(p.stok) <= 0) { toast("Stok habis"); return; }
    if (L.butuhJumlah(p)) {
      pindahTab("kasir");
      bukaPanelJumlah(p);
      return;
    }
    tambahKeKeranjang(id, 1);
    toast("Ditambahkan: " + p.nama);
    if (dari === "pilih") perbaruiTombolKeranjang();
  }

  function tambahKeKeranjang(id, qty) {
    var p = produkById(id);
    if (!p) return;
    var q = angka(qty, 0);
    if (!(q > 0)) q = 1;
    if (L.stokTerbatas(p)) {
      var diKeranjang = 0;
      cart.forEach(function (c) { if (c.id === id) diKeranjang = c.qty; });
      if (angka(p.stok) < diKeranjang + q) { toast("Stok " + p.nama + " tidak cukup"); return; }
    }
    cart = L.tambahItem(cart, p, q);
    renderKeranjang();
  }

  /* ---------- panel jumlah (barang curah: Liter/mili/Kg/Gram) ---------- */
  var panelProdukId = null;
  function bukaPanelJumlah(p) {
    panelProdukId = p.id;
    el("jml-nama").textContent = p.nama;
    el("jml-harga").textContent = L.rupiah(p.harga) + " / " + L.satuanLabel(p);
    el("jml-input").value = "";
    el("jml-input").placeholder = "Jumlah (" + L.satuanLabel(p) + ")";
    var cepat = L.jumlahCepat(p);
    var html = "";
    cepat.forEach(function (v) {
      html += '<button type="button" class="chip" data-v="' + v + '">' + L.formatQty(v) + " " + L.satuanLabel(p) + "</button>";
    });
    el("jml-cepat").innerHTML = html;
    var chips = el("jml-cepat").querySelectorAll(".chip");
    for (var i = 0; i < chips.length; i++) {
      chips[i].addEventListener("click", function () {
        el("jml-input").value = this.getAttribute("data-v");
        el("jml-input").focus();
      });
    }
    el("panel-jumlah").style.display = "block";
    el("jml-input").focus();
    window.scrollTo(0, 0);
  }
  function tutupPanelJumlah() {
    el("panel-jumlah").style.display = "none";
    panelProdukId = null;
  }
  function masukkanJumlah() {
    var p = produkById(panelProdukId);
    if (!p) { tutupPanelJumlah(); return; }
    var q = angka(el("jml-input").value, 0);
    if (!(q > 0)) { toast("Isi jumlahnya dulu"); return; }
    tambahKeKeranjang(p.id, q);
    toast(p.nama + " " + L.formatQty(q) + " " + L.satuanLabel(p) + " masuk keranjang");
    tutupPanelJumlah();
  }

  /* v1.6 — jumlah di keranjang bisa diketik langsung (bukan hanya -/+).
     Nilai tidak valid / <= 0 / melebihi stok ditolak: kembali ke nilai lama. */
  function ubahQtyKeranjang(inputEl) {
    var id = inputEl.getAttribute("data-id");
    var c = null;
    cart.forEach(function (x) { if (x.id === id) c = x; });
    if (!c) { renderKeranjang(); return; }
    var p = produkById(id);
    var q = angka(String(inputEl.value || "").replace(",", "."), 0);
    if (!(q > 0)) { renderKeranjang(); return; }
    if (p && L.stokTerbatas(p) && angka(p.stok) < q) { toast("Stok " + p.nama + " tidak cukup"); renderKeranjang(); return; }
    c.qty = Math.round(q * 100) / 100;
    renderKeranjang();
  }

  /* v1.6 — format ribuan langsung saat mengetik uang: 20000 -> "20.000".
     Kursor diletakkan di akhir supaya tidak lompat. */
  function formatInputUang(inputEl) {
    var mentah = String(inputEl.value || "").replace(/\./g, "").replace(/[^0-9]/g, "");
    if (!mentah) { inputEl.value = ""; return; }
    inputEl.value = L.formatRibu(parseInt(mentah, 10));
    try { inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length); } catch (e) {}
  }

  /* ---------- pilihan pembayaran Tunai / QRIS (v1.7.7) ----------
     Pilihan berlaku per transaksi: tiap transaksi baru kembali ke Tunai.
     QRIS butuh gambar QRIS di Pengaturan; bila belum ada, kembali ke
     Tunai dengan toast. Saat QRIS: area QRIS tampil (gambar + total),
     baris Uang diterima + Kembalian disembunyikan, tombol Simpan aktif
     tanpa syarat bayar >= total (bayar = total). */
  var metodeBayar = "tunai";
  function perbaruiTombolMetode() {
    var t = el("btn-metode-tunai"), q = el("btn-metode-qris");
    if (t && t.classList) t.classList.toggle("chip-aktif", metodeBayar === "tunai");
    if (q && q.classList) q.classList.toggle("chip-aktif", metodeBayar === "qris");
  }
  function perbaruiAreaQris() {
    var qris = metodeBayar === "qris";
    var area = el("area-qris");
    if (area) {
      area.style.display = qris ? "" : "none";
      if (qris) {
        var img = el("qris-gambar-kasir");
        if (img) img.src = qrisGambar || "";
      }
    }
    var lb = el("label-bayar"), ib = el("bayar"), km = el("baris-kembalian");
    if (lb) lb.style.display = qris ? "none" : "";
    if (ib) ib.style.display = qris ? "none" : "";
    if (km) km.style.display = qris ? "none" : "";
  }
  function pilihMetode(metode) {
    if (metode === "qris" && !qrisGambar) {
      toast("Belum ada gambar QRIS — tambahkan di Pengaturan.");
      metode = "tunai";
    }
    metodeBayar = metode;
    perbaruiTombolMetode();
    perbaruiAreaQris();
    renderKeranjang();
    /* v1.7.8 — ketuk QRIS langsung tampil layar penuh. */
    if (metode === "qris") bukaQrisFullscreen();
  }
  function resetMetode() {
    metodeBayar = "tunai";
    perbaruiTombolMetode();
    perbaruiAreaQris();
  }

  function renderKeranjang() {
    var items = cartItems();
    var html = "";
    items.forEach(function (it) {
      var p = produkById(it.id);
      html += '<div class="cart-item">' + (p && p.foto ? '<img class="ci-foto" src="' + esc(p.foto) + '" alt="">' : "")
        + '<div class="ci-info"><b>' + esc(it.nama) + "</b><span>"
        + L.rupiah(it.harga) + " × " + L.formatQty(it.qty) + " " + esc(it.satuan)
        + " = " + L.rupiah(it.harga * it.qty) + "</span></div>"
        + '<div class="ci-aksi"><button data-aksi="kurang" data-id="' + it.id + '">−</button>'
        + '<input class="ci-qty" type="text" inputmode="decimal" data-id="' + it.id + '" value="' + L.formatQty(it.qty) + '" aria-label="Jumlah">'
        + '<button data-aksi="tambah" data-id="' + it.id + '">+</button>'
        + '<button class="hapus" data-aksi="hapus" data-id="' + it.id + '">×</button></div></div>';
    });
    el("keranjang").innerHTML = html || '<p class="kosong">Keranjang masih kosong. Scan barcode atau buka halaman Pilih Produk.</p>';
    var tombol = el("keranjang").querySelectorAll("button");
    for (var i = 0; i < tombol.length; i++) {
      tombol[i].addEventListener("click", function () {
        var id = this.getAttribute("data-id"), aksi = this.getAttribute("data-aksi");
        var c = null;
        cart.forEach(function (x) { if (x.id === id) c = x; });
        if (!c) return;
        var p = produkById(id);
        var langkah = p ? L.langkahQty(p) : 1;
        if (aksi === "tambah") {
          if (p && L.stokTerbatas(p) && angka(p.stok) < c.qty + langkah) { toast("Stok " + p.nama + " tidak cukup"); return; }
          c.qty = Math.round((c.qty + langkah) * 100) / 100;
        } else if (aksi === "kurang") {
          c.qty = Math.round((c.qty - langkah) * 100) / 100;
          if (c.qty <= 0) cart = cart.filter(function (x) { return x.id !== id; });
        } else if (aksi === "hapus") {
          cart = cart.filter(function (x) { return x.id !== id; });
        }
        renderKeranjang();
      });
    }
    /* v1.6 — jumlah ketik: tiap baris keranjang punya input jumlah. */
    var qtyInputs = el("keranjang").querySelectorAll(".ci-qty");
    for (var qi = 0; qi < qtyInputs.length; qi++) {
      qtyInputs[qi].addEventListener("change", function () { ubahQtyKeranjang(this); });
    }
    var subtotal = L.hitungSubtotal(items);
    var diskon = L.bacaUang(el("diskon").value);
    var total = L.hitungTotal(subtotal, diskon);
    var bayar = L.bacaUang(el("bayar").value);
    el("subtotal").textContent = L.rupiah(subtotal);
    el("total").textContent = L.rupiah(total);
    el("total-besar").textContent = "Total: " + L.rupiah(total);
    var kembali = L.hitungKembalian(bayar, total);
    el("kembalian").textContent = bayar > 0 ? L.rupiah(kembali) : "Rp0";
    el("kembalian").classList.toggle("negatif", bayar > 0 && kembali < 0);
    /* v1.7.7 — QRIS: Simpan aktif tanpa syarat bayar >= total. */
    el("btn-simpan").disabled = items.length === 0 || total <= 0 || (metodeBayar === "tunai" && bayar < total);
    var qt = el("qris-total");
    if (qt) qt.textContent = L.rupiah(total);
    perbaruiTombolKeranjang();
  }

  /* ---------- struk via WA ---------- */
  var trxTerakhir = null;
  function tampilkanStruk(trx) {
    trxTerakhir = trx;
    el("struk-teks").textContent = L.teksStruk(trx);
    el("panel-struk").style.display = "block";
    window.scrollTo(0, document.body.scrollHeight);
  }
  function kirimStrukWa() {
    if (!trxTerakhir) return;
    var nomor = el("wa-nomor").value.trim();
    window.location.href = L.linkWa(nomor, L.teksStruk(trxTerakhir));
  }

  function simpanTransaksi() {
    var items = cartItems();
    if (items.length === 0) return;
    var diskon = L.bacaUang(el("diskon").value);
    /* v1.7.7 — QRIS: bayar = total (tidak ada uang diterima + kembalian). */
    var totalSementara = L.hitungTotal(L.hitungSubtotal(items), diskon);
    var bayar = metodeBayar === "qris" ? totalSementara : L.bacaUang(el("bayar").value);
    var kurang = L.stokKurang(products, items);
    if (kurang.length) { toast("Stok kurang: " + kurang[0].nama); return; }
    var trx = L.buatTransaksi(items, diskon, bayar, undefined, metodeBayar);
    if (trx.bayar < trx.total) { toast("Uang diterima kurang dari total"); return; }
    products = L.terapkanPenjualan(products, items);
    simpanProduk();
    txns.unshift(trx);
    simpanTrx();
    cart = [];
    el("diskon").value = ""; el("bayar").value = "";
    /* v1.7.7 — transaksi baru kembali ke Tunai. */
    resetMetode();
    renderKasir();
    if (trx.metode === "qris") toast("Transaksi QRIS tersimpan.");
    else toast("Transaksi tersimpan. Kembalian " + L.rupiah(trx.kembalian));
    tampilkanStruk(trx);
  }

  /* ---------- produk (form sederhana: 3 isian + banyak barcode) ---------- */
  var formBarcodes = []; /* barcode yang sedang diisi di form (boleh banyak) */

  function renderBarcodeChips() {
    var html = "";
    formBarcodes.forEach(function (kode, i) {
      html += '<span class="chip-barcode">' + esc(kode)
        + ' <button type="button" data-i="' + i + '" aria-label="Hapus barcode">×</button></span>';
    });
    el("f-barcode-chips").innerHTML = html || '<span class="kosong">Belum ada barcode — produk tanpa barcode tetap bisa dijual lewat ketuk nama.</span>';
    var tombol = el("f-barcode-chips").querySelectorAll("button");
    for (var i = 0; i < tombol.length; i++) {
      tombol[i].addEventListener("click", function () {
        formBarcodes.splice(Number(this.getAttribute("data-i")), 1);
        renderBarcodeChips();
      });
    }
  }

  function tambahBarcodeForm(kode) {
    kode = String(kode || "").trim();
    if (!kode) return;
    if (formBarcodes.indexOf(kode) === -1) formBarcodes.push(kode);
    el("f-barcode").value = "";
    renderBarcodeChips();
  }

  function isiForm(p) {
    el("f-nama").value = p ? p.nama : "";
    el("f-harga").value = p ? L.formatRibu(p.harga) : "";
    el("f-satuan").value = p ? (p.satuan || "Pcs") : "Pcs";
    el("f-barcode").value = "";
    formBarcodes = p ? L.barcodes(p) : [];
    renderBarcodeChips();
    formFoto = p ? (p.foto || null) : null;
    var inputFoto = el("f-foto");
    if (inputFoto) inputFoto.value = "";
    tampilkanPratinjauFoto();
    el("f-kategori").value = p ? (p.kategori || "") : "";
    el("f-stok").value = (p && L.stokTerbatas(p)) ? p.stok : "";
    /* v1.5 — batas menipis per produk (bawaan 5; produk lama fallback 5). */
    el("f-minstok").value = p ? angka(p.minStok, MIN_STOK_DEFAULT) : MIN_STOK_DEFAULT;
    el("f-hpp").value = (p && angka(p.hpp) > 0) ? L.formatRibu(p.hpp) : "";
    el("f-judul").textContent = p ? "Ubah Produk" : "Tambah Produk";
    el("btn-batal-edit").style.display = p ? "" : "none";
  }

  function renderProduk() {
    var html = "";
    products.forEach(function (p) {
      /* v1.8.2 — habis dan menipis dipisah: kedip = habis, merah polos = menipis. */
      var habis = L.stokTerbatas(p) && angka(p.stok) <= 0;
      var menipis = !habis && L.stokTerbatas(p) && angka(p.stok) <= angka(p.minStok, MIN_STOK_DEFAULT);
      html += '<div class="produk-kartu">' + (p.foto ? '<img class="pk-foto" src="' + esc(p.foto) + '" alt="">' : "")
        + '<div class="pk-info"><b>' + esc(p.nama) + "</b>"
        + "<span>" + esc(p.kategori || "Umum") + " • " + esc(L.satuanLabel(p))
        + (L.barcodes(p).length ? " • " + esc(L.barcodes(p).join(", ")) : " • tanpa barcode") + "</span>"
        + "<span>Jual " + L.rupiah(p.harga) + " / " + esc(L.satuanLabel(p))
        + (angka(p.hpp) > 0 ? " • Modal " + L.rupiah(p.hpp) : "") + "</span>"
        + '<span class="pk-stok' + (habis ? " habis" : "") + (menipis ? " menipis" : "") + '">' + stokTeks(p)
        + (menipis ? " • Stok menipis!" : "") + "</span></div>"
        + '<div class="pk-aksi"><button data-aksi="cetak" data-id="' + p.id + '">🖨️ Cetak Barcode</button>'
        + '<button data-aksi="edit" data-id="' + p.id + '">Ubah</button>'
        + '<button class="hapus" data-aksi="hapus" data-id="' + p.id + '">Hapus</button></div></div>';
    });
    el("daftar-produk-penuh").innerHTML = html || '<p class="kosong">Belum ada produk.</p>';
    var tombol = el("daftar-produk-penuh").querySelectorAll("button");
    for (var i = 0; i < tombol.length; i++) {
      tombol[i].addEventListener("click", function () {
        var id = this.getAttribute("data-id"), aksi = this.getAttribute("data-aksi");
        var p = produkById(id);
        if (aksi === "cetak") { bukaCetakBarcode(id); return; }
        if (aksi === "edit" && p) {
          editId = id; isiForm(p);
          window.scrollTo(0, 0);
        } else if (aksi === "hapus" && p) {
          if (window.confirm("Hapus produk " + p.nama + "?")) {
            products = products.filter(function (x) { return x.id !== id; });
            simpanProduk(); renderProduk(); renderKasir();
            toast("Produk dihapus");
          }
        }
      });
    }
  }

  function simpanProdukForm() {
    var nama = el("f-nama").value.trim();
    var harga = L.bacaUang(el("f-harga").value);
    var stokRaw = el("f-stok").value.trim();
    var hppRaw = el("f-hpp").value.trim();
    if (!nama) { toast("Nama merek wajib diisi"); return; }
    if (harga <= 0) { toast("Harga per satuan harus lebih dari 0"); return; }
    var stok = stokRaw === "" ? null : L.angka(stokRaw);
    var hpp = hppRaw === "" ? 0 : L.bacaUang(hppRaw);
    if (stok !== null && stok < 0) { toast("Stok tidak boleh negatif"); return; }
    if (hpp < 0) { toast("Modal tidak boleh negatif"); return; }
    /* v1.5 — batas menipis dari form (kosong = bawaan 5; negatif -> 0). */
    var minStokRaw = el("f-minstok").value.trim();
    var minStok = minStokRaw === "" ? MIN_STOK_DEFAULT : Math.max(0, Math.floor(L.angka(minStokRaw, MIN_STOK_DEFAULT)));
    var data = {
      nama: nama,
      kategori: el("f-kategori").value.trim() || "Umum",
      harga: harga, hpp: hpp, stok: stok,
      satuan: el("f-satuan").value || "Pcs",
      barcodes: formBarcodes.slice(),
      foto: formFoto,
      minStok: minStok
    };
    if (editId) {
      var p = produkById(editId);
      if (p) for (var k in data) p[k] = data[k];
      toast("Produk diubah");
      editId = null;
    } else {
      data.id = "p" + Date.now();
      products.push(data);
      if (dariScan) {
        /* produk baru dari hasil scan: kembali ke kasir supaya langsung bisa di-scan */
        dariScan = false;
        toast("Produk tersimpan — silakan scan lagi");
        simpanProduk();
        isiForm(null);
        renderProduk(); renderKasir();
        pindahTab("kasir");
        return;
      }
      toast("Produk ditambahkan");
    }
    simpanProduk();
    isiForm(null);
    renderProduk(); renderKasir();
  }

  /* ---------- scan barcode kamera ---------- */
  var scanMode = null;      // 'kasir' | 'produk'
  var scanner = null;
  var scannerJalan = false;
  var dariScan = false;     // form produk dibuka dari hasil scan barcode tak dikenal

  function formatScan() {
    if (typeof Html5QrcodeSupportedFormats === "undefined") return undefined;
    var F = Html5QrcodeSupportedFormats;
    return [F.QR_CODE, F.EAN_13, F.EAN_8, F.CODE_128, F.CODE_39, F.CODE_93,
      F.UPC_A, F.UPC_E, F.ITF, F.CODABAR, F.RSS_14, F.RSS_EXPANDED, F.DATA_MATRIX];
  }

  function bukaScan(mode) {
    siapkanBunyi();   /* v1.8.2 — siapkan konteks audio di dalam gestur ketuk tombol */
    if (typeof Html5Qrcode === "undefined") {
      toast("Pustaka scan tidak tersedia di perangkat ini");
      return;
    }
    if (typeof navigator === "undefined" || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      toast("Kamera tidak didukung di perangkat ini");
      return;
    }
    scanMode = mode;
    el("scan-modal").style.display = "flex";
    el("scan-status").textContent = "Arahkan kamera ke barcode produk...";
    try { scanner = new Html5Qrcode("scan-reader"); } catch (e) {
      toast("Gagal membuka pemindai: " + e.message);
      el("scan-modal").style.display = "none";
      return;
    }
    var cfg = { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1.0 };
    var fmt = formatScan();
    if (fmt) cfg.formatsToSupport = fmt;
    scanner.start({ facingMode: "environment" }, cfg, onScanSukses, function () { /* abaikan gagal baca frame */ })
      .then(function () { scannerJalan = true; tampilkanTombolFlash(); })
      .catch(function (err) {
        scannerJalan = false;
        el("scan-modal").style.display = "none";
        toast("Kamera tidak bisa dibuka. Izinkan akses kamera untuk KasirKu, lalu coba lagi. (" + (err && err.message ? err.message : err) + ")");
      });
  }

  function tutupScan() {
    el("scan-modal").style.display = "none";
    /* v1.7.7 — matikan lampu bila menyala (best effort, jangan gagalkan
       tutup scan). */
    if (lampuNyala && scanner) {
      try {
        var p = scanner.applyVideoConstraints({ advanced: [{ torch: false }] });
        if (p && typeof p.catch === "function") p.catch(function () {});
      } catch (e) {}
    }
    lampuNyala = false;
    var bf = el("btn-flash");
    if (bf) { bf.style.display = "none"; perbaruiTombolFlash(); }
    if (scanner && scannerJalan) {
      scannerJalan = false;
      scanner.stop().then(function () { try { scanner.clear(); } catch (e) {} }).catch(function () {});
    } else if (scanner) {
      try { scanner.clear(); } catch (e) {}
    }
    scanner = null;
    scanMode = null;
  }

  /* ---------- lampu flash kamera barcode (v1.7.7) ----------
     Pustaka html5-qrcode sudah punya API torch: sesudah scanner.start()
     berhasil, getRunningTrackCameraCapabilities() (sinkron; melempar
     bila scan tidak jalan) memberi tahu torch didukung atau tidak — bila
     ya, tombol Lampu tampil. Ketuk tombol -> applyVideoConstraints
     ({advanced:[{torch:true/false}]}) — Promise. Bila HP tidak
     mendukung, tombol tetap sembunyi tanpa galat dan tanpa toast.
     Berlaku untuk kedua mode scan (kasir + produk). */
  var lampuNyala = false;
  function tampilkanTombolFlash() {
    var b = el("btn-flash");
    if (!b || !scanner) return;
    try {
      if (typeof scanner.getRunningTrackCameraCapabilities !== "function") return;
      var cap = scanner.getRunningTrackCameraCapabilities();
      if (cap && cap.torch === true) b.style.display = "";
    } catch (e) { /* diam — tombol tetap sembunyi */ }
  }
  function perbaruiTombolFlash() {
    var b = el("btn-flash");
    if (!b) return;
    b.textContent = lampuNyala ? "🔦 Lampu Nyala" : "🔦 Lampu";
    if (b.classList) b.classList.toggle("nyala", lampuNyala);
  }
  function toggleFlash() {
    if (!scanner) return;
    var mauNyala = !lampuNyala;
    var janji = null;
    try {
      janji = scanner.applyVideoConstraints({ advanced: [{ torch: mauNyala }] });
    } catch (e) {
      toast("Lampu tidak didukung di HP ini");
      var b0 = el("btn-flash");
      if (b0) b0.style.display = "none";
      return;
    }
    if (janji && typeof janji.then === "function") {
      janji.then(function () {
        lampuNyala = mauNyala;
        perbaruiTombolFlash();
      }).catch(function () {
        toast("Lampu tidak didukung di HP ini");
        var b = el("btn-flash");
        if (b) b.style.display = "none";
      });
    } else {
      lampuNyala = mauNyala;
      perbaruiTombolFlash();
    }
  }

  function onScanSukses(kode) {
    kode = String(kode || "").trim();
    if (!kode) return;
    if (scanMode === "produk") {
      tutupScan();
      tambahBarcodeForm(kode);
      toast("Barcode ditambahkan: " + kode);
      return;
    }
    /* mode kasir */
    tutupScan();
    var p = L.cariByBarcode(products, kode);
    if (p) {
      bunyiBeep();   /* v1.8.2 — produk ditemukan: bunyi tanda scan beres */
      if (L.isBulk(p)) {
        /* barang curah: minta jumlah dulu (tombol cepat 1/2, 1, 2 Liter / 100, 250, 500 mili) */
        bukaPanelJumlah(p);
        toast("Ditemukan: " + p.nama + " — isi jumlahnya");
      } else {
        tambahKeKeranjang(p.id, 1);
        toast("Ditambahkan: " + p.nama);
      }
      return;
    }
    /* barcode belum terdaftar -> tawarkan: sambungkan ke produk lama atau buat baru */
    bukaPanelSambung(kode);
  }

  /* v1.8.2 — kait uji: paparkan jalur scan/ketuk lewat KasirLogic supaya
     suite DOM + Chrome bisa menguji beep dan stok habis tanpa kamera.
     Tanpa perubahan perilaku aplikasi. */
  L.ujiScan = {
    aturModeScan: function (m) { scanMode = m; },
    onScanSukses: onScanSukses,
    bukaScan: bukaScan,
    ketukProduk: ketukProduk,
    bunyiBeep: bunyiBeep,
    siapkanBunyi: siapkanBunyi
  };

  /* ---------- sambung barcode baru ke produk ---------- */
  var barcodeBaru = null;
  function bukaPanelSambung(kode) {
    barcodeBaru = kode;
    el("sambung-kode").textContent = kode;
    var html = "";
    products.forEach(function (p) {
      html += '<button class="produk-item" data-id="' + p.id + '">'
        + '<span class="pi-nama">' + esc(p.nama) + "</span>"
        + '<span class="pi-harga">' + L.rupiah(p.harga) + " / " + esc(L.satuanLabel(p)) + "</span></button>";
    });
    el("sambung-daftar").innerHTML = html || '<p class="kosong">Belum ada produk.</p>';
    var tombol = el("sambung-daftar").querySelectorAll(".produk-item");
    for (var i = 0; i < tombol.length; i++) {
      tombol[i].addEventListener("click", function () {
        var id = this.getAttribute("data-id");
        products = L.tambahBarcode(products, id, barcodeBaru);
        simpanProduk();
        var p = produkById(id);
        tutupPanelSambung();
        toast("Barcode disambungkan ke " + (p ? p.nama : "produk"));
        if (p) {
          if (L.isBulk(p)) bukaPanelJumlah(p);
          else { tambahKeKeranjang(p.id, 1); toast("Ditambahkan: " + p.nama); }
        }
      });
    }
    el("panel-sambung").style.display = "block";
    window.scrollTo(0, 0);
  }
  function tutupPanelSambung() {
    el("panel-sambung").style.display = "none";
    barcodeBaru = null;
  }
  function sambungProdukBaru() {
    if (!barcodeBaru) return;
    var kode = barcodeBaru;
    dariScan = true;
    editId = null;
    tutupPanelSambung();
    pindahTab("produk");
    isiForm(null);
    formBarcodes = [kode];
    renderBarcodeChips();
    toast("Barcode " + kode + " sudah terisi — isi nama merek, harga, lalu simpan");
    setTimeout(function () { el("f-nama").focus(); }, 300);
  }

  /* ---------- riwayat (v1.5: dikelompokkan per tanggal) ---------- */
  function renderRiwayat() {
    /* v1.7 — buang entri "Baru Dihapus" yang sudah lebih dari 24 jam. */
    var terhapusBersih = L.buangTerhapusKedaluarsa(terhapus, Date.now());
    if (terhapusBersih.length !== terhapus.length) { terhapus = terhapusBersih; simpanTerhapus(); }
    var wadah = el("daftar-riwayat");
    if (!txns.length) {
      wadah.innerHTML = '<p class="kosong">Belum ada transaksi.</p>';
    } else {
      /* v1.7 — tampil 50 terbaru saja (batas tampilan, data tetap utuh). */
      var tampil = L.batasTampilRiwayat(txns, riwayatBatas);
      var html = "";
      /* Kelompok per tanggal, terbaru dulu; tiap kelompok ada header
         tanggal + total hari itu. Indeks global (data-i) tetap dipakai
         tombol Cetak/WA/Hapus supaya perilakunya tidak berubah. */
      L.kelompokRiwayat(tampil).forEach(function (g) {
        html += '<h3 class="grid-judul">📅 ' + esc(g.tanggal) + " — "
          + g.jumlah + " transaksi • " + L.rupiah(g.omset) + "</h3>";
        g.trx.forEach(function (t) {
          var i = txns.indexOf(t);
          html += '<div class="trx"><button class="trx-head" data-i="' + i + '"><span><b>' + t.id + "</b><br>"
            + esc(t.waktu) + " • " + (t.metode === "qris" ? "📱 QRIS" : "💵 Tunai") + "</span><b>" + L.rupiah(t.total) + "</b></button>"
            + '<div class="trx-detail" id="trx-d-' + i + '" style="display:none">';
          t.items.forEach(function (it) {
            html += "<div>" + esc(it.nama) + " × " + L.formatQty(it.qty) + " " + esc(it.satuan || "Pcs") + " — " + L.rupiah(it.harga * it.qty) + "</div>";
          });
          html += "<div>Subtotal: " + L.rupiah(t.subtotal) + "</div>"
            + "<div>Diskon: " + L.rupiah(t.diskon) + "</div>"
            + (t.metode === "qris"
              ? "<div>QRIS: " + L.rupiah(t.bayar) + "</div>"
              : "<div>Bayar: " + L.rupiah(t.bayar) + " • Kembalian: " + L.rupiah(t.kembalian) + "</div>")
            + (t.labaAda ? "<div>Laba kotor: " + L.rupiah(t.laba) + "</div>" : "")
            + '<div class="trx-aksi"><button type="button" class="btn-trx" data-aksi="cetak" data-i="' + i + '">🖨️ Cetak</button>'
            + '<button type="button" class="btn-trx" data-aksi="wa" data-i="' + i + '">💬 WA</button>'
            + '<button type="button" class="btn-trx" data-aksi="hapus" data-i="' + i + '">🗑️ Hapus</button></div>'
            + "</div></div>";
        });
      });
      wadah.innerHTML = html;
      var heads = el("daftar-riwayat").querySelectorAll(".trx-head");
      for (var i = 0; i < heads.length; i++) {
        heads[i].addEventListener("click", function () {
          var d = el("trx-d-" + this.getAttribute("data-i"));
          d.style.display = d.style.display === "none" ? "" : "none";
        });
      }
      var aksi = el("daftar-riwayat").querySelectorAll(".btn-trx");
      for (var j = 0; j < aksi.length; j++) {
        aksi[j].addEventListener("click", function () {
          var idx = parseInt(this.getAttribute("data-i"), 10);
          var a = this.getAttribute("data-aksi");
          if (a === "cetak") cetakStrukRiwayat(idx);
          else if (a === "hapus") bukaModalHapus(idx);
          else kirimStrukRiwayatWa(idx);
        });
      }
    }
    /* v1.7 — tombol "lebih banyak" (sisa yang belum tampil). */
    var sisa = L.sisaRiwayat(txns.length, riwayatBatas);
    var btnLebih = el("btn-riwayat-lebih");
    if (btnLebih) {
      if (sisa > 0) { btnLebih.style.display = ""; btnLebih.textContent = "Tampilkan " + sisa + " transaksi lagi"; }
      else btnLebih.style.display = "none";
    }
    renderTerhapus();
  }

  /* ---------- hapus transaksi + "Baru Dihapus" (v1.7) ---------- */
  var hapusIdx = null;
  function bukaModalHapus(idx) {
    if (idx == null || idx < 0 || idx >= txns.length) return;
    hapusIdx = idx;
    el("hapus-latar").style.display = "flex";
  }
  function tutupModalHapus() {
    hapusIdx = null;
    el("hapus-latar").style.display = "none";
  }
  function lakukanHapus(idx) {
    var hasil = L.hapusTransaksiKeTempatSampah(txns, terhapus, idx, Date.now());
    if (!hasil.dihapus) return;
    txns = hasil.txns; terhapus = hasil.terhapus;
    simpanTrx(); simpanTerhapus();
    riwayatBatas = RIWAYAT_TAMPIL_AWAL;
    renderRiwayat(); renderLaporan();
    toast("Transaksi dihapus.");
  }
  function renderTerhapus() {
    var wadah = el("daftar-terhapus");
    if (!wadah) return;
    if (!terhapus.length) { wadah.innerHTML = ""; return; }
    var html = '<h3 class="grid-judul">🗑️ Baru Dihapus</h3>';
    terhapus.forEach(function (e) {
      var t = e.trx;
      html += '<div class="trx"><div class="trx-detail" style="display:block;border-top:none">'
        + "<b>" + esc(t.id) + "</b> • " + esc(t.waktu) + " • <b>" + L.rupiah(t.total) + "</b>"
        + '<div class="trx-aksi"><button type="button" class="btn-trx" data-aksi="pulihkan" data-id="' + esc(t.id) + '">↩️ Pulihkan</button></div>'
        + "</div></div>";
    });
    wadah.innerHTML = html;
    var tombol = wadah.querySelectorAll(".btn-trx");
    for (var i = 0; i < tombol.length; i++) {
      tombol[i].addEventListener("click", function () {
        pulihkanTransaksiDom(this.getAttribute("data-id"));
      });
    }
  }
  function pulihkanTransaksiDom(id) {
    var hasil = L.pulihkanTransaksi(txns, terhapus, id);
    if (!hasil.dipulihkan) return;
    txns = hasil.txns; terhapus = hasil.terhapus;
    simpanTrx(); simpanTerhapus();
    riwayatBatas = RIWAYAT_TAMPIL_AWAL;
    renderRiwayat(); renderLaporan();
    toast("Transaksi dipulihkan");
  }

  /* ---------- struk riwayat: cetak / WA (v1.4-test3) ----------
     Isi SAMA seperti struk sesudah bayar (teksStruk — tidak diubah);
     versi cetak menambah nomor TRX di baris pertama. WA memakai ulang
     teksStruk + linkWa persis seperti tombol struk sesudah bayar. */
  function teksStrukRiwayat(t) {
    return t.id + "\n" + L.teksStruk(t);
  }
  function cetakStrukRiwayat(i) {
    var t = txns[i];
    if (!t) return;
    /* v1.7.5 — rute cetak lewat dialog pilihan (PDF atau Bluetooth). */
    cetakTeks(teksStrukRiwayat(t));
  }
  function kirimStrukRiwayatWa(i) {
    var t = txns[i];
    if (!t) return;
    window.location.href = L.linkWa("", L.teksStruk(t));
  }
  root.cetakStrukRiwayat = cetakStrukRiwayat;
  root.kirimStrukRiwayatWa = kirimStrukRiwayatWa;

  /* ---------- kasbon (v1.5) ---------- */
  var kasbon = [];      /* [{id, nama, jumlah, keterangan, tanggal, waktu, lunas, lunasTanggal}] — dimuat di muat() */
  function simpanKasbon() { try { localStorage.setItem(L.KEY_KASBON, JSON.stringify(kasbon)); } catch (e) {} }
  /* v1.7 — transaksi yang baru dihapus (bisa dipulihkan 1 hari) + batas
     tampil riwayat + pengingat cadangan (sekali per sesi). */
  var terhapus = [];    /* [{trx, dihapusMs}] — dimuat di muat() */
  var riwayatBatas = RIWAYAT_TAMPIL_AWAL;
  var pengingatCadanganSudah = false;
  function simpanTerhapus() { try { localStorage.setItem(KEY_TERHAPUS, JSON.stringify(terhapus)); } catch (e) {} }
  function tambahKasbonForm() {
    var nama = el("kb-nama").value.trim();
    var jumlah = L.angka(el("kb-jumlah").value, 0);
    var ket = el("kb-ket").value.trim();
    var baru = L.buatKasbon(nama, jumlah, ket);
    if (!baru) { toast("Isi nama pelanggan dan jumlah kasbon (lebih dari 0)"); return; }
    kasbon = L.tambahKasbon(kasbon, baru);
    simpanKasbon();
    el("kb-nama").value = ""; el("kb-jumlah").value = ""; el("kb-ket").value = "";
    renderKasbon();
    toast("Kasbon ditambahkan: " + baru.nama + " " + L.rupiah(baru.jumlah));
  }
  function renderKasbon() {
    var belum = kasbon.filter(function (k) { return !k.lunas; });
    var sudah = kasbon.filter(function (k) { return k.lunas; });
    var total = el("kb-total");
    if (total) total.textContent = belum.length
      ? "Belum lunas: " + L.rupiah(L.totalKasbon(kasbon, true)) + " (" + belum.length + " orang)"
      : "Tidak ada kasbon yang belum lunas.";
    function kartu(k) {
      return '<div class="produk-kartu"><div class="pk-info"><b>' + esc(k.nama) + "</b>"
        + "<span>" + L.rupiah(k.jumlah) + " • " + esc(k.tanggal)
        + (k.keterangan ? " • " + esc(k.keterangan) : "") + "</span>"
        + (k.lunas ? "<span>Lunas " + esc(k.lunasTanggal || "") + "</span>" : "")
        + '</div><div class="pk-aksi">'
        + (k.lunas ? ""
          : '<button data-aksi="lunas" data-id="' + k.id + '">✅ Lunas</button>'
          + '<button data-aksi="tagih" data-id="' + k.id + '">💬 Tagih via WA</button>')
        + "</div></div>";
    }
    var dBelum = el("daftar-kasbon-belum"), dSudah = el("daftar-kasbon-lunas");
    if (dBelum) dBelum.innerHTML = belum.length ? belum.map(kartu).join("") : '<p class="kosong">Tidak ada kasbon yang belum lunas.</p>';
    if (dSudah) dSudah.innerHTML = sudah.length ? sudah.map(kartu).join("") : '<p class="kosong">Belum ada kasbon yang lunas.</p>';
    [dBelum, dSudah].forEach(function (wadah) {
      if (!wadah) return;
      var tombol = wadah.querySelectorAll("button");
      for (var i = 0; i < tombol.length; i++) {
        tombol[i].addEventListener("click", function () {
          var id = this.getAttribute("data-id"), aksi = this.getAttribute("data-aksi");
          var k = null;
          kasbon.forEach(function (x) { if (x.id === id) k = x; });
          if (!k) return;
          if (aksi === "lunas") {
            kasbon = L.lunasiKasbon(kasbon, id);
            simpanKasbon();
            renderKasbon();
            toast("Kasbon " + k.nama + " lunas");
          } else if (aksi === "tagih") {
            var pesan = "Halo " + k.nama + ", ini tagihan kasbon di warung kami: "
              + L.rupiah(k.jumlah) + " (" + k.tanggal
              + (k.keterangan ? ", " + k.keterangan : "") + "). Terima kasih!";
            window.location.href = L.linkWa("", pesan);
          }
        });
      }
    });
  }
  root.renderKasbon = renderKasbon;

  /* ---------- backup + pulihkan + ekspor CSV (v1.5) ---------- */
  /* Simpan berkas: di aplikasi Android pakai bridge native (WebView
     tidak mengunduh sendiri); di web/PWA pakai unduhan browser biasa. */
  function simpanBerkas(nama, isi, mime) {
    try {
      if (typeof AndroidBridge !== "undefined" && AndroidBridge && AndroidBridge.simpanCadangan) {
        var hasil = AndroidBridge.simpanCadangan(nama, isi, mime || "application/json");
        if (hasil === "OK") { toast("Tersimpan di folder Unduhan: " + nama); return true; }
        toast("Tidak bisa menyimpan: " + hasil);
        return false;
      }
    } catch (e) {}
    if (typeof Blob !== "undefined" && typeof URL !== "undefined" && URL.createObjectURL) {
      try {
        var blob = new Blob([isi], { type: mime || "application/json" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url; a.download = nama;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { try { URL.revokeObjectURL(url); } catch (e2) {} }, 1000);
        toast("Mengunduh: " + nama);
        return true;
      } catch (e) { toast("Tidak bisa mengunduh berkas di perangkat ini"); return false; }
    }
    toast("Penyimpanan berkas tidak tersedia di perangkat ini");
    return false;
  }
  function buatCadangan() {
    var huruf = "normal";
    try { huruf = localStorage.getItem(KEY_HURUF) || "normal"; } catch (e) {}
    var data = L.buatBackup(products, txns, kasbon, { huruf: huruf, qrisGambar: qrisGambar });
    var nama = "KasirKu-backup-" + L.tanggalHariIni() + ".json";
    /* v1.7 — catat waktu cadangan terakhir bila berhasil disimpan. */
    if (simpanBerkas(nama, JSON.stringify(data, null, 2), "application/json")) {
      try { localStorage.setItem(KEY_CADANGAN_TERAKHIR, String(Date.now())); } catch (e) {}
      perbaruiTeksCadanganTerakhir();
    }
  }
  /* v1.7 — teks singkat "Cadangan terakhir: <tanggal> / Belum pernah". */
  function perbaruiTeksCadanganTerakhir() {
    var p = el("cadangan-terakhir");
    if (!p) return;
    var ms = null;
    try { var v = localStorage.getItem(KEY_CADANGAN_TERAKHIR); if (v) ms = Number(v); } catch (e) {}
    if (ms && !isNaN(ms)) {
      var d = new Date(ms);
      p.textContent = "Cadangan terakhir: " + d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
    } else {
      p.textContent = "Cadangan terakhir: Belum pernah";
    }
  }
  /* v1.7 — pengingat cadangan tiap 30 hari: sekali per sesi, hanya sesudah
     layar utama terbuka (trial/aktif, bukan sambutan/kunci). */
  function tutupModalCadangan() {
    el("cadangan-latar").style.display = "none";
  }
  function periksaPengingatCadangan() {
    if (pengingatCadanganSudah) return;
    var st = statusLisensiSekarang();
    if (st.status !== "trial" && st.status !== "aktif") return;
    var sekarang = Date.now();
    var terakhir = null, ditampilkan = null;
    try { var v = localStorage.getItem(KEY_CADANGAN_TERAKHIR); if (v) terakhir = Number(v); } catch (e) {}
    try { var w = localStorage.getItem(KEY_CADANGAN_INGAT_TERAKHIR); if (w) ditampilkan = Number(w); } catch (e) {}
    if (!L.perluIngatCadangan(terakhir, txns.length, sekarang, ditampilkan)) return;
    pengingatCadanganSudah = true;
    /* v1.7.1 — catat waktu DITAMPILKAN saat modal tampil (bukan saat ditutup),
       supaya "Nanti", tombol kembali, maupun ketuk di luar sama-sama membuat
       aplikasi diam 30 hari. */
    try { localStorage.setItem(KEY_CADANGAN_INGAT_TERAKHIR, String(sekarang)); } catch (e) {}
    var teks = el("cadangan-teks");
    if (teks) teks.textContent = (terakhir && !isNaN(terakhir)) ? "Sudah 30 hari sejak cadangan terakhir." : "Belum pernah membuat cadangan.";
    el("cadangan-latar").style.display = "flex";
  }
  /* v1.7.4 — pemberitahuan update: saat layar utama dibuka (trial/aktif,
     bukan sambutan/kunci), bila online, baca node /versi Firebase RTDB
     (fetch polos, TANPA secret — pola yang sama dengan cekKodeFirebase).
     Bila vc jarak jauh > VERSI_KODE lokal -> dialog "Ada versi baru X —
     Unduh / Nanti", maks 1x sehari, tidak paksa, tidak unduh otomatis.
     Diam bila offline / fetch gagal / node tidak ada / vc <= lokal.
     Pengecekan ditunda 1,5 detik supaya layar utama sempat tampil dan
     tidak berebut dengan aktivasi kode saat aplikasi baru dibuka. */
  var pembaruanSudah = false;      /* dialog sudah tampil sekali sesi ini */
  var pembaruanDijadwalkan = false;
  var updateTautan = null;
  function periksaPembaruan() {
    if (pembaruanSudah || pembaruanDijadwalkan) return;
    var st = statusLisensiSekarang();
    if (st.status !== "trial" && st.status !== "aktif") return;
    if (typeof navigator !== "undefined" && navigator.onLine === false) return;
    pembaruanDijadwalkan = true;
    setTimeout(function () {
      L.bacaInfoVersi(DB_URL, (typeof fetch !== "undefined" ? fetch : null))
        .then(function (info) {
          if (pembaruanSudah) return;
          var terakhir = null;
          try { terakhir = localStorage.getItem(KEY_UPDATE_TERAKHIR); } catch (e) {}
          if (!L.perluTampilkanUpdate(info, VERSI_KODE, terakhir, Date.now())) return;
          pembaruanSudah = true;
          try { localStorage.setItem(KEY_UPDATE_TERAKHIR, L.tanggalHariIni()); } catch (e) {}
          tampilkanDialogUpdate(info);
        });
    }, 1500);
  }
  function tampilkanDialogUpdate(info) {
    var versi = (info && info.versi) ? String(info.versi) : "";
    updateTautan = (info && info.tautan) ? String(info.tautan) : LINK_UPDATE;
    var teks = el("update-teks");
    if (teks) teks.textContent = "Ada versi baru " + versi + ".";
    var u = el("update-latar");
    if (u) u.style.display = "flex";
  }
  function tutupDialogUpdate() {
    var u = el("update-latar");
    if (u) u.style.display = "none";
  }
  /* Buka tautan luar lewat <a> biasa supaya MainActivity membukanya
     lewat Intent (bukan memuat di WebView). */
  function bukaTautanLuar(url) {
    try {
      var a = document.createElement("a");
      a.href = url;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (e) {}
  }
  function pulihkanDariBerkas(file) {
    if (!file) return;
    if (typeof FileReader === "undefined") { toast("Perangkat ini tidak bisa membaca berkas"); return; }
    var reader = new FileReader();
    reader.onload = function () {
      var hasil = null;
      try { hasil = L.validasiBackup(JSON.parse(reader.result)); } catch (e) { hasil = null; }
      if (!hasil || !hasil.ok) {
        toast("Berkas ini bukan cadangan KasirKu yang benar");
        return;
      }
      var info = hasil.produk.length + " produk, " + hasil.transaksi.length
        + " transaksi, " + hasil.kasbon.length + " kasbon.";
      if (!window.confirm("Pulihkan cadangan ini? Data yang ada sekarang di HP akan diganti. (" + info + ")")) return;
      products = hasil.produk;
      txns = hasil.transaksi;
      kasbon = hasil.kasbon;
      simpanProduk(); simpanTrx(); simpanKasbon();
      terapkanHuruf(hasil.pengaturan.huruf);
      /* v1.7.7 — gambar QRIS ikut pulih. */
      qrisGambar = hasil.pengaturan.qrisGambar || null;
      simpanQris();
      tampilkanPratinjauQris();
      isiForm(null); renderKasir(); renderProduk(); renderRiwayat(); renderLaporan(); renderKasbon();
      toast("Cadangan dipulihkan (" + info + ")");
    };
    reader.onerror = function () { toast("Berkas cadangan tidak bisa dibaca"); };
    reader.readAsText(file);
  }
  function eksporRekapCsv() {
    if (!txns.length) { toast("Belum ada transaksi untuk diekspor"); return; }
    var csv = L.rekapCsv(L.rekapHarian(txns));
    simpanBerkas("KasirKu-rekap-" + L.tanggalHariIni() + ".csv", csv, "text/csv");
  }
  root.buatCadangan = buatCadangan;
  root.pulihkanDariBerkas = pulihkanDariBerkas;
  root.eksporRekapCsv = eksporRekapCsv;

  /* ---------- printer Bluetooth ESC/POS 58mm (v1.4) ----------
     Permintaan ARIFIN 23 Nov 2026: printer thermal dinyalakan tapi aplikasi
     tidak bisa menemukannya — belum ada pencarian perangkat, dan tombol
     Cetak lama hanya dialog print sistem yang tidak melihat printer
     thermal Bluetooth. WebView tidak bisa Bluetooth classic (Web Bluetooth
     hanya BLE GATT), jadi scan + koneksi + kirim byte dikerjakan native
     (PrinterBridge di MainActivity, RFCOMM SPP) dan halaman ini hanya
     mengatur alurnya. Isi struk TIDAK diubah (teksStruk yang sama).
     Aturan cetak (v1.7.5): tiap tekan Cetak tanya dulu lewat dialog
     pilihan — "PDF / Printer biasa" atau "Printer Bluetooth"; tidak
     lagi memilih otomatis. Bila Bluetooth dipilih tapi belum
     terhubung, beri tahu + arahkan ke Pengaturan > Printer. */
  var KEY_PRINTER_DOM = L.KEY_PRINTER;
  var printerTersimpan = null;   /* {nama, mac} — tersimpan di localStorage */
  var printerDitemukan = [];     /* [{nama, mac, dipasangkan}] — hasil scan */
  var printerMauScan = false;    /* true bila pengguna sudah ketuk Cari tapi Bluetooth/izin belum siap */
  function muatPrinter() {
    try { printerTersimpan = JSON.parse(localStorage.getItem(KEY_PRINTER_DOM) || "null"); } catch (e) { printerTersimpan = null; }
    if (printerTersimpan && !printerTersimpan.mac) printerTersimpan = null;
  }
  function simpanPrinter() { try { localStorage.setItem(KEY_PRINTER_DOM, JSON.stringify(printerTersimpan)); } catch (e) {} }
  function printerAda() { return (typeof PrinterBridge !== "undefined") && !!PrinterBridge; }
  /* Status native (sinkron, JSON): {didukung, nyala, terhubung, nama, mac}.
     Aman bila bridge tidak ada / metodenya belum ada (build lama). */
  function statusPrinterNative() {
    var kosong = { didukung: false, nyala: false, terhubung: false, nama: "", mac: "" };
    if (!printerAda() || !PrinterBridge.getStatus) return kosong;
    try {
      var s = JSON.parse(PrinterBridge.getStatus() || "{}");
      return { didukung: !!s.didukung, nyala: !!s.nyala, terhubung: !!s.terhubung, nama: String(s.nama || ""), mac: String(s.mac || "") };
    } catch (e) { return kosong; }
  }
  function perbaruiStatusPrinter() {
    var st = el("printer-status");
    if (!st) return;
    if (!printerAda()) {
      st.textContent = "Cetak Bluetooth tidak tersedia di versi web — tombol Cetak memakai dialog print sistem.";
      return;
    }
    var n = statusPrinterNative();
    if (n.terhubung && n.nama) st.textContent = "Terhubung: " + n.nama + (n.mac ? " (" + n.mac + ")" : "");
    else if (printerTersimpan) st.textContent = "Tersimpan: " + printerTersimpan.nama + " (" + printerTersimpan.mac + ") — belum terhubung. Ketuk Cari Perangkat lalu hubungkan.";
    else if (!n.nyala) st.textContent = "Bluetooth mati — nyalakan Bluetooth dulu, lalu ketuk Cari Perangkat.";
    else st.textContent = "Belum ada printer. Nyalakan printer Bluetooth, lalu ketuk Cari Perangkat.";
  }
  function tambahPerangkat(nama, mac, dipasangkan) {
    if (!mac) return;
    for (var i = 0; i < printerDitemukan.length; i++)
      if (printerDitemukan[i].mac === mac) { printerDitemukan[i].dipasangkan = printerDitemukan[i].dipasangkan || !!dipasangkan; return; }
    printerDitemukan.push({ nama: nama || mac, mac: mac, dipasangkan: !!dipasangkan });
  }
  function renderDaftarPrinter() {
    var wadah = el("printer-daftar");
    if (!wadah) return;
    if (!printerDitemukan.length) { wadah.innerHTML = ""; return; }
    var html = "";
    printerDitemukan.forEach(function (d) {
      var tersimpan = printerTersimpan && printerTersimpan.mac === d.mac;
      html += '<button type="button" class="printer-item" data-mac="' + esc(d.mac) + '" data-nama="' + esc(d.nama) + '">'
        + "<b>" + esc(d.nama) + "</b><br><span>" + esc(d.mac) + "</span>"
        + (d.dipasangkan ? " • sudah dipasangkan" : "") + (tersimpan ? " • ✓ tersimpan" : "")
        + "</button>";
    });
    wadah.innerHTML = html;
    var tombol = wadah.querySelectorAll(".printer-item");
    for (var i = 0; i < tombol.length; i++) {
      tombol[i].addEventListener("click", function () {
        hubungkanPrinter(this.getAttribute("data-mac"), this.getAttribute("data-nama"));
      });
    }
  }
  /* v1.5 — hanya perangkat yang sudah dipasangkan (bonded). Discovery
     dimatikan: daftar tidak lagi bercampur jam/speaker yang belum tentu
     printer. Spinner tampil selama memuat supaya ketahuan sedang bekerja. */
  var scanTimer = null;
  function tampilkanLoadingPrinter(nyala) {
    var wadah = el("printer-loading");
    if (wadah) wadah.style.display = nyala ? "flex" : "none";
    var tombol = el("btn-cari-printer");
    if (tombol) tombol.disabled = !!nyala;
  }
  function mulaiScan() {
    printerDitemukan = [];
    renderDaftarPrinter();
    var st = el("printer-status");
    if (st) st.textContent = "Mencari perangkat...";
    tampilkanLoadingPrinter(true);
    if (scanTimer) clearTimeout(scanTimer);
    scanTimer = setTimeout(function () {
      try {
        var bonded = JSON.parse(PrinterBridge.getBonded() || "[]");
        bonded.forEach(function (d) { tambahPerangkat(d.nama, d.mac, true); });
      } catch (e) {}
      tampilkanLoadingPrinter(false);
      renderDaftarPrinter();
      if (st) st.textContent = printerDitemukan.length
        ? printerDitemukan.length + " perangkat dipasangkan ditemukan. Ketuk perangkat untuk menghubungkan."
        : "Tidak ada perangkat Bluetooth yang dipasangkan. Pasangkan printer dulu di Pengaturan Bluetooth HP, lalu ketuk Cari Perangkat lagi.";
    }, 300);
  }
  function cariPrinter() {
    if (!printerAda()) { toast("Cetak Bluetooth hanya di aplikasi Android"); return; }
    var st = statusPrinterNative();
    if (!st.didukung) { toast("HP ini tidak punya Bluetooth"); return; }
    if (!st.nyala) {
      printerMauScan = true;
      try { PrinterBridge.requestEnable(); } catch (e) { toast("Tidak bisa meminta nyalakan Bluetooth"); }
      return;
    }
    if (PrinterBridge.hasPermissions && !PrinterBridge.hasPermissions()) {
      printerMauScan = true;
      try { PrinterBridge.requestPermissions(); } catch (e) { toast("Tidak bisa meminta izin Bluetooth"); }
      return;
    }
    mulaiScan();
  }
  function hubungkanPrinter(mac, nama) {
    if (!printerAda() || !mac) return;
    toast("Menghubungkan ke " + (nama || mac) + "...");
    try { PrinterBridge.connect(mac, nama || mac); } catch (e) { toast("Tidak bisa menghubungkan printer"); }
  }
  function lupakanPrinter() {
    try { if (printerAda() && PrinterBridge.disconnect) PrinterBridge.disconnect(); } catch (e) {}
    printerTersimpan = null;
    try { localStorage.removeItem(KEY_PRINTER_DOM); } catch (e) {}
    perbaruiStatusPrinter();
    toast("Printer dilupakan");
  }
  function cetakTesPrinter() {
    var n = statusPrinterNative();
    if (!n.terhubung) { toast("Hubungkan printer dulu di atas"); return; }
    var hasil = "";
    try { hasil = PrinterBridge.printBase64(L.escposBase64(L.teksStrukTes(n.nama))); } catch (e) { hasil = "GAGAL"; }
    if (hasil === "OK") toast("Struk tes tercetak via Bluetooth");
    else { toast("Printer tidak bisa mencetak — periksa printer lalu coba lagi"); perbaruiStatusPrinter(); }
  }
  /* v1.7.4 — cetak lewat dialog print sistem Android: window.print()
     polos di WebView TIDAK memunculkan apa-apa (tidak tersambung ke
     PrintManager), jadi halaman memanggil bridge native PrintBridge
     bila ada; fallback ke window.print() hanya bila bridge tidak ada
     (mis. pratinjau web). Dialog sistem berisi pilihan "Simpan sebagai
     PDF" + daftar printer. */
  function cetakHalaman() {
    try {
      if (typeof PrintBridge !== "undefined" && PrintBridge && PrintBridge.cetakHalaman) {
        PrintBridge.cetakHalaman("KasirKu");
        return;
      }
    } catch (e) {}
    try { window.print(); } catch (e) {}
  }
  /* Cetak lewat dialog print sistem (jalur "PDF / Printer biasa" —
     di sana ada "Simpan sebagai PDF" + daftar printer). */
  function cetakSistem(teks) {
    el("area-cetak").innerHTML = '<div class="struk-cetak">' + esc(teks) + "</div>";
    setTimeout(cetakHalaman, 150);
    return "sistem";
  }
  /* Rute cetak (v1.7.5): tanya dulu lewat dialog pilihan — "PDF /
     Printer biasa" atau "Printer Bluetooth". Tidak lagi memilih
     otomatis seperti v1.7.4. */
  function cetakTeks(teks) {
    tampilkanDialogPilihCetak({ jenis: "struk", teks: teks });
    return "pilih";
  }
  /* ---------- pilihan cetak eksplisit (v1.7.5) ----------
     Perintah ARIFIN 25 Nov 2026 (dikonfirmasi dari HP: saat Cetak hanya
     muncul PDF, tidak ada pilihan printer Bluetooth): tiap tekan Cetak
     — label maupun struk — tanya dulu lewat dialog kecil dua tombol
     besar. Tanya SETIAP kali (tanpa simpan preferensi) supaya mudah
     ditebak pengguna warung. Bila Bluetooth belum terhubung: beri tahu
     singkat + arahkan ke Pengaturan > Printer — jangan diam tanpa
     penjelasan. */
  var cetakPilihTugas = null; /* {jenis:"label", produkId, kode, jumlah} atau {jenis:"struk", teks} */
  function tampilkanDialogPilihCetak(tugas) {
    cetakPilihTugas = tugas;
    var d = el("cetak-pilih-latar");
    if (d) d.style.display = "flex";
  }
  function tutupDialogPilihCetak() {
    var d = el("cetak-pilih-latar");
    if (d) d.style.display = "none";
    cetakPilihTugas = null;
  }
  function cetakLabelPdf(tugas) {
    var p = produkById(tugas.produkId);
    if (!p) return;
    var html = "";
    for (var i = 0; i < tugas.jumlah; i++) {
      html += '<div class="label-barcode"><div class="label-nama">' + esc(p.nama) + '</div>'
        + '<div class="label-harga">' + esc(L.rupiah(p.harga)) + '</div>'
        + '<svg class="label-svg" data-kode="' + esc(tugas.kode) + '"></svg>'
        + '<div class="label-kode">' + esc(tugas.kode) + "</div></div>";
    }
    el("area-cetak").innerHTML = html;
    var svgs = el("area-cetak").querySelectorAll("svg.label-svg");
    for (var j = 0; j < svgs.length; j++) {
      try {
        if (typeof JsBarcode !== "undefined")
          JsBarcode(svgs[j], tugas.kode, { format: "CODE128", width: 2, height: 56, displayValue: false, margin: 4 });
      } catch (e) {}
    }
    setTimeout(cetakHalaman, 150);
  }
  function cetakPilihPdf() {
    var tugas = cetakPilihTugas; tutupDialogPilihCetak();
    if (!tugas) return;
    if (tugas.jenis === "label") cetakLabelPdf(tugas);
    else cetakSistem(tugas.teks);
  }
  function cetakPilihBluetooth() {
    var tugas = cetakPilihTugas; tutupDialogPilihCetak();
    if (!tugas) return;
    if (!printerAda() || !printerTersimpan || !printerTersimpan.mac || !statusPrinterNative().terhubung) {
      toast("Hubungkan printer dulu");
      pindahTab("pengaturan");
      var t = el("printer-status");
      if (t && t.scrollIntoView) t.scrollIntoView();
      return;
    }
    var hasil = "";
    try {
      if (tugas.jenis === "label") {
        var p = produkById(tugas.produkId);
        if (!p) return;
        hasil = PrinterBridge.printBase64(L.escposLabelBase64(p.nama, L.rupiah(p.harga), tugas.kode, tugas.jumlah));
      } else {
        hasil = PrinterBridge.printBase64(L.escposBase64(tugas.teks));
      }
    } catch (e) { hasil = "GAGAL"; }
    if (hasil === "OK") toast(tugas.jenis === "label" ? "Label tercetak via Bluetooth" : "Struk tercetak via Bluetooth");
    else toast("Printer Bluetooth tidak bisa dipakai — periksa printer lalu coba lagi");
  }
  function cetakStrukTerakhir() {
    if (!trxTerakhir) return;
    cetakTeks(L.teksStruk(trxTerakhir));
  }
  /* Event dari native (MainActivity kirim via evaluateJavascript).
     Dipanggil sebagai fungsi global onPrinterEvent(jsonString). */
  function onPrinterEvent(json) {
    var ev = null;
    try { ev = JSON.parse(json); } catch (e) { return; }
    if (!ev || !ev.tipe) return;
    if (ev.tipe === "perangkat") {
      /* v1.5 — discovery dimatikan: hasil discovery yang belum
         dipasangkan SENGAJA diabaikan, daftar hanya berisi bonded. */
      return;
    } else if (ev.tipe === "selesai-scan") {
      tampilkanLoadingPrinter(false);
      var st = el("printer-status");
      if (st) st.textContent = printerDitemukan.length
        ? "Pencarian selesai — " + printerDitemukan.length + " perangkat ditemukan. Ketuk perangkat untuk menghubungkan."
        : "Pencarian selesai — tidak ada perangkat Bluetooth ditemukan.";
      toast(printerDitemukan.length ? "Pencarian selesai" : "Tidak ada perangkat ditemukan");
    } else if (ev.tipe === "terhubung") {
      printerTersimpan = { nama: ev.nama || ev.mac, mac: ev.mac };
      simpanPrinter();
      renderDaftarPrinter();
      perbaruiStatusPrinter();
      toast("Terhubung ke " + printerTersimpan.nama);
    } else if (ev.tipe === "gagal-hubung") {
      perbaruiStatusPrinter();
      toast("Tidak bisa terhubung ke printer" + (ev.pesan ? " — " + ev.pesan : ""));
    } else if (ev.tipe === "terputus") {
      perbaruiStatusPrinter();
    } else if (ev.tipe === "tercetak") {
      toast("Struk tercetak via Bluetooth");
    } else if (ev.tipe === "gagal-cetak") {
      toast("Printer Bluetooth tidak bisa mencetak — periksa printer lalu coba lagi");
      perbaruiStatusPrinter();
    } else if (ev.tipe === "izin") {
      if (ev.diberikan) { if (printerMauScan) { printerMauScan = false; mulaiScan(); } }
      else { printerMauScan = false; toast("Izin Bluetooth ditolak — pencarian perangkat tidak bisa dipakai"); }
    } else if (ev.tipe === "bluetooth") {
      if (ev.nyala) { if (printerMauScan) { printerMauScan = false; mulaiScan(); } perbaruiStatusPrinter(); }
      else {
        printerMauScan = false;
        /* v1.5 — Bluetooth mati: kosongkan daftar yang tampil (printer
           tersimpan tetap tampil di teks status via perbaruiStatusPrinter). */
        printerDitemukan = [];
        renderDaftarPrinter();
        tampilkanLoadingPrinter(false);
        perbaruiStatusPrinter();
        toast("Bluetooth masih mati");
      }
    }
  }
  root.onPrinterEvent = onPrinterEvent;
  root.cetakTeks = cetakTeks;
  root.cetakStrukTerakhir = cetakStrukTerakhir;
  root.cariPrinter = cariPrinter;
  root.hubungkanPrinter = hubungkanPrinter;
  root.lupakanPrinter = lupakanPrinter;
  root.cetakTesPrinter = cetakTesPrinter;
  root.muatPrinter = muatPrinter;
  root.perbaruiStatusPrinter = perbaruiStatusPrinter;
  root.renderDaftarPrinter = renderDaftarPrinter;
  root.printerAda = printerAda;

  /* ---------- laporan ---------- */
  function renderLaporan() {
    var hariIni = L.ringkasan(txns, L.tanggalHariIni());
    var semua = { omset: 0, laba: 0, jumlah: txns.length, labaAda: false };
    txns.forEach(function (t) {
      semua.omset += L.angka(t.total); semua.laba += L.angka(t.laba);
      if (t.labaAda) semua.labaAda = true;
    });
    el("lap-omset").textContent = L.rupiah(hariIni.omset);
    el("lap-laba").textContent = hariIni.labaAda ? L.rupiah(hariIni.laba) : "—";
    el("lap-jumlah").textContent = hariIni.jumlah + " transaksi";
    /* v1.7.7 — omset hari ini dipisah Tunai vs QRIS. */
    var met = L.ringkasanMetode(txns, L.tanggalHariIni());
    var elMet = el("lap-metode");
    if (elMet) elMet.textContent = "💵 Tunai " + L.rupiah(met.tunaiOmset) + " • 📱 QRIS " + L.rupiah(met.qrisOmset);
    el("lap-omset-semua").textContent = L.rupiah(semua.omset);
    el("lap-laba-semua").textContent = semua.labaAda ? L.rupiah(semua.laba) : "—";
    el("lap-jumlah-semua").textContent = semua.jumlah + " transaksi";
    var menipis = products.filter(function (p) { return L.stokMenipis(p); });
    el("lap-stok-menipis").textContent = menipis.length
      ? menipis.map(function (p) { return p.nama + " (" + L.formatQty(p.stok) + " " + L.satuanLabel(p) + ")"; }).join(", ")
      : "Tidak ada";
    /* v1.5 — Produk Terlaris top 5 (sepanjang waktu; kalau baru 2 yang
       pernah terjual, tampilkan 2 saja) + Rekap Harian. */
    var terlaris = L.produkTerlaris(txns);
    var wadahT = el("lap-terlaris");
    if (wadahT) {
      wadahT.innerHTML = terlaris.length
        ? terlaris.map(function (t, i) {
            return '<div class="baris-rekap"><span>' + (i + 1) + ". " + esc(t.nama) + "</span><b>"
              + L.formatQty(t.qty) + " terjual • " + L.rupiah(t.total) + "</b></div>";
          }).join("")
        : '<p class="kosong">Belum ada yang terjual.</p>';
    }
    var rekap = L.rekapHarian(txns);
    var wadahR = el("lap-rekap");
    if (wadahR) {
      wadahR.innerHTML = rekap.length
        ? rekap.map(function (r) {
            return '<div class="baris-rekap"><span>📅 ' + esc(r.tanggal) + " • " + r.jumlah + ' transaksi</span><b>'
              + L.rupiah(r.omset) + (r.labaAda ? " • Laba " + L.rupiah(r.laba) : "") + "</b></div>";
          }).join("")
        : '<p class="kosong">Belum ada transaksi.</p>';
    }
  }

  /* ---------- mulai ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    muat();
    muatLisensi();
    terapkanLisensi();
    /* v1.4 — printer Bluetooth */
    muatPrinter();
    perbaruiStatusPrinter();
    /* v1.7.7 — gambar QRIS warung */
    muatQris();
    tampilkanPratinjauQris();
    ["kasir", "pilih", "produk", "riwayat", "laporan", "kasbon"].forEach(function (t) {
      el("nav-" + t).addEventListener("click", function () { pindahTab(t); });
    });
    el("btn-pengaturan").addEventListener("click", function () { pindahTab("pengaturan"); });
    el("btn-pilih-produk").addEventListener("click", function () { pindahTab("pilih"); });
    el("btn-lihat-keranjang").addEventListener("click", function () { pindahTab("kasir"); });
    el("cari-pilih").addEventListener("input", function () {
      pilihCari = this.value;
      renderPilih();
    });
    el("btn-scan").addEventListener("click", function () { bukaScan("kasir"); });
    el("btn-tutup-scan").addEventListener("click", tutupScan);
    /* v1.7.7 — tombol lampu flash di modal scan */
    el("btn-flash").addEventListener("click", toggleFlash);
    /* v1.7.7 — pilihan pembayaran Tunai / QRIS di kasir */
    el("btn-metode-tunai").addEventListener("click", function () { pilihMetode("tunai"); });
    el("btn-metode-qris").addEventListener("click", function () { pilihMetode("qris"); });
    /* v1.7.7 — gambar QRIS warung (Pengaturan > Pembayaran QRIS) */
    el("qris-file").addEventListener("change", function () { bacaQris(this.files && this.files[0]); this.value = ""; });
    el("btn-hapus-qris").addEventListener("click", hapusQris);
    /* v1.7.8 — potong gambar persegi (crop) */
    el("crop-viewport").addEventListener("pointerdown", cropMulaiSeret);
    el("crop-viewport").addEventListener("pointermove", cropGerakSeret);
    el("crop-viewport").addEventListener("pointerup", cropAkhirSeret);
    el("crop-viewport").addEventListener("pointercancel", cropAkhirSeret);
    el("btn-crop-kecil").addEventListener("click", function () { cropZoom(0.8); });
    el("btn-crop-besar").addEventListener("click", function () { cropZoom(1.25); });
    el("btn-crop-potong").addEventListener("click", terapkanCrop);
    el("btn-crop-batal").addEventListener("click", tutupCrop);
    /* v1.7.8 — QRIS layar penuh */
    el("qris-gambar-kasir").addEventListener("click", bukaQrisFullscreen);
    el("btn-qris-full-simpan").addEventListener("click", function () { tutupQrisFullscreen(); simpanTransaksi(); });
    el("btn-qris-full-tutup").addEventListener("click", tutupQrisFullscreen);
    /* v1.4-test2 — tombol dialog konfirmasi keluar */
    el("dlg-ya").addEventListener("click", function () { dlgKlik(true); });
    el("dlg-batal").addEventListener("click", function () { dlgKlik(false); });
    el("btn-scan-barcode").addEventListener("click", function () { bukaScan("produk"); });
    el("btn-tambah-barcode").addEventListener("click", function () {
      tambahBarcodeForm(el("f-barcode").value);
    });
    el("btn-sambung-baru").addEventListener("click", sambungProdukBaru);
    el("btn-sambung-batal").addEventListener("click", tutupPanelSambung);
    el("btn-kirim-wa").addEventListener("click", kirimStrukWa);
    /* v1.4 — cetak struk sesudah bayar (Bluetooth bila ada, bila tidak dialog print sistem) */
    el("btn-cetak-struk").addEventListener("click", cetakStrukTerakhir);
    el("btn-tutup-struk").addEventListener("click", function () {
      el("panel-struk").style.display = "none";
      trxTerakhir = null;
    });
    el("diskon").addEventListener("input", function () { formatInputUang(this); renderKeranjang(); });
    el("bayar").addEventListener("input", function () { formatInputUang(this); renderKeranjang(); });
    /* v1.6 — format ribuan di form produk (harga + modal) */
    el("f-harga").addEventListener("input", function () { formatInputUang(this); });
    el("f-hpp").addEventListener("input", function () { formatInputUang(this); });
    /* v1.6 — keyboard tidak menutupi Kembalian + Simpan: sesudah fokus ke
       kolom uang, gulir tombol Simpan ke tampilan (di atas keyboard). */
    ["bayar", "diskon"].forEach(function (id) {
      el(id).addEventListener("focus", function () {
        setTimeout(function () {
          var t = el("btn-simpan");
          if (t && t.scrollIntoView) t.scrollIntoView({ block: "nearest" });
        }, 300);
      });
    });
    el("btn-simpan").addEventListener("click", simpanTransaksi);
    el("btn-bersihkan").addEventListener("click", function () {
      cart = []; el("diskon").value = ""; el("bayar").value = ""; renderKeranjang();
      /* v1.7.7 — keranjang dibersihkan = transaksi baru = kembali ke Tunai. */
      resetMetode();
    });
    el("btn-jml-masuk").addEventListener("click", masukkanJumlah);
    el("btn-jml-batal").addEventListener("click", tutupPanelJumlah);
    el("btn-simpan-produk").addEventListener("click", simpanProdukForm);
    el("btn-batal-edit").addEventListener("click", function () { editId = null; isiForm(null); });
    /* v1.4 — foto produk */
    el("f-foto").addEventListener("change", function () { bacaFoto(this.files && this.files[0]); });
    el("btn-hapus-foto").addEventListener("click", function () {
      formFoto = null;
      el("f-foto").value = "";
      tampilkanPratinjauFoto();
    });
    /* v1.4 — kode barcode internal (KSR-0001, ...) */
    el("btn-buat-kode-internal").addEventListener("click", function () {
      tambahBarcodeForm(L.buatKodeInternal(products));
      toast("Kode internal ditambahkan");
    });
    /* v1.4 — cetak label barcode */
    el("btn-jalankan-cetak").addEventListener("click", jalankanCetak);
    el("btn-tutup-cetak").addEventListener("click", function () { el("cetak-modal").style.display = "none"; });
    /* v1.4 — kunci lisensi */
    el("btn-aktifkan-kode").addEventListener("click", aktifkanKode);
    el("kunci-kode").addEventListener("keydown", function (e) { if (e.key === "Enter") aktifkanKode(); });
    /* v1.8.1 — pindah ke perangkat ini (layar kunci) */
    el("btn-pindah-tampil").addEventListener("click", function () { tampilkanPindah(el("btn-pindah-tampil"), el("pindah-bungkus"), el("kunci-pindah-email")); });
    el("btn-pindah-perangkat").addEventListener("click", pindahPerangkatKunci);
    el("kunci-pindah-email").addEventListener("keydown", function (e) { if (e.key === "Enter") pindahPerangkatKunci(); });
    /* v1.8.0 — lupa kode: kirim ulang kode ke email pembeli */
    el("btn-lupa-kode").addEventListener("click", tampilkanLupaKode);
    el("btn-kirim-ulang").addEventListener("click", kirimUlangKode);
    el("kunci-lupa-email").addEventListener("keydown", function (e) { if (e.key === "Enter") kirimUlangKode(); });
    /* v1.7.3 — masukkan kode dari kartu Lisensi di Pengaturan (URL
       database hardcode; kolom URL dihapus atas perintah ARIFIN). */
    el("btn-aktifkan-kode-pengaturan").addEventListener("click", aktifkanKodePengaturan);
    el("lisensi-kode").addEventListener("keydown", function (e) { if (e.key === "Enter") aktifkanKodePengaturan(); });
    /* v1.8.1 — pindah ke perangkat ini (kartu Lisensi) */
    el("btn-pindah-tampil-pengaturan").addEventListener("click", function () { tampilkanPindah(el("btn-pindah-tampil-pengaturan"), el("lisensi-pindah-bungkus"), el("lisensi-pindah-email")); });
    el("btn-pindah-perangkat-pengaturan").addEventListener("click", pindahPerangkatPengaturan);
    el("lisensi-pindah-email").addEventListener("keydown", function (e) { if (e.key === "Enter") pindahPerangkatPengaturan(); });
    /* v1.8.0 — keluar dari perangkat ini (hanya bila berlisensi kode) */
    el("btn-keluar-perangkat").addEventListener("click", tampilkanModalKeluar);
    el("btn-keluar-ya").addEventListener("click", jalankanKeluar);
    el("btn-keluar-batal").addEventListener("click", tutupModalKeluar);
    /* v1.7.3 — spanduk masa percobaan bisa diketuk: buka Pengaturan,
       gulir ke kartu Lisensi, fokus ke kolom masukkan kode. */
    el("trial-banner").addEventListener("click", function () {
      pindahTab("pengaturan");
      var kartu = el("lisensi-kartu");
      if (kartu && kartu.scrollIntoView) kartu.scrollIntoView();
      var kode = el("lisensi-kode");
      if (kode && kode.focus) kode.focus();
    });
    /* v1.4 — printer Bluetooth (Pengaturan > Printer) */
    el("btn-cari-printer").addEventListener("click", cariPrinter);
    el("btn-cetak-tes").addEventListener("click", cetakTesPrinter);
    el("btn-lupakan-printer").addEventListener("click", lupakanPrinter);
    /* v1.5 — layar sambutan (trial mulai hanya sesudah tombol diketuk) */
    el("btn-sambutan-trial").addEventListener("click", mulaiTrial);
    el("btn-sambutan-kode").addEventListener("click", function () { tampilkanLayarKunci(true); });
    el("btn-kunci-kembali").addEventListener("click", function () { sembunyikanLayarKunci(); terapkanLisensi(); });
    /* v1.5 — cadangan data + ekspor rekap CSV (Pengaturan > Cadangan Data) */
    el("btn-backup-buat").addEventListener("click", buatCadangan);
    el("btn-ekspor-csv").addEventListener("click", eksporRekapCsv);
    el("btn-backup-pulihkan").addEventListener("click", function () { el("file-pulihkan").click(); });
    /* v1.7 — hapus transaksi (modal 3 pilihan) + ingat cadangan 30 hari */
    el("btn-hapus-simpan").addEventListener("click", function () {
      var i = hapusIdx; tutupModalHapus();
      if (i == null) return;
      buatCadangan();   /* cadangan dibuat SEBELUM dihapus, jadi berisi transaksi itu */
      lakukanHapus(i);
    });
    el("btn-hapus-ya").addEventListener("click", function () {
      var i = hapusIdx; tutupModalHapus();
      if (i == null) return;
      lakukanHapus(i);
    });
    el("btn-hapus-batal").addEventListener("click", tutupModalHapus);
    el("btn-cadangan-ya").addEventListener("click", function () { tutupModalCadangan(); buatCadangan(); });
    el("btn-cadangan-nanti").addEventListener("click", tutupModalCadangan);
    /* v1.7.4 — pemberitahuan update (dialog "Ada versi baru") */
    el("btn-update-unduh").addEventListener("click", function () { var t = updateTautan; tutupDialogUpdate(); if (t) bukaTautanLuar(t); });
    el("btn-update-nanti").addEventListener("click", tutupDialogUpdate);
    /* v1.7.5 — pilihan cetak eksplisit (PDF vs Printer Bluetooth) */
    el("btn-cetak-pilih-pdf").addEventListener("click", cetakPilihPdf);
    el("btn-cetak-pilih-bt").addEventListener("click", cetakPilihBluetooth);
    el("btn-cetak-pilih-batal").addEventListener("click", tutupDialogPilihCetak);
    el("btn-riwayat-lebih").addEventListener("click", function () {
      riwayatBatas += RIWAYAT_TAMBAH;
      renderRiwayat();
    });
    perbaruiTeksCadanganTerakhir();
    el("file-pulihkan").addEventListener("change", function () {
      pulihkanDariBerkas(this.files && this.files[0]);
      this.value = "";
    });
    /* v1.5 — kasbon */
    el("btn-tambah-kasbon").addEventListener("click", tambahKasbonForm);
    /* ukuran huruf: terapkan pilihan tersimpan, lalu dengarkan perubahan */
    var hurufTersimpan = "normal";
    try { hurufTersimpan = localStorage.getItem(KEY_HURUF) || "normal"; } catch (e) {}
    terapkanHuruf(hurufTersimpan);
    var radios = document.querySelectorAll('input[name="huruf"]');
    for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener("change", function () { terapkanHuruf(this.value); });
    }
    /* haptic: getar halus tiap ketukan tombol (bukan tiap render) */
    document.addEventListener("click", function (e) {
      if (e.target && e.target.closest && e.target.closest("button")) getar();
    });
    isiForm(null);
    renderKasir();
    pindahTab("kasir");
  });

})(typeof window !== "undefined" ? window : this);
