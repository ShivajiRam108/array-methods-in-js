console.log("..................(Q -1)....................")
 var numbers = [1, 2, 3];
numbers.push(4);                        // [1,2,3,4]  lenght =4
console.log(numbers); 

console.log("..................(Q -2)....................")

var fruits = ["apple", "banana", "cherry"];
var removed = fruits.pop();                      //['apple', 'banana']   lenght =2
console.log(fruits, removed);

console.log("..................(Q -3)....................")
           
var numbers = [5, 10, 15];
var removed = numbers.shift();                   //[10,15]     lenght =2
console.log(numbers, removed);          

console.log("..................(Q -4)....................")

var animals = ["cat", "dog"];
var length = animals.unshift("lion");            //[ 'lion','cat','dog'] lenght=3
console.log(animals, length);

console.log("..................(Q -5)....................")

var data = [100, 200, 300, 400];
data.length = 2;                                   //[100,200]   lenght =2
console.log(data);

console.log("..................(Q -6)....................")

var value = [1, 2, 3];
var isArray = Array.isArray(value);                  //true
console.log(isArray);

console.log("..................(Q -7)....................")

var arr1 = [1, 2];
var arr2 = [3, 4];
var result = arr1.concat(arr2);                          //[1,2,3,4]  lenght =4
console.log(result);

console.log("..................(Q -8)....................")
                 
var letters = ["a", "b", "c"];
var count = letters.push("d", "e");                      //["a","b","c","d","e"]  lenght =5
console.log(letters, count);

console.log("..................(Q -9)....................")

var nums = [1, 2, 3, 4];
nums.pop();
nums.shift();                                                //[2,3]  lenght =2
console.log(nums);

console.log("..................(Q -10)....................")

var arr = [1, 2, 3];
var length = arr.unshift(0);                                //[0,1,2] 4 lenght=3
arr.pop();
console.log(arr, length);

console.log("..................(Q -11)....................")

var items = ["pen", "pencil", "eraser"];
var length = items.push("sharpener");                         //["pen","pencil","eraser","sharpener"]  lenght=4
console.log(items, length);

console.log("..................(Q -12)....................")

var nums = [10, 20, 30];
nums.length = 5;                                           //[10,20,30,  ,   (two empty arrays)] lenght=5
console.log(nums);

console.log("..................(Q -13)....................")

var fruits = ["mango", "apple"];
fruits.shift();
fruits.push("orange");                                       //["apple",orenge"] lenght=2
console.log(fruits);

console.log("..................(Q -14)....................")

var arr = [1, 2, 3];
arr.pop();
arr.unshift(0);                                          //[0,1,2]  lenght=3
console.log(arr);

console.log("..................(Q -15)....................")


var letters = ["x", "y"];
letters.unshift("w");                                    //["w","x","y","z"]  lenght=4
letters.push("z");
console.log(letters);
console.log("..................(Q -16)....................")

var values = [];
values.push(1);
values.pop();                                             //[]   lenght=0
console.log(values);

console.log("..................(Q -17)....................")
            
var nums = [100];
nums.unshift(50);                                           //[50]    lenght=1
nums.pop();
console.log(nums);

console.log("..................(Q -18)....................")

var arr1 = ["a"];
var arr2 = ["b", "c"];
var combined = arr1.concat(arr2);                            //["a","b","c"]  lenght =3
console.log(combined);

console.log("..................(Q -19)....................")

var nums = [5, 10];
nums.push(15);
nums.shift();                                                 //[10,15]    lenght =2
console.log(nums);

console.log("..................(Q -20)....................")

var data = ["x", "y"];
data.unshift("z");
data.pop();                                                      //["z","x"]   lenght =2
console.log(data);

console.log("..................(Q -21)....................")

var arr = [];
arr.push(1, 2);
arr.pop();                                                     //[1]  lenght =1
console.log(arr);

console.log("..................(Q -22)....................")

var arr = ["a", "b", "c"];
arr.pop();
arr.push("d");                                                 //["a","b","d"]  lenght =3
console.log(arr);

console.log("..................(Q -23)....................")

var arr = ["x"];
arr.unshift("y");
arr.push("z");                                              //["x","z"]    lenght =2
arr.shift();
console.log(arr);

console.log("..................(Q -24)....................")

var arr = ["1"];
arr.unshift("2", "3");                                      //["2","3","1"]  lenght =3
console.log(arr);

            
console.log("..................(Q -25)....................")

var arr = [10];
arr.push(20, 30);                                    //[20,30]   lenght =2
arr.shift();
console.log(arr);

console.log("..................(Q -26)....................")

var arr = [];
arr.unshift("a");
arr.push("b");                                             //["c","a","b"]   lenght =3
arr.unshift("c");
console.log(arr);

console.log("..................(Q -27)....................")

var arr = ["1"];
arr.pop();
arr.unshift("2");                                       //["2"]  lenght =1
console.log(arr);


console.log("..................(Q -28)....................")

var nums = [5];
nums.push(10, 15);
nums.length = 2;                                       //[5,10]  lenght =2
console.log(nums);

console.log("..................(Q -29)....................")

var arr = ["a", "b", "c"];
arr.pop();
arr.length = 5;                                       //["a","b", (three empty arrays)]  lenght =5
console.log(arr);

console.log("..................(Q -30)....................")

var arr = ["p"];
arr.push("q");
arr.unshift("r");
arr.shift();                                            //["p"]  lenght =1
arr.pop();
console.log(arr);