


    
    let inputNode = document.getElementById("input")
    let button = document.querySelector("#button")
    button.addEventListener('click', async function(e) {
        e.preventDefault()
        let cityName = inputNode.value;
        let results = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=25&apikey=h9rqkzphmHyD2E3lPLbODQB4F1dAqy9A&city=${cityName}`)
        let cityData = await results.json();


           

        var output = '';
        for(var i in cityData){
            output +=
            '<div class = "cityData">' +
            '<img src="'+cityData[i]._embedded.events.images[0]+'" width="70" height="70">' +
                '<ul>' +
                '<li>name: '+cityData[i]._embedded.events.name+'</li>' +
                '<li>dates: '+cityData[i]._embedded.events.dates.start.dateTime+'</li>' +
                '<li>tickets: '+cityData[i]._embedded.events.url+'</li>' +
                '</ul>' +
                '</div>' ;
        }

        document.getElementById('cityData').innerHTML = output;

        

        console.log(cityData._embedded.events)
        
        let events = document.querySelector('.flexbox-events');
        events.textContent = `upcoming events in ${cityName} are ${cityData._embedded.events}`

        

        
        let weatherResults = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9361bd03ec7175e9eea92fdf7a717518`)
        let weatherData = await weatherResults.json();
        console.log(weatherData)
        
        let kelvin = weatherData.main.temp; 
    
    
        let degC = kelvin - 273.15; 
    
    
        let degF = Math.floor((degC * 1.8) + 32); 



        // var output1 = '';
        // for(var i in weatherData){
        //     output1 +=
        //     '<div class = "weatherData">' +
        //    ?? '<img src="'+weatherData[i]._embedded.events.images[0]+'" width="70" height="70">' +
                // '<ul>' +
                // '<li>name: '+weatherData[i]._embedded.events.name+'</li>' +
                // '<li>dates: '+weatherData[i]._embedded.events.dates.start+'</li>' +
                // '<li>tickets: '+weatherData[i]._embedded.events.url+'</li>' +
                // '</ul>' +
                // '</div>' ;
        // }

        // document.getElementById('weatherData').innerHTML = output1;

    
        // console.log(degF)

        let weather = document.querySelector('.flexbox-weather');
        weather.textContent = `Current temperature in ${cityName} is ${degF}º`
    })

