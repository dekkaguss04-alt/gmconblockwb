// =========================
// FUNGSI BUKA POPUP 2 DATA
// =========================

function bukaPopup(

    produk,

    ukuran1,
    kirim1,
    ambil1,

    ukuran2,
    kirim2,
    ambil2

){

    // Menampilkan popup
    document.getElementById("popupHarga").style.display = "flex";

    // Mengubah judul popup
    document.getElementById("judulProduk").innerHTML = produk;

    // Mengisi isi tabel
    document.getElementById("isiHarga").innerHTML = `

        <tr>
            <td>${ukuran1}</td>
            <td>${kirim1}</td>
            <td>${ambil1}</td>
        </tr>

        <tr>
            <td>${ukuran2}</td>
            <td>${kirim2}</td>
            <td>${ambil2}</td>
        </tr>

    `;
}


// =========================
// FUNGSI BUKA POPUP 1 DATA
// =========================

function bukaPopupSingle(

    produk,
    ukuran,
    kirim,
    ambil

){

    // Menampilkan popup
    document.getElementById("popupHarga").style.display = "flex";

    // Mengubah judul popup
    document.getElementById("judulProduk").innerHTML = produk;

    // Mengisi isi tabel
    document.getElementById("isiHarga").innerHTML = `

        <tr>
            <td>${ukuran}</td>
            <td>${kirim}</td>
            <td>${ambil}</td>
        </tr>

    `;
}


// =========================
// FUNGSI TUTUP POPUP
// =========================

function tutupPopup(){

    // Menyembunyikan popup
    document.getElementById("popupHarga").style.display = "none";
}
