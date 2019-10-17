const button = document.querySelector('.form__button');
const input = document.querySelector('.form__input');
const wraper = document.querySelector('.section--wraper');
const ul = wraper.querySelector('.section__ul');
const main = document.querySelector('main');
const nothingMessage = wraper.querySelector('.section__div--empty');

let ifFirst = {value: false};
let counter = 0;
let counterColor = {value: 0};

const validateShowMessage = function() {
    if(counter < 1)
    {
        nothingMessage.classList.remove('section__div--display');
    }
    else
    {
        nothingMessage.classList.add('section__div--display');
    }
}

const validateForm = function() {

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

const generateDeleteButton = function() 
{
    const createButton = document.createElement('button');
    
    createButton.innerText = 'USUŃ';
    createButton.classList.add("li__button--delete");

    createButton.addEventListener('click', function()
    {
        console.log(createButton.parentNode);
        counter--;

        const parentToDelete = createButton.parentNode;

        parentToDelete.parentNode.removeChild(parentToDelete);
        validateShowMessage();
    });

    return createButton;
}

const generateEditButton = function() {
    const createEditButton = document.createElement('button');

    createEditButton.innerText = 'EDYTUJ';
    createEditButton.classList = 'li__button--edit';
    
    
    createEditButton.addEventListener('click', function()
    {
        
        this.parentNode.classList.toggle('li--hide');

        
        ifFirst.value = true;
    });

    return createEditButton;
}

const generateElement = function(htmlElement)
{
    const createElement = document.createElement(htmlElement);
    createElement.classList.add('section__li--task');
    if(ifFirst.value = true)
    {
        createElement.classList.add('li--show');
    }
    createElement.innerText = input.value;
    createElement.id = `count_${counter.value}`;

    const elChildButton = ul.appendChild(createElement);
    counter++;

    elChildButton.appendChild(generateDeleteButton());
    elChildButton.appendChild(generateEditButton());
    validateShowMessage();

}




button.addEventListener('click', function(){
    validateForm();
});

input.addEventListener('keydown', function(event){
    if(event.keyCode === 13)
    {
        validateForm();
        event.preventDefault();
    }
});


