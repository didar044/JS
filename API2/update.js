async function show() {
  let id = new URLSearchParams(document.location.search).get("id");

  if (!id) {
    document.getElementById("update").innerText = ` ID Not Found: ${id}`;
  }

  try {
      let response=await fetch(`http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/api/customers/${id}`,{
           method:'GET',
           headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
           }
      });
      if(response.ok){
               let result=await response.json();
               document.getElementById('name').value=result.name;
               document.getElementById('sphoto').src=`http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/${result.photo}`;
                document.getElementById('phone').value=result.phone;
                document.getElementById('email').value=result.email;
                document.getElementById('address').value=result.address;
                document.getElementById('notes').value=result.notes;
              

               // document.getElementById('update').innerText=JSON.stringify(result,null,2);
      }else{
         document.getElementById('update').innerText=`Error: ${response.status}`;
      }

  } catch (error) {
    document.getElementById('update').innerText=`Error: ${error.message}`;
  }
}
show();

async function update(event) {
     if (event) event.preventDefault();
    let id = new URLSearchParams(document.location.search).get("id");
    if (!id) {
        document.getElementById("update").innerText = ` ID Not Found: ${id}`;
        return;
    }
      let name=document.getElementById('name').value;
      let photo=document.getElementById('photo').files[0];
      let phone=document.getElementById('phone').value;
      let email=document.getElementById('email').value;
      let address=document.getElementById('address').value;
      let notes=document.getElementById('notes').value;

    try{
        const data=new FormData();
        data.append('_method','PUT')
         data.append('name',name);
         data.append('photo',photo);
         data.append('phone',phone);
         data.append('email',email);
         data.append('address',address);
         data.append('notes',notes);

         let response=await fetch(`http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/api/customers/${id}`,{
              method:'POST',
              body:data
         }); 
         if(response.ok){
            alert('Success Update');
            window.location.href="./apicall.html";
         }else{
            document.getElementById('update').innerText=`Res. Error: ${response.status}`;
         }    
    }catch(error){
        document.getElementById("update").innerText = `Error: ${error.message}`;
    }
}





