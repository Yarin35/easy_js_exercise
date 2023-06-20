const numbers = ['0', '789', '15', '81', '-5'];

console.log(find_max(numbers));

function find_max(numbers)
{
    let max = 0;

    for (let i = 0; i < numbers.length; i ++)
        if (max < parseInt(numbers[i]))
            max = numbers[i];
    
    return max;
}