const loadConuntries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCounties(data));
    
}

const displayCounties = countries => {
    console.log(countries);
}