let studentScore = [
    {
        name : 'Andi',
        score : 90
    },
    {
        name : 'Rudi',
        score : 80
    },
    {
        name : 'Dira',
        score : 100
    }
];

let maxScore = 0;
let topStudent = ' ';

for (let i = 0; i < studentScore.length; i++) {
    if (studentScore[i].score > maxScore) {
        maxScore = studentScore[i].score;
        topStudent = studentScore[i].name;
    }
}

console.log(`Siswa dengan nilai tertinggi adalah ${topStudent} dengan nilai ${maxScore}`);