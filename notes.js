
/*var firstName = 'Paul';
console.log(firstName);

var Lastname = "Smith";

var age = 38;

console.log(firstName,Lastname,age)

var fullage = true;
console.log(fullage)

var job;
console.log(job);

job = "Teacher";

console.log(job)
*/
/*
var firstName = "John";
var age =28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = "Teacher";
isMarried = false;

console.log(job +" "+isMarried);
*/
/*var thatInfo = prompt('Give me tha infos');

alert("du sagst zu mir :,,"+thatInfo+"°°"+ " "+"du kleiner hund sowas sagt man nicht ")
*/
/*var AgeUser1 = prompt('Give me the name of user 1');
var AgeUser2 = prompt('Give me the name of user 2');

console.log(AgeUser1+" "+ AgeUser2);

var whoIsOlder = AgeUser1 < AgeUser2

alert("der fakt das benutzer 1 jünger ist als user 2 ist ;"+whoIsOlder)
*/
/*var now = 2020;
var BornJohn = 1989;
var fullAge = 18;

var Fullage = now - BornJohn >= fullAge;

alert(Fullage )*/
/*var MarksHeight = prompt('Mark please imput your hight ');
var MarksMass   = prompt('markPlease input your mass');

var JohnsHeight = prompt('John Please imput your hight ');
var johnsMass   = prompt('John Please input your mass');

console.log("Marks Data "+MarksHeight+"cm "+MarksMass+"kg  "+"Johns data"+JohnsHeight+"cm "+johnsMass+"kg");

var BmiMark  = MarksMass/(MarksHeight/100 * MarksHeight/100);
var BmiJohn  = johnsMass/(JohnsHeight/100 * JohnsHeight/100);

alert("Johns BMI ist: "+BmiJohn+" "+"Marks BMi ist: "+BmiMark);

var HigherBmi = BmiMark > BmiJohn;

alert("does Mark has a higher BMI then John? "+" "+HigherBmi);*/// BMI Aufgabe(1)

/*var firstName ='John';
var civilStatus ='single';

if(civilStatus === "married"){
    console.log(firstName+ " is married")
}else {
    console.log(firstName+" Will hopefully marry soon")
}*/ //If statement
/*var InputName = prompt("Insert your name");
var InputAge = prompt("Insert your age");

if (InputAge < 12 )
    {
        console.log(InputName+" "+"ist ein kleines kiddy");
    }
else if (InputAge >= 13 && InputAge <= 20)
    {
        console.log(InputName+" "+"ist ein Teenager");
    }
else if (InputAge >= 20 &&  InputAge <=30)
    {
        console.log(InputName+" "+"is a jung man");
    }
    *///Boolean logic 

/*var firstName = "John";
var age       = 16;

var whatCanHeDrink = age <= 18 ? "He has to drink juice" : " He can drink beer"
alert(whatCanHeDrink);*/// ternary operator

/*var job =prompt("What is your job");
var firstName = "john";
switch (job)
    {
            case"Teacher":
                console.log(firstName + " Knows how to code");
                break;
            
            case"Driver":
                console.log(firstName + " Knows how to Drive");
                break;
            
            case"Designer":
                console.log(firstName + " Knows how to Design");
                break;
            
            default:
                console.log(firstName + " does smth else");
    } */// Switch condition
    
/*var JohnsTeam = (89 + 120 + 103)/3;
var MikesTeam = (116 + 94 + 123)/3;
var FrauenSolltenKeinenSportMachen = (97 + 134 + 105)/3;

console.log(JohnsTeam,MikesTeam,FrauenSolltenKeinenSportMachen);

if (JohnsTeam == MikesTeam && MikesTeam == FrauenSolltenKeinenSportMachen){
    
    console.log("It was a tie");
}
else if(JohnsTeam > MikesTeam && JohnsTeam >FrauenSolltenKeinenSportMachen){
    console.log("Johns team wins in the average more");
}
else if(FrauenSolltenKeinenSportMachen > JohnsTeam && FrauenSolltenKeinenSportMachen > MikesTeam){
    console.log("Auch wenn Mary gewonnen hat ist das Frauen Basketball gewesen und zählt nicht")
}
else {
    console.log("Mikes team hat gewonnen")
}*/// Aufgabe 2 ("Basketball spiel")

/*function caculateAge(birthyear){
    return 2020 - birthyear;
} //Funktionen
var ageInput = caculateAge(1999);
console.log(ageInput);*/

function rent (ageInput){
    
    var currentAge = 2020 - ageInput;
    var YearsTilrent = 64 - currentAge;
    return YearsTilrent;
}

var Ageinput = prompt("Bitte gib dein geburtsjahr ein")

    var Years_til_rent_User =rent(Ageinput);
console.log(Years_til_rent_User);
