// Tag select
const theme = document.getElementById('Theme');
const ChooseTheme = document.querySelectorAll('li');

// Mathode

ChooseTheme.forEach(function (value) {
  value.addEventListener('click', function () {
    const className = this.classList[0];
    let color = '';
    if (className === 'red') {
      color = 'rgb(255, 121, 121)';
    }
    if (className === 'green') {
      color = 'rgb(46, 213, 115)';
    }
    if (className === 'pink') {
      color = 'rgb(253, 167, 223)';
    }
    if (className === 'perpale') {
      color = 'blueviolet';
    }
     if (className === 'blue') {
       color = 'rgb(30, 144, 255)';
     }
    theme.style.backgroundColor = color;
    console.log(color);
  });
   
})






