//  creating a promise 

function createPromiseWithLoop()
{
       return new Promise(function (resolve,reject){

        //Time Consuming task
        for(let i=0;i<1000000000;i++);
        let num= Math.floor(Math.random()*10)
        if(num % 2==0){
            // if the random number is even we fulfilled
            resolve(num)
        }
        else{
            // if the random is odd we reject
            reject(num)
        }


       });

}
function createPromiseWithSetTimeOut()
{
       return new Promise(function (resolve,reject){
        console.log("The Control Enter into the Promise constructor handler")

        //Time Consuming task
        setTimeout(function (){

            let num= Math.floor(Math.random()*10)
            if(num % 2==0){
                // if the random number is even we fulfilled
                console.log("The Number is Even")
                resolve(num)
            }
            else{
                // if the random is odd we reject
                console.log("The Number is Odd")
                reject(num)
            }

        },10000);

           
       });

}
// let x = createPromiseWithLoop();
let x = createPromiseWithSetTimeOut();
console.log("wating for the promise to complete")
console.log("Currently The promise object look like",x)
x.then(
   function fulfillmentHandler(value){
       console.log("The promise is fulfill with the value",value)
   },
   

)

// console.log(x)



//  function setCanselableTimeOut(fun,delay){
//       let id = setTimeout(fun,delay);
//       return function cancel(){
//            clearTimeout(id)
//       }
// }
// const cansel =  setCanselableTimeOut(()=>{
//     console.log("hiii")
// },20000)

// cansel()



