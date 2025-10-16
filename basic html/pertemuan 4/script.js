// Ambil semua tombol yang memiliki class "filter-btn"
// (All, Desain Grafis, Desain 3D, Fotografi)
const semua_tombol = document.querySelectorAll(".filter-btn");
const semua_gambar = document.querySelectorAll(".gambar");

//perulangan 
//karna setiap button harus bisa di klik, dan menjalankan fungsi yg sama
//maka kita gunakan perulangan
semua_tombol.forEach((semua_tombol) => {
    tombol_satuan.addEventListener("click", () => {
        //ubah tampilan active
        //hapus class "active" pada semua tombol
        semua_tombol.forEach((btn) => btn.classList.remove("active"));

        //tambahkan class active pada tombol yang sedang dipilih
        tombol_satuan.classList.add("active");

    });
});

//bagian 2 : ambil kategori dari tombol yang di klik 
//contoh: <botton data-filter="fotografi"> -> nilainya "fotografi'" 
const filter = tombol_satuan.getAttribute("data-filter");

//bagian 3 : tampilkan atau sembunyikan item berdasarkan filter --- 

semua_gambar.forEach((gambar_satuan) => {
    if (filter === "all" || gambar_satuan.classList.contains
        (filter)){
    // gambar akan tertampil 
    gambar_satuan.style.display = "block";
} else {
    gambar_satuan.style.display = "none"

}
});