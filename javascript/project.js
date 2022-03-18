


    
    let inputNode = document.getElementById("input")
    let button = document.querySelector("#button")
    button.addEventListener('click', async function(e) {
        e.preventDefault()
        let cityName = inputNode.value;
        let results = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=h9rqkzphmHyD2E3lPLbODQB4F1dAqy9A&city=${cityName}`)
        let cityData = await results.json();

            console.log(cityData._embedded.events)

        
        let weatherResults = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9361bd03ec7175e9eea92fdf7a717518`)
        let weatherData = await weatherResults.json();
        console.log(weatherData)
        
        let kelvin = weatherData.main.temp; 
    
    
        let degC = kelvin - 273.15; 
    
    
        let degF = Math.floor((degC * 1.8) + 32); 
    
        console.log(degF)


    })



