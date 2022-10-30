// See https://aka.ms/new-console-template for more information
int givenNumber ,numberOfDivisors;

givenNumber = 13;
numberOfDivisors = 0;	

for (int i = 2; i < givenNumber; i++)
{
	if (givenNumber%i==0)
	{
		numberOfDivisors++;
		Console.WriteLine("murekkeb ededdir");
		break;
	}
}
if (numberOfDivisors==0||givenNumber==1||givenNumber==2)
{
	Console.WriteLine("sade ededir");
}