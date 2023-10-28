// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  // renderIngredientsBoard();
  // renderPrice();
}

const price = document.querySelector(".price-details")
function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";

  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  //you can also use getElementById
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderPrice(state.Patty,ingredients.Patty)
  renderIngredientsBoard(state.Patty,document.querySelector(".item1"))
  renderButtons(state.Patty , document.querySelector(".btn-patty"))
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderPrice(state.Cheese,ingredients.Cheese)
  renderIngredientsBoard(state.Cheese,document.querySelector(".item2"))
  renderButtons(state.Cheese , document.querySelector(".btn-cheese"))
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderPrice(state.Tomatoes,ingredients.Tomatoes)
  renderIngredientsBoard(state.Tomatoes,document.querySelector(".item3"))
  renderButtons(state.Tomatoes , document.querySelector(".btn-tomatoes"))
  renderAll();
};


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderPrice(state.Onions,ingredients.Onions)
  renderIngredientsBoard(state.Onions,document.querySelector(".item4"))
  renderButtons(state.Onions , document.querySelector(".btn-onions"))
  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderPrice(state.Lettuce,ingredients.Lettuce)
  renderIngredientsBoard(state.Lettuce,document.querySelector(".item5"))
  renderButtons(state.Lettuce , document.querySelector(".btn-lettuce"))
  renderAll();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderButtons(e,i){
  if(e){
    i.classList.add("active")
  }else{
    i.classList.remove("active")
  }
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard(e,i){
  if (e){
    i.style.display = "block"
  }else{
    i.style.display = "none"
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients


function renderPrice(e,Ingredient){
  var TotalPrice = Number(document.querySelector(".price-details").innerHTML)

  if (e){
    TotalPrice += Ingredient
  }else{
    TotalPrice -= Ingredient
  }

  document.querySelector(".price-details").innerHTML = TotalPrice
}


