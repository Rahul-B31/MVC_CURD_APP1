const p1 = new Promise(function (resolve,reject){
   setTimeout(()=>{
    resolve("Resolving the Promise p1")
   },5000);
})

const p2  = new Promise(function (resolve,reject){
     setTimeout(()=>{
        resolve("Resolving the Promise p2");

     },10000)
})


async function handlepromise(){
   console.log("Staring the handlepromise");

   // when the await is occure the JS Engine suspend the execution of handlePromise
   const val  = await p1;
   console.log("The promise p2 is resolve with value ",val);

   let res =  fetch("https://jsonplaceholder.typicode.com/todos/1")
   .then(function (res){
        return res.json();
   })
   .then(function (data){
         console.log(data)
   })

   let response = await  fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data =    await response.json();
    console.log(data)            
     
  
   
   const val2 = await p2;
   console.log("The Promise p2 is resolve with value ",val2);
}
// 
handlepromise();
 // When the gobal piece of code complete then the promise is resume its execution....
console.log("The Gobal piece of code 1")
console.log("The Gobal piece of code 2")
console.log("The Gobal piece of code 3")
console.log("The Gobal piece of code 4")

