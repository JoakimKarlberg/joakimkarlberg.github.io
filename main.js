window.onload = function()
{

let divData = document.getElementById("showData");
let divRandom = document.getElementById("showRandom");
let isClicked = false;

let getCr = document.getElementById("crSelect");
let getTerrain = document.getElementById("terrainSelect");
let randomBtn = document.getElementById("randomBtn").addEventListener("click", getBeast);


function getBeast(){
    let cr = getCr.options[getCr.selectedIndex].value;
    let tr = getTerrain.options[getTerrain.selectedIndex].text;
    let beastArray = [];

    if(isClicked){
        divData.innerHTML = null;
    }
    
    beasts.forEach(element => {
        if(element.terrain.includes(tr) && element.cr_enumerable <= cr)
        beastArray.push(element);
    });
    
    let randomedBeast = beastArray[Math.floor(Math.random() * beastArray.length)];

    if(randomedBeast !== undefined)
    {
        divData.innerHTML = "You summon " + getNumberOfBeasts(cr) + " " + randomedBeast.name + getPlural(randomedBeast.cr_enumerable, getNumberOfBeasts(cr)) + " with CR " +  randomedBeast.combat_rating + "<br> Terrain: " + "<strong>" + tr + "</strong>";
    }
    else
    {
        divData.innerHTML = "Please select both a <strong>Combat Rating</strong> and a <strong>Terrain Type</strong> to request a random beast";
    }


    isClicked = true;
}

// determines if output string should be in plural or not depending on amount of summons
function getPlural(crInput, crEnum){
    if(crInput < 4 && crEnum > 1){
        //INSERT REGEX FOR PLURAL
        return "s ";
    }
    else{
        return " ";
    }
}

//gets number of beasts to summon depending on input selection
function getNumberOfBeasts(crInput){
    if(crInput == 1){
        console.log(crInput);
        return 8;
    }
    else if(crInput == 2){
        console.log(crInput);
        return 4;
    }
    else if(crInput == 3){
        console.log(crInput);
        return 2;
    }
    else if(crInput == 4){
        console.log(crInput);
        return 1;
    }
    else{
        console.log(crInput);
        return "Something went wrong";
    }
}

};
