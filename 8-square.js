const numOccurrences = Number(process.argv[2]);

if (Number.isInteger(numOccurrences) && numOccurrences > 0) {
    for (let i = 0; i < numOccurrences; i++) {
        let row = '';
        for (let j = 0; j < numOccurrences; j++) {
            row += 'X';
        }
        console.log(row);
    }
} else {
    console.log("Missing size");
}
