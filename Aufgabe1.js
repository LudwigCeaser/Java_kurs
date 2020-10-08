var MarksHeight = prompt('Mark please imput your hight ');
var MarksMass   = prompt('markPlease input your mass');

var JohnsHeight = prompt('John Please imput your hight ');
var johnsMass   = prompt('John Please input your mass');

console.log("Marks Data "+MarksHeight+"cm "+MarksMass+"kg  "+"Johns data"+JohnsHeight+"cm "+johnsMass+"kg");

var BmiMark  = MarksMass/(MarksHeight/100 * MarksHeight/100);
var BmiJohn  = johnsMass/(JohnsHeight/100 * JohnsHeight/100);

alert("Johns BMI ist: "+BmiJohn+" "+"Marks BMi ist: "+BmiMark);

var HigherBmi = BmiMark > BmiJohn;

alert("does Mark has a higher BMI then John? "+" "+HigherBmi);