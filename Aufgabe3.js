//Grundefintion

var restaurants_Bills = [124,48,268];

var tips = [0.2,0.15,0.10];
//berechnung des restaurants 1

function howMuchTip1(restaurants_Bills, tips){
    
    if (restaurants_Bills[0] < 50){
        
        var tip1 = restaurants_Bills[0] *tips[0];
        return tip1;
    }
    else if (restaurants_Bills[0] >50 && restaurants_Bills[0] < 200){
        var tip2 = restaurants_Bills[0] *tips[1];
        return tip2
    }
    else if (restaurants_Bills[0] >200){
        var tip3 = restaurants_Bills[0] *tips[2];
        return tip3
    }
}

var ergebnis1 =(howMuchTip1(restaurants_Bills,tips));

//Berechnung tips 2tes restaurant 

function howMuchTip2(restaurants_Bills, tips){
    
    if (restaurants_Bills[1] < 50){
        
        var tip1 = restaurants_Bills[1] *tips[0];
        return tip1;
    }
    else if (restaurants_Bills[1] >50 && restaurants_Bills[0] < 200){
        var tip2 = restaurants_Bills[1] *tips[1];
        return tip2
    }
    else if (restaurants_Bills[1] >200){
        var tip3 = restaurants_Bills[1] *tips[2];
        return tip3
    }

}

var ergebnis2 =(howMuchTip2(restaurants_Bills,tips));

//berechnung Restoraunt 3

function howMuchTip3(restaurants_Bills, tips){
    
    if (restaurants_Bills[2] < 50){
        
        var tip1 = restaurants_Bills[2] *tips[0];
        return tip1;
    }
    else if (restaurants_Bills[2] >50 && restaurants_Bills[0] < 200){
        var tip2 = restaurants_Bills[2] *tips[1];
        return tip2
    }
    else if (restaurants_Bills[2] >200){
        var tip3 = restaurants_Bills[2] *tips[2];
        return tip3
    }

}

var ergebnis3 =(howMuchTip3(restaurants_Bills,tips));

//only the tips
var ergebnisse = [ergebnis1,ergebnis2,ergebnis3];

//adieren der endsummen

console.log(ergebnisse);
console.log(restaurants_Bills);

    
    var Ergebniss1 = ergebnisse[0] + restaurants_Bills[0];
    
    
    var Ergebniss2 = ergebnisse[1] + restaurants_Bills[1];
    
    
    var Ergebniss3 = ergebnisse[2] + restaurants_Bills[2];
    

function Printout(Ergebniss1,Ergebniss2,Ergebniss3){
    
    if(true){
        console.log("Das erste ergebnis ist "  +Ergebniss1);
        console.log("Das zweite ergebnis ist " +Ergebniss2);
        console.log("Das dritte ergebnis ist " +Ergebniss3);
    }
}
Printout(Ergebniss1,Ergebniss2,Ergebniss3);
