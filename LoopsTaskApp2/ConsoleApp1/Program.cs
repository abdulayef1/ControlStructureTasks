// See https://aka.ms/new-console-template for more information
int givenNumber, remainNumber,reverseNumber;
givenNumber = 23232;
reverseNumber = 0;

for (int i = givenNumber; i >= 1 ; i=i/10)
{
    remainNumber = i % 10;
    reverseNumber = (remainNumber + reverseNumber) * 10;
}
reverseNumber = reverseNumber / 10;

if (reverseNumber == givenNumber)
{
    Console.WriteLine("palindrom");
}
else
{
    Console.WriteLine("palindrom deyil");
}