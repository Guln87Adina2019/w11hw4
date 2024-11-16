// let num = +prompt("Сан жазыңыз")
// let small=0;
// let lar=0;
// for(let i=1;i)

// Қолданушыдан оң сан алу
let n = prompt("сан енгізіңіз:");
n = parseInt(n);

if (n > 0) {
    let smallest = null;
    let largest = null;

    // 1-ден n-ге дейінгі 5-ке бөлінетін сандарды тексеру
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0) {
            // Ең кішісі
            if (smallest === null) {
                smallest = i;
            }

            // Ең үлкені
            largest = i;
        }
    }

    // Нәтижелерді шығару
    if (smallest !== null && largest !== null) {
        console.log("Ең кіші 5-ке бөлінетін сан:", smallest);
        console.log("Ең үлкен 5-ке бөлінетін сан:", largest);
    } else {
        console.log("5-ке бөлінетін сандар жоқ.");
    }
} else {
    console.log("Сіз оң сан енгізуіңіз керек.");
}