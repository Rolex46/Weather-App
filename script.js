//selecting the different html elements
const inputval = document.querySelector('#input')
const form = document.querySelector("form")
const btn = document.querySelector('#search');
const city = document.querySelector('#cityoutput')
const descrip = document.querySelector('#description')
const temp = document.querySelector('#temperature')
const wind = document.querySelector('#wind')
const apiKey = "dec184e04f0661d94c27efd09c310bfd"
// converting the temperature to units of  celsius
function convertion(val)
{
    return (val - 273).toFixed(2)
}
// preventing the html default behavior and reseting it after every submission
form.addEventListener("submit", e => {
  e.preventDefault();
  form.reset();

  // fetching data from the api and the provided key
btn.addEventListener('click', function()
{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputval.value}&appid=${apiKey}`)
  .then(res => res.json())
  .then(data => 
  {
    // storing the fetched data in various constants
    const nameval = data['name']
    const descrip = data['weather']['0']['description']
    const tempature = data['main']['temp']
    const wndspd = data['wind']['speed']
    //displaying the data on our DOM
    city.innerHTML=`Weather of <span>${nameval}<span>`
    temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
    description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

  })

  .catch(err => alert('enter a valid city name'))
})

});

