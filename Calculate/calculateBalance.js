function javaScripty() {
    let value = parseInt(document.getElementById('v').value);
    let enterValue = parseInt(document.getElementById("ev").value);

   
    if (value < enterValue) {
            alert('Balance Over'); 
            document.getElementById('ans').innerHTML = "<b style='color:red'>Balance Over</b>";
            document.getElementById('rmb').innerHTML = "<b>0</b>";

    } else if ( !enterValue){
            document.getElementById('ans').innerHTML = "0";
            document.getElementById('rmb').innerHTML = "0";  
    } else{
         document.getElementById('ans').innerText = enterValue;
         document.getElementById('rmb').innerText=value-enterValue;

    } 
}
