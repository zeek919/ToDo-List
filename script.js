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

const createEditInput = function(){
    const editInput = document.createElement('input');
    editInput.classList.add('li__input--display');

    editInput.addEventListener('keydown', function(e){
        if(e.keyCode === 13)
        {
            
            const a = this.parentNode.querySelector('span');
            a.innerText = editInput.value;
            this.style.display = 'none';
            a.style.display = 'inline';
            e.preventDefault();
        }
        
    });

    return editInput;
}

const createSpan = function(){
    const span = document.createElement('span');

    span.classList.add('li--span');
    span.innerText = input.value;

    span.addEventListener('click', function(){
        
        span.style.display = 'none';
        this.parentNode.appendChild(createEditInput());
        
    });

    return span;
}
const generateElement = function(htmlElement)
{
    const createElement = document.createElement(htmlElement);
    createElement.classList.add('section__li--task');
    createElement.id = `count_${counterOfID.value}`;

    const elChildButton = ul.appendChild(createElement);
    counterOfID.value++;

    elChildButton.appendChild(generateDeleteButton());
    elChildButton.appendChild(createSpan());
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



