
const number = 4;
console.log(factorial(number));


function factorial(number) 
{
    let result = 1;
    let index = 2;

    while (index <= number)
        result *= index ++;
    return result;
}