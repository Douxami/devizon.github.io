function calculEauEvaporee(){
    let constGaz = 461.5;
     nivActivitePicine = document.valeur.nivActivitePicine.value;
     MoyTemperatureAO = document.valeur.MoyTemperatureAO.value;
     pressVapSatO = document.valeur.pressVapSatO.value;
     pressVapSatAir = document.valeur.pressVapSatAir.value;
     surfaceBassin = document.valeur.surfaceBassin.value;
    

     let W = nivActivitePicine/(constGaz*MoyTemperatureAO)*(pressVapSatO-pressVapSatAir)*surfaceBassin

 
     document.valeur.resultat.value= W;

}