// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  const pepBtn = document.querySelector('.btn-pepperoni');
  const mushBtn = document.querySelector('.btn-mushrooms');
  const greenPepBtn = document.querySelector('.btn-green-peppers');
  const sauceBtn = document.querySelector('.btn-sauce');
  const crustBtn = document.querySelector('.btn-crust');
  if (state.pepperoni) {
    pepBtn.classList.add('active');
  } else {
    pepBtn.classList.remove('active');
  }
  if (state.mushrooms) {
    mushBtn.classList.add('active');
  } else {
    mushBtn.classList.remove('active');
  }
  if (state.greenPeppers) {
    greenPepBtn.classList.add('active');
  } else {
    greenPepBtn.classList.remove('active');
  }
  if (state.whiteSauce) {
    sauceBtn.classList.add('active');
  } else {
    sauceBtn.classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    crustBtn.classList.add('active');
  } else {
    crustBtn.classList.remove('active');
  }
}

function renderPrice() {
  const ingLis = document.querySelectorAll('.price ul li');
  const totalPriceEl = document.querySelector('.price strong');

  ingLis.forEach((lis) => {
    lis.style.display = 'none';
  });

  let tempArr = [];
  for (const property in state) {
    if (state[property]) {
      tempArr.push(ingredients[property]);
    }
  }
  tempArr.forEach((ing) => {
    const listItem = document.createElement('li');
    const ingredient = document.createTextNode(`$${ing.price} ${ing.name}`);
    listItem.appendChild(ingredient);
    const list = document.querySelector('.price ul');
    list.appendChild(listItem);
  });
  console.log(tempArr);
  let totalPrice = tempArr.reduce((acc, cur) => acc + cur.price, 0) + 10;
  totalPriceEl.innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
