let products=document.querySelector(".products");
let carts=document.querySelector(".cart");
let list=document.querySelector(".list");

let product=[
    {id:1,name:"Product-1",price:100,Q:0},
    {id:2,name:"Product-2",price:200,Q:0},
    {id:3,name:"Product-3",price:300,Q:0},
    {id:4,name:"Product-4",price:400,Q:0}
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
    <span class="item_name">${item.name}</span>
    <span class="item_price">Rs.${item.price}</span>
    <span class="quantity">
    <span onclick="decrement(${item.id})">-</span>
    ${item.Q}
    <span onclick="increment(${item.id})">+</span>
    </span>`;
    div1.style.display="flex";
    div1.style.justifyContent="space-between";
    div1.style.alignItems="center";
    div1.style.border="2px solid black";
    div1.style.width="72%";
    div1.style.height="50px";
    div1.style.margin="7%";
    div1.style.padding="2% 7%";
    div1.style.textAlign="center";
    div1.style.border="2px solid black";
   
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
        // if(cart.length<1)
        // {
        //     let p2=document.createElement("p");
        //     carts.appendChild(p2);
        // p2.innerText="Nothing is added";
        // }

        cart.forEach(function(it){
            if(it.Q>0){
            let div2=document.createElement("div");
            div2.innerHTML=`<span class="item_name2">${it.name}</span>
            <span class="item_total">${it.price}*${it.Q}</span>`;
            carts.appendChild(div2); 
            div2.style.display="flex";
            div2.style.justifyContent="space-between";
            div2.style.alignItems="center";
            div2.style.border="2px solid black";
            div2.style.width="72%";
            div2.style.height="50px";
            div2.style.margin="7%";
            div2.style.padding="2% 7%";
            div2.style.textAlign="center";
            div2.style.border="2px solid black";
            }
        })
        
        console.log(cart.length+"$");
        let total=cart.reduce(function(accumulator,currentvalue){
            return accumulator+currentvalue.price*currentvalue.Q;
        },0);

        if(total>0){
        carts.innerHTML+=`<span class="total">TOTAL:  ${total}</span>`;
        }
    }
    }
    let count=0;
    list.addEventListener('click',function(operation){
        count++;
        if(count%2==0){
            products.style.display="block";
            carts.style.display="none";
            list.innerText="CART";
        }
        else{
            products.style.display="none";
            // cartdata("");
            carts.style.display="block";
            carts.style.border="2px solid black";
            list.innerText="PRODUCTS";
        }
    });
    display();
    cartdata("");