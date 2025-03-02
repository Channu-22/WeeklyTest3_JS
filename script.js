
let inventory=[
    {
        name:"product-1",
        price:100,
        quantity:0
    },
    {
        name:"product-2",
        price:200,
        quantity:0
    },
    {
        name:"product-3",
        price:300,
        quantity:0
    }
];

const product=document.querySelector(".product");
let cartInventory = [];

let cartItemContainer = document.querySelector(".cart-item-container");

let cartTotal = document.querySelector(".cart-total");
let totalPrice = document.querySelector("#total-price");
displayProductAll();
function displayProductAll(){
    const fragment=document.createDocumentFragment();
    inventory.forEach((items)=>{
        const itemDiv=document.createElement("div");
        itemDiv.classList.add("items");
        const productName=document.createElement("span");
        const price=document.createElement("span");
        const quantityDiv=document.createElement("div");
        quantityDiv.classList.add("quantityDiv");
        const count=document.createElement("span");
        const plus=document.createElement("span");
        const minus=document.createElement("span");

        productName.innerText=items.name;
        price.innerText=items.price;

        count.innerText=items.quantity;
        plus.innerText="+";
        plus.addEventListener("click",()=>action("+",items,count));
        minus.innerText="-";
        minus.addEventListener("click",()=>action("-",items,count));
        quantityDiv.append(minus,count,plus);

        itemDiv.append(productName,price,quantityDiv);
        fragment.append(itemDiv);
    });
    product.append(fragment);
      
}

function action(sign,object,count){
    if(sign=="+"){
        object.quantity=object.quantity+1;
        count.innerText=object.quantity;
    }
    else if (sign === "-") {
        if (object.quantity > 0) {
            object.quantity = object.quantity - 1;
          count.innerText = object.quantity;
        }
      }
      
    let cartInventory = inventory.filter((object)=>{
        return object.quantity > 0;
    })
   
   
    displayCartItems(cartInventory);
      totalPrice.innerText = "Rs." + cartInventory.reduce((acc,curr)=>{
        return acc + Number(curr.price) * Number(curr.quantity);
    },0)
    
     
    
}
    



function displayCartItems (Array) {
    cartItemContainer.innerHTML =  "";
    let fragment = document.createDocumentFragment();
    Array.forEach((obj)=>{
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("items");

        let cartProduct = document.createElement("span");
        cartProduct.innerText = obj.name;

        let cartItemDetail = document.createElement("span");
        cartItemDetail.innerText = `${obj.quantity} X ${obj.price}`;

        cartItemDiv.append(cartProduct, cartItemDetail);
        fragment.append(cartItemDiv);

    })
    cartItemContainer.append(fragment);
}

