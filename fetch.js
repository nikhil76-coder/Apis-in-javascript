const url = "https://api.zippopotam.us/us/33162"; 

async function getData() { 
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    const { country , state , places, "post code"} = data;
    document.getElementById("con").textContent = country;
    document.getElementById("sta").textContent = state;
    document.getElementById("pla").textContent = places;
    document.getElementById("pos").textContent = "post code";



}
getData()
