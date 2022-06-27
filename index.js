/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/
const state = {
  storeItems: [{
    id : 1 ,
    name :"beetroot",
    price : 1
  },
  {
    id : 2 ,
    name :"carrot",
    price : 1
  },
  {
    id : 3 ,
    name :"apple",
    price : 1
  },
  {
    id : 4 ,
    name :"apricot",
    price : 1
  },
  {
    id : 5 ,
    name :"avocado",
    price : 1
  }, 
  {
    id : 6 ,
    name :"bananas",
    price : 1
  }, 
  {
    id : 7 ,
    name :"bell-pepper",
    price : 1
  },
  {
    id : 8 ,
    name :"berry",
    price : 1
  },
  {
    id : 9 ,
    name :"blueberry",
    price : 1
  },
  {
    id : 10 ,
    name :"eggplant",
    price : 1
  },
]
}



function render(){

   
  displayStoreItems()
  displayCartItems()
  renderTotal()
}
render()

function renderTotal(){
   let sum = 0;

  for(let total of state.storeItems){
   sum += total.price 
  }
  console.log(sum)
}
function displayStoreItems(){
  
  let ulEl = document.querySelector(".store--item-list")

  let liEl = document.createElement("li")
  
  let divEl = document.createElement("div")
  divEl.className = "store--item-icon"
  
  let imgEl = document.createElement("img")
  imgEl.src ="assets/icons/001-beetroot.svg"
  imgEl.alt = "beetroot"
  
  let btnEl = document.createElement("button")
  btnEl.textContent = "Add to cart"

  ulEl.append(liEl)
  liEl.append(divEl,btnEl)
  divEl.append(imgEl)
}


function displayCartItems(){
  let ulEl = document.querySelector(".cart--item-list")

  let liEl = document.createElement("li")
  let imgEl = document.createElement("img")
  imgEl.className = "cart--item-icon"
  imgEl.src = "assets/icons/001-beetroot.svg"
  imgEl.alt = "beetroot"

  let pEl = document.createElement("p")
  pEl.textContent = "beetroot"
  
  let minusBtnEl = document.createElement("button")
  minusBtnEl.className = "quantity-btn remove-btn center"
  minusBtnEl.textContent = "-"

  let spanEl = document.createElement("span")
  spanEl.className = "quantity-text center"
  spanEl.textContent = "1"
  
  let plusBtnEl = document.createElement("button")
  plusBtnEl.className = "quantity-btn add-btn center"
  plusBtnEl.textContent = "+"
  ulEl?.append(liEl)
  liEl.append(imgEl,pEl,minusBtnEl,spanEl,plusBtnEl)
}


function plusCount(){}
function minusCount(){}


    
