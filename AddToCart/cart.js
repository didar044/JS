
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){
    cart.push({name:name,price:price});

     localStorage.setItem("xyz", JSON.stringify(cart) );

    let display="";
    let total=0;
    for(let item of cart){
        display += `${item.name} - $${item.price} <button onclick="removeItem(${index})">Remove</button><br>`;
        total=total+item.price;
    }
    display+="<br>Total: $"+ total + "<br>";
    document.getElementById("xyz").innerHTML=display;
}



let count = 1;
function add(){
    let row =document.createElement("tr");
   
    row.innerHTML=`
       <td>${count++}</td>
       <td style="border:2px solid white;padding:5px; background: green; color:white ">Item 1</td>
       <td style="border:2px solid white;padding:5px; background: green; color:white ">Item 2</td>
       <td style="border:2px solid white;padding:5px; background: green; color:white ">Item 3</td>
       <td style="border:2px solid white;padding:5px; background: green; color:white ">Item 4</td>
       <td><button onClick="re(this)" style="border:2px solid white;padding:5px; background: green; color:white ">*</button></td>
       
    `
    document.getElementById('row').appendChild(row);
};

function re(button){
    let row=button.closest("tr");
    row.remove();
}
