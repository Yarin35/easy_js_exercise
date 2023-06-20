const readline = require('readline');

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readl.question("Choose a number: ", (number) => {
    if (number)
        is_prime(number)
    else
        readl.close();
});

function is_prime(number)
{
    for (let i = 2; i < parseInt(number); i ++)
        if (number % i === 0) {
            console.log("Erh it's not a prime number. :[");
            readl.close();
            return;
        }
    console.log("Well it's a prime number :()");
    readl.close();
    return;
};