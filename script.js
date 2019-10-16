const button = document.querySelector('button');
const input = document.querySelector('input');
const wraper = document.querySelector('.section--wraper');
const ul = wraper.querySelector('ul');

const main = document.querySelector('main');


const nothingMessage = wraper.querySelector('div');
let counter = {value: 0};
let counterColor = {value: 0};

const validateShowMessage = function() {
    if(counter.value < 1)
    {
        nothingMessage.style.display = 'inline';
    }
    else
    {
        nothingMessage.style.display = 'none';
    }
}

const validateColor = function() {

    if(input.value.length > 10)
    {
        main.classList.remove('main--correctValue');
        main.classList.add('main--wrongValue');

        input.value = '';
        input.placeholder = 'ZA DUŻO ZNAKÓW!';
        counterColor.value++;
    }
    else
    {
        if(counterColor.value>=1) {
            main.classList.remove('main--wrongValue');
            main.classList.add('main--correctValue');
        }

        input.placeholder = 'Wpisz coś...';
        generateElement('li');
    
    }
}

const generateButton = function() 
{
    const createButton = document.createElement('button');
    
    createButton.innerText = 'USUŃ';
    createButton.classList.add("li__button--delete");

    createButton.addEventListener('click', function()
    {
        console.log(createButton.parentNode);
        counter.value--;

        const parentToDelete = createButton.parentNode;

        parentToDelete.parentNode.removeChild(parentToDelete);
        validateShowMessage();
    });

    return createButton;
}

const generateElement = function(htmlElement)
{
    const createElement = document.createElement(htmlElement);
    createElement.classList.add('section__li--task');
    createElement.innerText = input.value;
    createElement.id = `count_${counter.value}`;

    var elChildButton = ul.appendChild(createElement);
    counter.value++;

    elChildButton.appendChild(generateButton());
    validateShowMessage();

}




button.addEventListener('click', function(){
    validateColor();
});

