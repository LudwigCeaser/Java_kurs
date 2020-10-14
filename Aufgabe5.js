var johnBills =[124,48,268,180,42];
var johntips = [0.20,0.15,0.10];
var johnCondition =[50,200]

var markBills =[77,375,110,45];
var markTips  =[0.20,0.10,0.25];
var markCondition =[100,300];
i = 0;

function calc(restaurants_Bills, tips, userCondition){
    
    if (restaurants_Bills < userCondition[1]){
        
        var tip1 = restaurants_Bills *tips[0];
        return tip1;
    }
    else if (restaurants_Bills > userCondition[1] && restaurants_Bills < userCondition[2]){
        var tip2 = restaurants_Bills *tips[1];
        return tip2
    }
    else if (restaurants_Bills > userCondition[1]){
        var tip3 = restaurants_Bills * tips[2];
        return tip3
    }
}
var johnTips =["John"];
while (i < johnBills.length){
   

    var johnRestaurant = calc(johnBills[i],johntips,johnCondition);
    johnTips.push((johnRestaurant)); 
     i++;

}

i = 0;
var Markstip = ["Mark"];
while (i < markBills.length){

    var markRestaurant = calc(markBills[i],markTips,markCondition);
    Markstip.push(markRestaurant);
    i++;
}

var tipsRestourants= ["ersten", "zweiten", "dritten", "vierten", "fünften"];
var WAS = [];
function returnResult (number, tip){
    var i = 1;
    var e = 0;
    while(i < tip.length){
        
         var ergbenis = (tip[0]+" hat im "+number[e]+" Restourant "+tip[i]+"€ tip gegeben");
         WAS.push(ergbenis);
        ++i;
        ++e;
    }

}
returnResult(tipsRestourants,johnTips);
returnResult(tipsRestourants,Markstip);



console.log(WAS);