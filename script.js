const button = document.querySelector('.form__button');
const input = document.querySelector('.form__input');
const wraper = document.querySelector('.section--wraper');
const ul = wraper.querySelector('.section__ul');
const main = document.querySelector('main');
const nothingMessage = wraper.querySelector('.section__div--empty');

let counter = 0;
let counterColor = {value: 0};
let counterOfID = {value: 0};
let counterOfEditingMenu = {value: 0};

const validateShowMessage = function() {
    if(counterOfID.value < 1)
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
        counterOfID.value--;

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
        
        if(counterOfEditingMenu.value < 1)
        {
            this.parentNode.classList.add('li--hide');
            this.parentNode.classList.remove('li--show');
            counterOfEditingMenu.value++;
        }
        else
        {
            this.parentNode.classList.remove('li--hide');
            this.parentNode.classList.add('li--show');
             
            counterOfEditingMenu.value--;
        }
        
    });

    return createEditButton;
}

const generateElement = function(htmlElement)
{
    const createElement = document.createElement(htmlElement);
    createElement.classList.add('section__li--task');
    createElement.innerText = input.value;
    createElement.id = `count_${counterOfID.value}`;

    const elChildButton = ul.appendChild(createElement);
    counterOfID.value++;

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


