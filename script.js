let currentPokimon;

/* SEARCH PAGE */
async function showPokimonContainer() {

    let allPokimonContainer = document.getElementById('showPokimonContainer')
    for (let i = 1; i < 20; i++) {
        let URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(URL);
        allPokimons = await response.json();
        let type_pokimon = allPokimons.types[0].type.name;
        let name_pokimon = allPokimons.forms[0].name;
        let image_two = allPokimons['sprites']['other']['official-artwork']['front_default'];
        allPokimonContainer.innerHTML += `
        
            <div class="showPokimonContainer-child" id="poki-image-in-shows-${i}" onclick="showPokimon(${i})">
                <span id="pokimonName-${i}">${name_pokimon}</span>
                <img  class="poki-image-in-shows"  src="${image_two}" alt="">
                <span>#${i}</span>
               
            <div>
        
        `;
        makeItColorfull(type_pokimon, i);
    }


}


//FILTER 
async function filterPokimon() {

    let myInput = document.getElementById('my-input').value;
    console.log(myInput)
    myInput = myInput.toLowerCase();

    let allPokimonContainer = document.getElementById('showPokimonContainer')
    allPokimonContainer.innerHTML = '';
    for (let i = 1; i < 20; i++) {
        let URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(URL);
        allPokimons = await response.json();
        let type_pokimon = allPokimons.types[0].type.name;
        let name_pokimon = allPokimons.forms[0].name;
        let image_two = allPokimons['sprites']['other']['official-artwork']['front_default'];

        if (name_pokimon.toLowerCase().includes(myInput)) {
            allPokimonContainer.innerHTML += `
        
            <div class="showPokimonContainer-child" id="poki-image-in-shows-${i}" onclick="showPokimon(${i})">
                <span id="pokimonName-${i}">${name_pokimon}</span>
                <img  class="poki-image-in-shows"  src="${image_two}" alt="">
                <span>#${i}</span>
               
            <div>
        
        `;
            makeItColorfull(type_pokimon, i);
        }

    }

}


//COLORFULL

function makeItColorfull(pokyType, i) {
    let pokiImageInShows = document.getElementById('poki-image-in-shows-' + i);
    let pokimonBox = document.getElementById('pokemonbox');
    pokimonBox.style = "background-color: #48D0B0;"
    if (pokyType == "grass") {
        pokiImageInShows.style = "background-color: rgb(148, 201, 173);"
        pokimonBox.style = "background-color: rgb(148, 201, 173);"
    }
    if (pokyType == "dragon") {
        pokiImageInShows.style = "background-color: red;"
        pokimonBox.style = "background-color: blue;"
    }
    if (pokyType == "fire") {
        pokiImageInShows.style = "background-color: rgb(247, 120, 107);"
        pokimonBox.style = "background-color: rgb(247, 120, 107);"
    }
    if (pokyType == "water") {
        pokiImageInShows.style = "background-color: rgb(88, 171, 246);"
        pokimonBox.style = "background-color: rgb(88, 171, 246);"
    }
    if (pokyType == "bug") {
        pokiImageInShows.style = "background-color: rgb(168, 184, 32);"
        pokimonBox.style = "background-color: rgb(168, 184, 32);"
    }
    if (pokyType == "normal") {
        pokiImageInShows.style = "background-color: rgb(168, 168, 120);"
        pokimonBox.style = "background-color: rgb(168, 168, 120);"
    }
    if (pokyType == "poison") {
        pokiImageInShows.style = "background-color: rgb(160, 64, 160);"
        pokimonBox.style = "background-color: rgb(160, 64, 160);"
    }
    if (pokyType == "electric") {
        pokiImageInShows.style = "background-color: rgb(248, 208, 48);"
        pokimonBox.style = "background-color: rgb(248, 208, 48);"
    }
    if (pokyType == "ground") {
        pokiImageInShows.style = "background-color: brown;"
        pokimonBox.style = "background-color: rgb(168, 184, 32);"
    }
    if (pokyType == "fairy") {
        pokiImageInShows.style = "background-color: white;"
        pokimonBox.style = "background-color: rgb(168, 184, 32);"
    }
    if (pokyType == "fighting") {
        pokiImageInShows.style = "background-color: red;"
        pokimonBox.style = "background-color: rgb(168, 184, 32);"
    }
    if (pokyType == "rock") {
        pokiImageInShows.style = "background-color: red;"
        pokimonBox.style = "background-color: rgb(168, 184, 32);"
    }
    if (pokyType == "psychic") {
        pokiImageInShows.style = "background-color: red;"
        pokimonBox.style = "background-color: rgb(168, 184, 32);"
    }

}

async function showPokimon(i) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    let response = await fetch(url);
    currentPokimon = await response.json();
    console.log(url)
    console.log(currentPokimon)
    showPokimonPage();
    aboutPokimon(i);

}



let currentI;

function aboutPokimon(i) {
    currentI = i;
    console.log(currentPokimon);
    cleanAllNavigations();
    changeNavigationColor('blue', 'about');
    //GET ELEMENTS BY ID

    let aboutBox = document.getElementById('about-box')
    let pokimonImage = document.getElementById('pokimon-image');
    let pokimonNumber = document.getElementById('pokimon-number');
    let pokimonName = document.getElementById('pokimon-name');
    let pokimonType = document.getElementById('pokimon-type');

    //FROM API
    let name_pokimon = currentPokimon.forms[0].name;
    let type_pokimon = currentPokimon.types[0].type.name;
    let weight_pokimon = currentPokimon.weight;
    let height_pokimon = currentPokimon.height;
    let ability_pokimon = currentPokimon.abilities[1].ability.name;
    let image_two = currentPokimon['sprites']['other']['official-artwork']['front_default'];

    pokimonImage.src = `${image_two}`;
    pokimonNumber.innerHTML = `#0${i}`;
    pokimonType.innerHTML = `${type_pokimon}`;
    pokimonName.innerHTML = `${name_pokimon}`;

    aboutBox.innerHTML += `

    <div class="singel-information">
        <div class="information-name">Taype</div>
        <div class="information-worth">${type_pokimon}</div> 
    </div>
    <div class="singel-information">
        <div class="information-name">Größe</div>
        <div class="information-worth">${height_pokimon}</div> 
    </div>
     <div class="singel-information">
        <div class="information-name">Giwicht</div>
        <div class="information-worth">${weight_pokimon}</div> 
    </div>
    <div class="singel-information">
        <div class="information-name">Abilities</div>
        <div class="information-worth">${ability_pokimon}</div> 
    </div>
    
    
    `;


    makeItColorfull(type_pokimon, i)
}

function showPokimonMoves() {
    cleanAllNavigations();
    changeNavigationColor('blue', 'moves');

    let movebox = document.getElementById('moves-box');
    for (let j = 0; j < 20; j++) {
        const element = currentPokimon.moves[j].move["name"];
        movebox.innerHTML += `
        <div class="movie-box-elemente">
            ${element}
        <div>
        
        `;
    }
}

function showPokimonStats() {
    cleanAllNavigations();
    changeNavigationColor('blue', 'stats');

    let statsBox = document.getElementById('stats-box')
    let statsLength = currentPokimon.stats.length
    for (let i = 0; i < statsLength; i++) {
        const elem = currentPokimon.stats[i]
        let statName = elem.stat.name;
        let statWorth = elem.base_stat;
        statsBox.innerHTML += `
        <div class="stats-singl-content">
            <div class="stats-singl-content-child-one">
            <span>${statName}<span>
           </div>
           <div class="stats-singl-content-child-two">
                <div id="stats-bar" style="width:${statWorth}%;"  <div>
           <div>
        <div>
        
        `;
    }
}


function cleanAllNavigations() {
    let aboutBox = document.getElementById('about-box')
    aboutBox.innerHTML = '';
    let movebox = document.getElementById('moves-box');
    movebox.innerHTML = ``;
    let statsBox = document.getElementById('stats-box')
    statsBox.innerHTML = ``;

    let aboutLink = document.getElementById('about-link')
    aboutLink.style = "color:black;"
    let movesLink = document.getElementById('moves-link')
    movesLink.style = "color:black;";
    let statsLink = document.getElementById('stats-link')
    statsLink.style = "color:black;";
}



function backtoSearch() {
    let pokemonPage = document.getElementById('pokemon-page')
    pokemonPage.classList.add("display-none");

    let searchPage = document.getElementById('search-page')
    searchPage.style.display = "flex";
}

function showPokimonPage() {
    let searchPage = document.getElementById('search-page')
    searchPage.style.display = "none";

    let pokemonPage = document.getElementById('pokemon-page')
    pokemonPage.classList.remove("display-none");


}

function changeNavigationColor(color, link) {
    let aboutLink = document.getElementById(`${link}-link`)
    aboutLink.style = `color:${color}`;
}