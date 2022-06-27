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
    price : 1,
    image: "assets/icons/001-beetroot.svg",
    alt :"beetroot",
    amount : 0
  },
  {
    id : 2 ,
    name :"carrot",
    price : 1,
    image : "assets/icons/002-carrot.svg",
    alt :"carrot",
    amount : 0
  },
  {
    id : 3 ,
    name :"apple",
    price : 1,
    image : "assets/icons/003-apple.svg",
    alt :"apple",
    amount : 0
  },
  {
    id : 4 ,
    name :"apricot",
    price : 1,
    image : "assets/icons/004-apricot.svg",
    alt :"apricot"
  },
  {
    id : 5 ,
    name :"avocado",
    price : 1,
    image : "assets/icons/005-avocado.svg",
    alt : "avocado"
  }, 
  {
    id : 6 ,
    name :"bananas",
    price : 1,
    image : "assets/icons/006-bananas.svg",
    alt : "bananas"
  }, 
  {
    id : 7 ,
    name :"bell-pepper",
    price : 1,
    image : "assets/icons/007-bell-pepper.svg",
    alt : "bell-pepper"
  },
  {
    id : 8 ,
    name :"berry",
    price : 1,
    image : "assets/icons/008-berry.svg",
    alt :"berry"
  },
  {
    id : 9 ,
    name :"blueberry",
    price : 1,
    image : "assets/icons/009-blueberry.svg",
    alt :"blueberry"
  },
  {
    id : 10 ,
    name :"eggplant",
    price : 1,
    image : "assets/icons/010-eggplant.svg",
    alt :"eggplant"
  },
]
}



function render(){

  
  displayStoreItems()
  displayCartItems()
  renderTotal()
  plusCount()
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
  
 for(let item of state.storeItems) {
  let ulEl = document.querySelector(".store--item-list")

  let liEl = document.createElement("li")
  
  let divEl = document.createElement("div")
  divEl.className = "store--item-icon"
  
  let imgEl = document.createElement("img")
  imgEl.src = item.image
  imgEl.alt = item.alt
  
  let btnEl = document.createElement("button")
  btnEl.textContent = "Add to cart"

  ulEl.append(liEl)
  liEl.append(divEl,btnEl)
  divEl.append(imgEl)
}
}


function displayCartItems(){
  let ulEl = document.querySelector(".cart--item-list")
  

  for (let item of state.storeItems){
    ulEl.textContent = ""
   let liEl = document.createElement("li")
   let imgEl = document.createElement("img")
   imgEl.className = "cart--item-icon"
   imgEl.src = item.image
   imgEl.alt = item.alt

   let pEl = document.createElement("p")
   pEl.textContent = item.name
  
   let minusBtnEl = document.createElement("button")
   minusBtnEl.className = "quantity-btn remove-btn center"
   minusBtnEl.textContent = "-"

   let spanEl = document.createElement("span")
   spanEl.className = "quantity-text center"
   spanEl.textContent = "0"
  
   let plusBtnEl = document.createElement("button")
   plusBtnEl.className = "quantity-btn add-btn center"
   plusBtnEl.textContent = "+"
   ulEl.append(liEl)
   liEl.append(imgEl,pEl,minusBtnEl,spanEl,plusBtnEl)}
}


function plusCount(){
  let plusBtnEl = document.querySelector(".quantity-btn.add-btn.center")
  plusBtnEl.addEventListener("click",function () {
   let spanEl = document.querySelector(".quantity-text.center")
   
   spanEl.textContent = amount + 1
   
  } )
}

function minusCount(){}


    
