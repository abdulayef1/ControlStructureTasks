//Task-1: 1-10 aralığında olan cüt ədədlərin ədədi ortasını tapan alqoritm yazın.
let sumOfEven=0;
let numberOfEven=0;

for (let i=1; i<10; i++) {
    if(i%2==0){
    sumOfEven=i+sumOfEven;  
    numberOfEven++;
    }  
}
console.log(sumOfEven/numberOfEven);