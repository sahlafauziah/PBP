const prompt = require("prompt-sync")({ sigint: true });

function konversiNilai(nilai) {
  if (nilai >= 85 && nilai <= 100) {
    return "A , Amazing! Pertahankan prestasimu.";
  } else if (nilai >= 70 && nilai < 85) {
    return "B , Good Job! Tingkatkan lagi ya.";
  } else if (nilai >= 55 && nilai < 70) {
    return "C , Cukup, masih bisa lebih baik.";
  } else if (nilai >= 40 && nilai < 55) {
    return "D , Perlu usaha lebih keras.";
  } else if (nilai >= 0 && nilai < 40) {
    return "E , Jangan menyerah, terus belajar!";
  } else {
    return " Nilai tidak valid!";
  }
}

let input = prompt("Masukkan nilai : ");
let nilai = parseInt(input);

let hasil = konversiNilai(nilai);
console.log(" Hasil konversi: " + hasil);