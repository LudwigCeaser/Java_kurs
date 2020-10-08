var JohnsTeam = (89 + 120 + 103)/3;
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
}