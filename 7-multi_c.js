const numOccurrences = Number (process.argv[2]);
if (Number.isInteger(numOccurrences)) {
    let i = 0;
    while (i < numOccurrences) {
        console.log("C is fun");
        i++;
    }
} else {
    console.log("Missing number of occurrences");
}

