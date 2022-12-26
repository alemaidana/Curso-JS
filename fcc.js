// let nums = [1,2,3,4,5];

// function modifyArray(nums) {
    
//     const array = nums.map( number => number % 2 == 0 ? number * 2 : number *3);

//     return array;
// }

// const array_solved = modifyArray(nums);

// console.log(array_solved);


const objects = [
{x : 5,y : null},
{x : 1,y : 1},
{x : 2,y : 3},
{x : 3,y : 3},
{x : 3,y : 4},
{x : 4,y : 5}
];

function getCount(objects) {

let count = 0;

objects.forEach(element => element.x == element.y ? count++ : false);

return count;
    
}

console.log(getCount(objects));