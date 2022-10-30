// See https://aka.ms/new-console-template for more information
double givenNumber = 4;
double i = 1;

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
    Console.WriteLine("2 nin quvvetidir");
}
else
{
    Console.WriteLine("2 nin quvveti deyil");
}




