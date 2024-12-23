const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// setInterval method is used to apply and display after every interval

setInterval(function(){}, 2000); // This is the syntax

