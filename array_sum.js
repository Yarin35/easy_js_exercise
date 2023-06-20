

const numbers = ['0', '5', '7'];
console.log(array_sum(numbers));


function array_sum (nums) 
{
    let sum = 0;

    for (let i = 0; i < nums.length; i ++)
        sum += parseInt(nums[i]);
    return sum;
};


