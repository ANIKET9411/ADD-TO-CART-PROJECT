let products=document.querySelector(".products");
let carts=document.querySelector(".cart");
let list=document.querySelector(".list");

let product=[
    {id:1,name:"Pepsi",price:20,Q:0,url:"https://i.pinimg.com/originals/bb/2d/2e/bb2d2e9d59dde9f5f3785a2a896faac4.jpg"},
    {id:2,name:"KetchUp",price:50,Q:0,url:"https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/heinz-tomato-ketchup.jpg"},
    {id:3,name:"Lays",price:20,Q:0,url:"https://images.heb.com/is/image/HEBGrocery/002092574?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"},
    {id:4,name:"Oreo",price:10,Q:0,url:"https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/oreo.jpg"}
];
let cart=[];
function increment(ids)
    {
       (product[ids-1].Q)++;
       products.innerHTML='';
       carts.innerHTML='';
       display();
       cartdata(ids,"+");
    }
    function decrement(ids)
    {
        if(product[ids-1].Q!=0)
        {
       (product[ids-1].Q)--;
       products.innerHTML='';
       carts.innerHTML='';
       display();
       cartdata(ids,"-");
        }
    }
    function display(){
        let h1=document.createElement("h1");
        products.appendChild(h1);
        h1.innerText="PRODUCTS";
        product.forEach(function(item){  
    let div1=document.createElement("div");
    div1.innerHTML=`
    <image src="${item.url}"></image>
    <span class="item_name">${item.name}</span>
    <span class="item_price">Rs.${item.price}</span>
    <span class="quantity">
    <span onclick="decrement(${item.id})">-</span>
    ${item.Q}
    <span onclick="increment(${item.id})">+</span>
    </span><span class="colors" onclick="ADD()">ADD TO CART</span>`;
    div1.style.display="flex";
    div1.style.justifyContent="space-between";
    div1.style.alignItems="center";
    div1.style.border="2px solid black";
    div1.style.width="76%";
    div1.style.height="80px";
    div1.style.margin="5%";
    div1.style.padding="2% 7%";
    div1.style.textAlign="center";
    div1.style.border="2px solid white";
    div1.style.boxShadow="0 0 15px 0 white";
   
    products.appendChild(div1); 
})
    }
    function cartdata(newid,che)
    {
        // console.log(product);
        let h1=document.createElement("h1");
        carts.appendChild(h1);
        h1.innerText="CARTS";
        if(newid=="")
        {
            let p1=document.createElement("p");
            carts.appendChild(p1);
        p1.innerText="Nothing is added";
        }
        else{
        let prod=product.find(ele=>ele.id===newid);
        let newcart=cart.find(ele=>ele.id===newid);
        if(newcart && che=="+"){
            newcart.Q++;
        }
        else if(newcart && che=="-"){
            newcart.Q--;
        }
        else
        {
            cart.push({...prod});
        }
        ADD();
        // if(cart.length<1)
        // {
        //     let p2=document.createElement("p");
        //     carts.appendChild(p2);
        // p2.innerText="Nothing is added";
        // }

    }
    }
    let count=0;
    list.addEventListener('click',function(operation){
        count++;
        if(count%2==0){
            products.style.display="block";
            carts.style.display="none";
            list.innerHTML=`<img src="Add_to_cart.png">`;
        }
        else{
            products.style.display="none";
            // cartdata("");
            carts.style.display="inline-block";
            // carts.style.border="2px solid black";
            list.innerHTML=`<p>&#8617;Continue Shopping</p>`;
        }
        // ADD();
    });
    display();
    cartdata("");



    function ADD(){
        carts.innerHTML="";
        let h1=document.createElement("h1");
        carts.appendChild(h1);
        h1.innerText="CARTS";
        if(cart.length>0){
        cart.forEach(function(it){
            if(it.Q>0){
            let div2=document.createElement("div");
            div2.innerHTML=`
            <image src="${it.url}"></image>
            <span class="item_name2">${it.name}</span>
            <span class="item_total">${it.price}*${it.Q}</span>
            <span onclick="decrement(${it.id})">-</span>
    ${it.Q}
    <span onclick="increment(${it.id})">+</span>
    <span onclick="Delete(${it.id})"><i class="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  </svg></i></span>`;
            carts.appendChild(div2); 
            div2.style.display="flex";
            div2.style.justifyContent="space-between";
            div2.style.alignItems="center";
            // div2.style.border="2px solid black";
            div2.style.width="76%";
            div2.style.height="80px";
            div2.style.margin="5%";
            div2.style.padding="2% 7%";
            div2.style.textAlign="center";
            div2.style.boxShadow="0 0 15px 0 white";
        }
        // if(it.Q===0){
        //     cart.splice(it.id-1,1);
        //     cartdata();
        // }
            
        });
    }
        
        // console.log(cart.length+"$");
        let total=cart.reduce(function(accumulator,currentvalue){
            return accumulator+currentvalue.price*currentvalue.Q;
        },0);
        list.innerHTML=`<img src="Add_to_cart.png">`;
        if(total>0){
        carts.innerHTML+=`  <div class="total">TOTAL:  ${total}</div>`;
        }
        // if(count%2==0)
        // {
        //     let cartLen=cart.length;
        //     console.log(cartLen+"$");
        //     if(cartLen>0)
        //     list.innerText=`CART ${cartLen}`;
        // else
        //
        // }
        // cartdata();
    }
    function Delete(deleterow){
        cart.splice(deleterow-1,1);
        ADD();
    }