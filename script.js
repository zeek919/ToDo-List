const button = document.querySelector('button');
const input = document.querySelector('input');
const wraper = document.querySelector('.wraper');
const ul = wraper.querySelector('ul');


const nothingMessage = wraper.querySelector('div');
let counter = {value: 0};

const validate = function() {
    if(input.value.length > 10)
    {
        const main = document.querySelector('main');

        main.style.backgroundColor = 'red';
        input.value = '';
        input.placeholder = 'ZA DUŻO ZNAKÓW!';
    }
    else
    {
        generateElement('li');
    }
}

const generateButton = function() 
{
    const createButton = document.createElement('button');
    createButton.style.cssFloat = 'right';
    createButton.innerText = 'USUŃ';

    createButton.addEventListener('click', function()
    {
        console.log(createButton.parentNode);
        const parentToDelete = createButton.parentNode;

        parentToDelete.parentNode.removeChild(parentToDelete);
    });

    return createButton;
}

const generateElement = function(htmlElement)
{
    const createElement = document.createElement(htmlElement);
    createElement.classList.add('element');
    createElement.innerText = input.value;
    createElement.id = `count_${counter.value}`;

    var elChildButton = ul.appendChild(createElement);
    

    if(counter>=0)
    {
        nothingMessage.style.display = 'none';
    }

    elChildButton.appendChild(generateButton());
    counter.value++;
}


button.addEventListener('click', function(){
    validate();
});





/*  WERSJA I - DZIALA


const generateElement = function(htmlElement)
{
    const createElement = document.createElement(htmlElement);
    createElement.classList.add('element');
    createElement.innerText = input.value;

    var elChildButton = ul.appendChild(createElement);
    

    if(counter>=0)
    {
        nothingMessage.style.display = 'none';
    }


    const crButton = document.createElement('button');
    crButton.style.cssFloat = 'right';
    crButton.innerText = 'USUŃ';

    elChildButton.appendChild(crButton);
}
*/