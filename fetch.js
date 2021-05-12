const url = "https://api.zippopotam.us/us/33162"; 

async function getData() { 
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    const { country , places } = data;
    document.getElementById("con").textContent = country;
    document.getElementById("pla").textContent = places;



}
getData()
