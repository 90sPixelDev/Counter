let counter = 0;

// const incBtn = document.getElementById('increase');
// const decBtn = document.getElementById('decrease');
// const resetBtn = document.getElementById('reset');

// const counterText = document.getElementsByTagName('h2')[0];

// // FIRST ATTEMPT ON MY OWN
// const increase = incBtn.addEventListener('click', () => {
//     counter++;
//     counterText.textContent = counter;

//     if (counter > 0) counterText.style.color = 'green';
//     if (counter === 0) counterText.style.color = 'black';

//     console.log(counter);
// })
// const reset = resetBtn.addEventListener('click', () => {
//     counter = 0;
//     counterText.textContent = counter;

//     counterText.style.color = 'black';

//     console.log(counter);
// })
// const decrease = decBtn.addEventListener('click', () => {
//     counter--;
//     counterText.textContent = counter;

    // if (counter < 0) counterText.style.color = 'red';
    // if (counter === 0) counterText.style.color = 'black';

//     console.log(counter);
// })

// 2nd ATTEMPT LOOKING AT HOW OTHERS DO IT
const value = document.getElementsByTagName('h2')[0];
const btns = document.querySelectorAll('.btn');

btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        const classes = (e.currentTarget.classList);
        if (classes.contains('increase')) {
            counter++;
            value.textContent = counter;
        }
        if (classes.contains('reset')) {
            counter = 0;
            value.textContent = counter;
        }
        if (classes.contains('decrease')) {
            counter--;
            value.textContent = counter;
        }

        if (counter > 0) value.style.color = 'green';
        if (counter < 0) value.style.color = 'red';
        if (counter === 0) value.style.color = 'black';
    });
});

