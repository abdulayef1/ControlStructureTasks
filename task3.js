let givenNumber ,numberOfDivisors;

givenNumber = 4;
numberOfDivisors = 0;	

for (let i = 2; i < givenNumber; i++)
{
	if (givenNumber%i==0)
	{
		numberOfDivisors++;
        console.log("murekkeb ededdir");
		break;
	}
}
if (numberOfDivisors==0||givenNumber==1||givenNumber==2)
{
    console.log("sade ededir");
}