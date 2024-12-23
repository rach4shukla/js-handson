const form = document.querySelector('form');
// form is submitted with get or post, the values goes to the url or server
// we have to stop it --> using event method

// if const height = parseInt(document.querySelector('#height').value) is written outside
// it will give you empty values

form.addEventListener('submit', function(e){
    e.preventDefault(); // stopping default values from getting submitted

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === ''  || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    if(weight === ''  || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
       const bmi = (weight / ((height*height)/10000).toFixed(2));
        // show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }

});