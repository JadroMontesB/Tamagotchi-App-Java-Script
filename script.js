let hunger = 80;
let happiness = 80;
let energy = 80;

function feed(){

    if(hunger == 100 ) 
    {
        hunger = hunger +0;
      
    }
    else
    {
    
        hunger = hunger +20;
        energy = energy +20;
        
        
    }

 
    displayInfo();

}

function pet(){

    if(happiness == 100)
    {

        happiness = happiness +0;
     
    
    }
    else
    {
        happiness = happiness +20;

       
       
    }

    displayInfo();



}

function play(){

    if(energy == 0)
    {

        energy = energy +0;

    }
    else
    {
      energy = energy -20;
      hunger = hunger - 20;
      happiness = happiness -20;
      
   
      
    }

    displayInfo();


 
}

function displayInfo(){

    document.getElementById("hungerPoints").innerHTML = hunger;
    document.getElementById("happinessPoints").innerHTML = happiness;
    document.getElementById("energyPoints").innerHTML = energy;



}

displayInfo();