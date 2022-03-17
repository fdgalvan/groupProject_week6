


    
   
    let inputNode = document.getElementById("input")
    let button = document.querySelector("#button")
    button.addEventListener('click', async function(e) {
        e.preventDefault()
        let cityName = inputNode.value;
        let results = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=h9rqkzphmHyD2E3lPLbODQB4F1dAqy9A&city=${cityName}`)
        let cityData = await results.json();

        console.log(cityData._embedded.events)
    })



