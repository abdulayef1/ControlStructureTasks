let givenNumber, remainNumber,reverseNumber;
givenNumber = 129821;
reverseNumber = 0;

for (let i = givenNumber; i >= 1 ; i=i/10)
{
    remainNumber = i % 10;
    i=i-remainNumber;
    reverseNumber = (remainNumber + reverseNumber) * 10;
    
}
reverseNumber = reverseNumber / 10;


if (reverseNumber == givenNumber)
{
    console.log("palindrom");
}
else
{
    console.log("palindrom deyil");
}