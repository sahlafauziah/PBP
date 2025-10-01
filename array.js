let mahasiswa = ["sahla", "Azka", "Pirni", "Divia", "Risti"];

console.log("Array awal:");
for (let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}

mahasiswa.push("Sovi");

mahasiswa.shift();

console.log("Array setelah dimodifikasi:");
for (let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}