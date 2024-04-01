const myArray=[1,2,3,4,5,6]
//console.log(myArray.length)
myArray.push(7);
//console.log(myArray)
myArray.pop()
//console.log(myArray)
myArray.forEach((item,index,array)=>{
    //console.log(`In arrray on position ${index} the element  is ${item} and total array is ${array}`)
})
for(i=0;i<myArray.length;i++){
    //console.log(myArray[i])
}
while(myArray.length){
   // console.log(myArray) 
    break;
}

for(let i in myArray){
   //console.log([i])
}
for (let i of myArray){
    //console.log(myArray[i])
}





let answer=

myArray.includes(6)
if(answer==true){
   // console.log("The element is present ")
}
else{
    //console.log(`The element is not present `)
}

let newArray=[99,77,0,4,55]
//console.log(newArray.sort());

let filterArray=newArray.filter((num)=>{
return num>10
})
//console.log(filterArray)

var fruits = ["Apple", "Banana", "Orange"];
var result = fruits.join();
//console.log(result); 

// ARRAY WITH IN THE ARRAYS 

let mergedArr=[1,2,[3,4],4,5,[6,7],[8.9,10]]
let flatArr=mergedArr.flat(Infinity)
//console.log(flatArr)

//console.log(typeof flatArr)


// MERGE TWO ARRAYS USING REST OPERATOR

const Heros=["shaktiman","Batman","superman"];
const marvel=["ironman","Captain","Thor"];
const AllHeros=[...Heros,...marvel]
//console.log(AllHeros)
//console.log(typeof AllHeros)

let name="Kabir"
let nameArr=Array.of(name)
//console.log(nameArr)
//console.log(typeof nameArr)
//console.log(Array.isArray(name))
//console.log(Array.isArray(nameArr))


//Objects 
const mySym = Symbol("Key1");
const jsUser={
    username:"Kabir",
    age:19,
    [mySym]:"Key1",
    location:"Hyderabad",
    isLoggedIn: true
    
} 
/*console.log(jsUser.age)
console.log(jsUser[mySym])
console.log(jsUser)
*/
jsUser.fnc=function (){
    console.log("hello js User")
}

console.log(jsUser.fnc())