const button = document.querySelector("button");
const infos = ['road', 'suburb', 'city_district', 'town', 'municipality', 'county', 'state_district', 'ISO3166-2-lvl4', 'state', 'region', 'postcode', 'country', 'country_code'];

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(position =>{

        const {latitude, longitude} = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;


        fetch(url).then(res => res.json()).then(data => {
            console.table(data.address);
            infos.forEach(info => { 
            document.querySelector('body').innerHTML += `<br>${info} = ${data.address[info]}`;
            })

        }).catch(() => {
            console.log("Error fetching data from API");
        });
    });
});