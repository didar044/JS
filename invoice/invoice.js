let products = [];
async function api() {
         

        async function api() {
            let response = await fetch(`http://didar.intelsofts.com/Laravel_React/B_POS/public/api/products`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                let result = await response.json();
                products = result.data;
            } else {
                console.error("Failed to fetch products");
            }
        }
        api();

}
api();

function add() {
    const options = products.map(p => `<option value="${p.id}" data-price="${p.price}">${p.name}</option>`).join('');

    let row = document.createElement('tr');
    row.innerHTML = `
          <td></td>
        <td>
           <select onchange="setPrice(this)">
                <option value="">Select Product</option>
                ${options}
            </select>
        </td>
        <td><input type="text" class="price" readonly></td>
        <td><input oninput="rowCalculate(this)" type="text" value="1" class="unit"></td>
        <td><input oninput="rowCalculate(this)" type="text" class="amount" value="0" readonly></td>
        <td><button onclick="rowdelete(this)">✖</button></td>
    `;
    document.querySelector('tbody').appendChild(row);
}

function setPrice(select) {
    const selectedOption = select.options[select.selectedIndex];
    const price = selectedOption.getAttribute('data-price');

    const row = select.closest('tr');
    row.querySelector('.price').value = price;
    
    rowCalculate(row.querySelector('.unit'));
   
}


function rowdelete(button){
        let row=button.closest('tr');
        row.remove();
}

function rowCalculate(input){
    const row = input.closest('tr');
     const price=+row.querySelector('.price').value;
     const unit=+row.querySelector('.unit').value;
     let amount=price*unit
     row.querySelector('.amount').value=amount;
     calculateTotal();
}

function calculateTotal(){
    let totalamount = 0;
    const amountFields = document.querySelectorAll('.amount');
    amountFields.forEach(input => {
        totalamount += parseFloat(input.value) || 0;
    });
    document.getElementById('totalamount').innerText = totalamount;
    grandtotal()
}

function grandtotal(){
    let totalamount=+document.getElementById('totalamount').innerText;
    //let discount=+document.getElementById('discount').value;
    let dc=+document.getElementById('discount').value;
    let discount=dc/100;
    let gTotal=totalamount-(totalamount* discount);
    document.getElementById('grand-total').innerText=gTotal;
}





