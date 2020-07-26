//drag the neccessary elements
const addList = document.querySelector('.new__ingredient--list');
const stepList = document.querySelector('.new__step--list');
const inputAddList = document.querySelector('.add__list');
const inputStepList = document.querySelector('.step__list');
const ulForm = document.querySelector('.whole__form');
const ulAddList = document.querySelector('.list');
const ulStep = document.querySelector('.step__lists');

const submitBtn = document.querySelector('.submit');
const form = document.querySelector('form');

//create html to add the list

let myHTMLList = `
<li><input class="add__list info__input" type="text" value="${inputAddList.value}" placeholder="Type your thing to cook here"></li><br>
`
//function to handle the adding list

const handleAddListBtn = e => {
    e.preventDefault();
    console.log('add is clicked');
    ulAddList.insertAdjacentHTML('beforeend', myHTMLList);
}

//crete html to add the steps of cooking

let myHTMLStepList = `
<li><input class="step__list info__input" type="text" value="${inputStepList.value}" placeholder="Type your next step here"></li><br>
`

//function to handle the steps button

const handleStepListBtn = e => {
    e.preventDefault();
    console.log('step button is clicked');
    ulStep.insertAdjacentHTML('beforeend', myHTMLStepList);
}

//function to handle the submit button for the object

const {title, picture, cook, difficulty, timing, ingredients, steps} = form;

const handleSubmitBtn = e => {
    e.preventDefault();

    const recipes = [
        {
            title: title.value,
            picture: picture.value,
            author: cook.value,
            difficulty: difficulty.value,
            timing: timing.value,
            ingredients: [ingredients.value],
            steps: [steps.value],
        },
    ];
    console.log(recipes);
}

// handle all the click button
submitBtn.addEventListener('click', handleSubmitBtn);
stepList.addEventListener('click', handleStepListBtn);
addList.addEventListener('click', handleAddListBtn);