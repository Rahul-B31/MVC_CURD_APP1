// what is generator :
// the generator allow you to define a iterative  algorithm by writting a single fuction execution is not contineous 


// When we call the generator do not execute initialy insted of they return of iterator we called it as generator


function* fetchNextElement()
{
     console.log("Entering into the generator");
     yield 1;
     console.log("Middle in generator") 
     yield 10;
     const x  = 10
    let y = x + (yield 10);
    console.log("The value of x is ",y);


}

//when we call this it give us the special iterator we called as generator


itr = fetchNextElement();

// when we call the next fuction it stop its execution when yield keyword is occure 
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())

// The value is set in expresion where we stop the execution.  
console.log(itr.next(100))