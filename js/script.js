document.body.style.textAlign = 'center';

const h5 = document.createElement('h5');
document.body.appendChild(h5);
h5.innerText = 'Rad 1';
h5.style.backgroundColor = '#b6fbb6';
h5.style.color = '#6e6ef7';

const h4 = document.createElement('h4');
document.body.appendChild(h4);
h4.innerText = 'Rad 2';
h4.style.backgroundColor = '#b6fbcd';
h4.style.color = '#6e6ef7';

const h3 = document.createElement('h3');
document.body.appendChild(h3);
h3.innerText = 'Rad 3';
h3.style.backgroundColor = '#b6fbe4';
h3.style.color = '#6e6ef7';

const h2 = document.createElement('h2');
document.body.appendChild(h2);
h2.innerText = 'Rad 4';
h2.style.backgroundColor = '#b6fbfb';
h2.style.color = '#6e6ef7';

const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerText = 'Rad 5';
h1.style.backgroundColor = '#b6e4fb';
h1.style.color = '#6e6ef7';


const container = document.createElement('article');
document.body.appendChild(container);
container.style.display = 'flex';
container.style.padding = '60px'
container.style.border = '1px solid black'
const column1 = document.createElement('section');
const column2 = document.createElement('section');
const column3 = document.createElement('section');
container.appendChild(column1);
container.appendChild(column2);
container.appendChild(column3);
container.style.justifyContent = 'space-around'

column1.style.backgroundColor = '#a8a8f0';
column2.style.backgroundColor = '#a8a8f0';
column3.style.backgroundColor = '#a8a8f0';

column1.style.width = '4rem';
column2.style.width = '4rem';
column3.style.width = '4rem';


for (i = 0; i < 10; i++) {
    const list = document.createElement('p');
    column1.appendChild(list);
    list.innerText = i;
    list.style.textAlign = 'left';
    list.style.margin = '10px';

    if (i == 4) {
        list.style.backgroundColor = '#a8a8f0';
        list.style.color = 'white';
    }

    else if (i % 2 == 0) {
        list.style.backgroundColor = 'black';
        list.style.color = 'white';
    }

    else if (i % 2 != 0) {
        list.style.backgroundColor = 'white';
        list.style.color = 'black';
    }
}

for (i = 9; i >= 0; i--) {
    const list = document.createElement('p');
    column2.appendChild(list);
    list.innerText = i;
    list.style.textAlign = 'center';
    list.style.margin = '10px';

    if (i == 8) {
        list.style.backgroundColor = '#a8a8f0';
        list.style.color = 'white';
    }

    else if (i % 2 == 0) {
        list.style.backgroundColor = 'black';
        list.style.color = 'white';
    }

    else if (i % 2 != 0) {
        list.style.backgroundColor = 'white';
        list.style.color = 'black';
    }
}

const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
console.log(numbers);

for (i = 0; i < 10; i++) {
    const list = document.createElement('p');
    column3.appendChild(list);
    list.innerText = numbers[i];
    list.style.textAlign = 'right';
    list.style.margin = '10px';

    if (i == 5) {
        list.style.backgroundColor = '#a8a8f0';
        list.style.color = 'black';
    }

    else if (i % 2 == 0) {
        list.style.backgroundColor = 'black';
        list.style.color = 'white';
    }

    else if (i % 2 != 0) {
        list.style.backgroundColor = 'white';
        list.style.color = 'black';
    }
}
