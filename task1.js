let givenNumber = 0.125;
let i = 1;

if (givenNumber>=1)
{
    while (i < givenNumber)
    {
        i = i*2;
    }
}else if (givenNumber<1 && givenNumber>0)
{
    while (i > givenNumber)
    {
        i =  i/2;
    }
}


if (i == givenNumber)
{
console.log("2 nin quvvetidir");
}
else
{
    console.log("2 nin quvveti deyl");
}
