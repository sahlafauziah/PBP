let nilai = 88; 
let grade;

if (nilai >= 80 && nilai <= 100) {
    grade = "A";
} else if (nilai >= 70) {
    grade = "B";
} else if (nilai >= 60) {
    grade = "C";
} else if (nilai >= 50) {
    grade = "D";
} else {
    grade = "E";
}

console.log(`Nilai: ${nilai}, Grade: ${grade}`);
