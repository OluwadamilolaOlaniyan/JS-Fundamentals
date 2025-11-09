const firstArg = process.argv[2];

const numValue = Number(firstArg);

if (Number.isInteger(numValue)) {
    console.log(`My number: ${numValue}`);
} else {
    console.log("Not a number");
}