const readline = require('readline');

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


readl.question("Enter a word: ", (word) => {
    if (word)
        is_palindrome(word)
    else
        readl.close();
});


function is_palindrome(word)
{
    let rev_word = "";

    for (let i = word.length; i >= 0; i --)
        rev_word += word.charAt(i);
    
    console.log(`you entered ${word} and reversed it's ${rev_word}`);
    if (rev_word === word)
        console.log("It's a palindrome :)");
    else
        console.log("It's not a palindrome :(");
    readl.close();
}