const sample = [5, 10, 20, 50, 100, 200, 500];

function moneyATM(money) {
    const arr = [];
    let i = sample.length;
    while (
        i >= 0 && (money == 0 || money / sample[0] > 1)
    ) {
        if (money / sample[i] >= 1) {
            money -= sample[i];
            arr.push(sample[i])
        } else i--
    }
    return arr
}

console.log(moneyATM(1904))