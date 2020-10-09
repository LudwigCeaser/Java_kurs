//eingabe user daten1
var johnDate = {
    
    askData: function(){
    
    this.name = prompt("Please enter your name");
    this.height = prompt("please enter your hight");
    this.weight = prompt("please enter your weight");
}
}

johnDate.askData();

//eingabe user daten 2

var markDate = {
    
    askData: function(){
    
    this.name   =  prompt("Please enter your name");
    this.height = prompt("please enter your hight");
    this.weight = prompt("please enter your weight");
}
}

markDate.askData();

// callculate Bmi

 function Paul (height , weight){
    
    var  BMiresult = weight/(height/100 * height/100);
    return BMiresult;
}
//echo result 
var Result1 = Paul (johnDate.height,johnDate.weight);
var Result2 = Paul (markDate.height,markDate.weight);
console.log(johnDate.name+" hat ein BMI von: "+Result1+" "+markDate.name+" hat ein BMI von: "+Result2);

if (Result1 < Result2){
    console.log(markDate.name+"hat den Höheren BMI mit : " +Result2);
}
else {
    console.log(johnDate.name+"hat den Höheren BMI mit : " +Result1);
}

//Adding to data list 1
johnDate.Bmi = Result1;
markDate.BMi =Result2;

// Print out  end data 

console.log(johnDate);
console.log(markDate);