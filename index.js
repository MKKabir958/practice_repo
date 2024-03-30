let Arr = [1, 2, 3, 4, 5]
for (i = 0; i < Arr.length; i++) {
    //console.log(`The array  ${i}  element is ${Arr[i]}`)
}


Arr.forEach((element) => {
    //console.log(element*element)
})

let myName = "Kabir "

let trimmed = myName.trim()
//console.log(trimmed,trimmed.length)
let nameArray = Array.from(trimmed)
/*console.log(typeof trimmed)
console.log(nameArray)
console.log(typeof nameArray)
console.log(typeof myName)*/



for (let i of Arr) {
    //console.log(`The position of ${i} is ${Arr.indexOf(i)}`)

}

for (let i in Arr) {
    //console.log(Arr[i])
}

//. ARRAY MAP METHOD 

let newArray = Arr.map((value, index, array) => {
   // console.log(value,index,array) 
    return value + 1;
})
//console.log(newArray)

// ARRAY FILTER METHOD

let filterArray = Arr.filter((value, index, array) => {
    //console.log(value,index,array)
    return value < 3;

})
//console.log(filterArray)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let filterBooks=books.filter((bk)=>{
bk.genre=='History'
})

let filtered = books.filter((bk)=>{
   return  bk.edition>2004;

})
//console.log(filtered)
//console.log(filterBooks)

let publishFilter=books.filter((bk)=>{

    return bk.publish>=2000 && bk.genre=='History';
})
if(publishFilter==""){
   // console.log("The book data is not present ")
}
else{
//console.log(publishFilter)
}



//ARRAY REDUCE METHOD

const red_func = (h1, h2) => {
    return h1 + h2;
}

let red_arr = Arr.reduce(red_func)

//console.log(red_arr)

// FUNCTION TO CALCULATE CART PRICE IN E COMMERCE APPLICATION
//USING REST OPERATOR .....

function calculateCartPrice(...value){
    return value;
}

let CCP=
calculateCartPrice(500,2000,3000,100,800) 
//console.log(CCP)
let sum=0;

CCP.forEach((element)=>{


sum+=element;
})
//console.log(sum)
//console.log(typeof CCP)


//ARROW FUNCTION
 
const arrowFunction = (num1,num2)=>
(num1+num2);


//console.log(arrowFunction(3,4))


// IIFE :- IMMEDIATELY INVOKED FUNCTION EXPRESSION

/*
(function chai(){
    console.log("DB CONNECTED");
})();
 */
//(()=>(console.log("DB 2 CONNECTED")))();

/*( (num1,num2)=> ( 
    console.log(num1+num2)
))(3,4);*/

//((num1,num2)=>(console.log(num1+num2)))(2,2);


const myObj ={
    username:"Kabir",
    password:123456
}
//console.log(typeof myObj)

