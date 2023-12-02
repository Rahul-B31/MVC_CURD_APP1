// In the iterator we are do the delclartive style of programming 

// Custom iterator
function fetchNextElement(array)
{
     index = 0;

     function next(){

        if(index==array.length){
            return {value:undefined,done:true}
        }

          const ele = array[index++];
          return {value:ele,done:false};
     }
     return {next}

}


arr = [2,34,5,4,4,3,22];

// getting the iterator
iterator =  arr[Symbol.iterator]();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// When we compute all the value it return the object with value as Undefined and done is true
 console.log(iterator.next())


// Fetching the value using custom iterator 
  const automaticfecther =   fetchNextElement(arr);
  console.log(automaticfecther.next());
  console.log(automaticfecther.next());
  console.log(automaticfecther.next());
  console.log(automaticfecther.next());



