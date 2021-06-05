const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
let currLine = 0;

rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    main();
});

const read = () => {
    return input[currLine++];
};

const readArr = () => {
    return input[currLine++].split(" ").map(e => parseInt(e));
};

const main = () => {

    const tc = parseInt(read());
    let i = 0;
    while (i < tc) {

        const n = parseInt(read());
        const arr = readArr();

        // To print with \n
        console.log(n);
        console.log(arr);

        // To print without \n
        // Make sure you pass the argument as a string
        rl.output.write(`${n} `);
        rl.output.write(`${arr}`);

        i++;
    }

};