async function submitData(event) {
    event.preventDefault();
    let name=document.getElementById('name').value; 
    let photo=document.getElementById('photo').files[0]; 
    let phone=document.getElementById('phone').value; 
    let email=document.getElementById('email').value; 
    let address=document.getElementById('address').value; 
    let notes=document.getElementById('notes').value;
    try{
   
       const data=new FormData();
       data.append('name',name);
       data.append('photo',photo);
       data.append('phone',phone);
       data.append('email',email);
       data.append('address',address);
       data.append('notes',notes);

       const response=await fetch(`http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/api/customers`,{
           method:'POST',
           body:data,
       });
       if(response.ok){
          alert('Success');
          window.location.href="./apicall.html";
       }else{
          document.getElementById('adderror').innerText=`Response Error: ${response.status}`;
       }

    }catch(error){
        document.getElementById('adderror').innerText=`Error:${error.message}`;
    }
       

}