const array = "apple, 25, bee, 26, bee, 25, apple, bee, bee, bee";

let newArray = del_dup(array);
console.log(`Given array is ${array}`);
console.log(`Cleaned array is ${newArray}`);

function del_dup(array)
{
    const elements = array.split(/[ ,]+/);
    let newArray = "";

    for (let i = 0; i < elements.length; i ++)
        if (isNew(elements, elements[i], i)) {
            newArray += elements[i];
            newArray += ", ";
        }
    newArray = newArray.slice(0, -2);
    return newArray;
}

function isNew(elements, element, index)
{
    index --;
    while (index >= 0) {
        if (elements[index] === element)
            return false;
        index --;
    }
    return true;
}