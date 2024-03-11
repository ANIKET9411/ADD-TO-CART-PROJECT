let products = document.querySelector(".products");
let carts = document.querySelector(".cart");
let list = document.querySelector(".list");

let cartoon=[];
let product = [
    { id: 1, name: "Pepsi", price: 20, Q: 0,condi:"false", url: "https://i.pinimg.com/originals/bb/2d/2e/bb2d2e9d59dde9f5f3785a2a896faac4.jpg" },
    { id: 2, name: "KetchUp", price: 50, Q: 0,condi:"false", url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/heinz-tomato-ketchup.jpg" },
    { id: 3, name: "Lays", price: 20, Q: 0,condi:"false", url: "https://images.heb.com/is/image/HEBGrocery/002092574?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0" },
    { id: 4, name: "Oreo", price: 10, Q: 0,condi:"false", url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/oreo.jpg" },
    { id: 5, name: "Kraft Cheese", price: 20, Q: 0,condi:"false", url: "https://th.bing.com/th/id/OIP.ycxchpdGt4VEeAKc-m6bowHaII?rs=1&pid=ImgDetMain" },
    { id: 6, name: "Corn Flakes", price: 50, Q: 0,condi:"false", url: "https://media1.popsugar-assets.com/files/thumbor/JFQaG_6fmJ5I98I-ZUlelS7mk-k/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/08/796/n/42941911/c42f7c9312957a90_corn_flakes/i/Kellogg-Corn-Flakes-3.jpeg" },
    { id: 7, name: "Quaker Oats", price: 100, Q: 0,condi:"false", url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/quaker-oats.jpg" },
    { id: 8, name: "Snickers", price: 10, Q: 0,condi:"false", url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/snickers.jpg" }
];
let cart = [];
function increment(ids) {
    (product[ids - 1].Q)++;
    products.innerHTML = '';
    carts.innerHTML = '';
    display();
    cartdata("");
    ADD();
}
function decrement(ids) {
    if (product[ids - 1].Q != 0) {
        (product[ids - 1].Q)--;
        products.innerHTML = '';
        carts.innerHTML = '';
        display();
        cartdata("");
        ADD();
    }
}
function increments(ids) {
    (product[ids - 1].Q)++;
    products.innerHTML = '';
    carts.innerHTML = '';
    display();
    cartdata(ids);
    ADD();
}
function decrements(ids) {
    if (product[ids - 1].Q != 0) {
        (product[ids - 1].Q)--;
        products.innerHTML = '';
        carts.innerHTML = '';
        display();
        cartdata(ids);
        ADD("*",ids);
    }
}
function display() {
    let h1 = document.createElement("h1");
    products.appendChild(h1);
    h1.innerText = "PRODUCTS";
    product.forEach(function (item) {
        let div1 = document.createElement("div");
        div1.innerHTML = `
    <image src="${item.url}"></image>
    <span class="item_name">${item.name}</span>
    <span class="item_price">Rs.${item.price}</span>
    <span class="quantity">
    <span class="button" onclick="decrement(${item.id})">-</span> <span class="middle">${item.Q} </span><span class="button" onclick="increment(${item.id})">+</span>
    </span><span class="colors" onclick="ADD(${item.id},${item.Q})">ADD TO CART</span>`;
        div1.style.display = "flex";
        div1.style.justifyContent = "space-between";
        div1.style.alignItems = "center";
        div1.style.border = "2px solid black";
        div1.style.width = "76%";
        div1.style.height = "80px";
        div1.style.margin = "5%";
        div1.style.padding = "2% 7%";
        div1.style.textAlign = "center";
        div1.style.border = "2px solid white";
        div1.style.boxShadow = "0 0 15px 0 white";

        products.appendChild(div1);
    })
}
function cartdata(newid="") {
    let h1 = document.createElement("h1");
    carts.appendChild(h1);
    h1.innerText = "CARTS";
    if(newid == "") {
        let p1 = document.createElement("p");
        carts.appendChild(p1);
        p1.innerText = "Nothing is added";
    }
}

let count = 0;

list.addEventListener('click', function (operation) {
    count++;
    if (count % 2 == 0) {
        let lent=cartoon.length;
        console.log(lent+"^");
        products.style.display = "block";
        carts.style.display = "none";
        if(lent>0)
        list.innerHTML = `<img src="Add_to_cart.png"> ${lent}`;
    else
    list.innerHTML = `<img src="Add_to_cart.png">`;
    }
    else {
        
        products.style.display = "none";
        carts.style.display = "inline-block";
        list.innerHTML = `<p>&#8617;Continue Shopping</p> `;
    }
});
display();
cartdata("");


function ADD(condition="",cun) {
    
    if(cun===0)
    {
        alert("Enter an Quantity more than 0");
    }
    else{
        console.log(condition+"con");
    product.forEach(function(con){
        if(condition==="*" && cun===con.id && con.Q===0){
            con.condi="false";
        }
        if(con.id===condition)
        {
            con.condi="true";
            alert("Added to cart successfully");
            if (count % 2 == 0) {
                let lent=cartoon.length;
                lent++;
                console.log(lent+"^");
                products.style.display = "block";
                carts.style.display = "none";
                if(lent>0)
                list.innerHTML = `<img src="Add_to_cart.png"> ${lent}`;
            else
                list.innerHTML = `<img src="Add_to_cart.png">`;
            }
        }
    });
    console.log(product);
    console.log(cart.length+"$");
    product.forEach(function(con){
        if(con.condi==="true")
        {
                cart.push(con);
        }
    });

    console.log(cart);
    console.log(cart.length+"@");
    carts.innerHTML = "";
    
    
    let h1 = document.createElement("h1");
    carts.appendChild(h1);
    h1.innerText = "CARTS";
    console.log(cart.length+"A");
    if (cart.length != 0) {
        cart.forEach(function (it) {
            if (it.Q != 0) {
                console.log(it.id+" (");
                let div2 = document.createElement("div");
                div2.innerHTML = `
            <image src="${it.url}"></image>
            <span class="item_name2">${it.name}</span>
            <span class="item_total">${it.price}*${it.Q}</span>
            <span class="quantity">
            <span class="button" onclick="decrements(${it.id})">-</span><span class="middle">${it.Q}</span>
           <span class="button" onclick="increments(${it.id})">+</span></span>
    <span onclick="Delete(${it.id})"><i class="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  </svg></i></span>`;
                carts.appendChild(div2);
                div2.style.display = "flex";
                div2.style.justifyContent = "space-between";
                div2.style.alignItems = "center";
                div2.style.width = "76%";
                div2.style.height = "80px";
                div2.style.margin = "5%";
                div2.style.padding = "2% 7%";
                div2.style.textAlign = "center";
                div2.style.boxShadow = "0 0 15px 0 white";
            }
            else{
                for(let i=0;i<cart.length;i++)
                {
                    if(cart[i].id===it.id && it.Q===0)
                    {
                        cart.splice(i,1);
                        console.log(cart.length+"aniket");
                        if(cart.length===0){
                        let p2=document.createElement("p");
                        carts.appendChild(p2);
                    p2.innerText="Nothing is added";
                        }
                    }
                }
            }
        });
    }
    else
        {
                let p2=document.createElement("p");
                carts.appendChild(p2);
            p2.innerText="Nothing is added";
    }
    let total = cart.reduce(function (accumulator, currentvalue) {
        return accumulator + currentvalue.price * currentvalue.Q;
    }, 0);
    if (total > 0) {
        carts.innerHTML += `  <div class="total">TOTAL:  ${total}</div>`;
    }
    cartoon=cart;
    cart=[];
    console.log(cartoon);
    console.log(cart);
    }
    
}


function Delete(deleterow) {
    console.log(deleterow+"row");
    
    for(let i=0;i<cartoon.length;i++)
    {
        if(cartoon[i].id===deleterow)
        {
            for(let j=0;j<product.length;j++)
            {
                if(cartoon[i].id===product[j].id)
                {
                product[j].Q = 0;
                product[j].condi="false";
                }
            }
            cartoon.splice(i, 1);
        ADD();      
        products.innerHTML = "";    
        display();
    }

}
}