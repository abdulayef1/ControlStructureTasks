//Task-2: Ədədin mərtəbələrinin cəmini tapan alqoritm (məsələn: 123 - 1+2+3)
let number=123012;
let digit=0;
let sumOfDigit=0;

while(number>=1){
digit=number%10;
sumOfDigit=digit+sumOfDigit;
number=(number-digit)/10
}
console.log(sumOfDigit);