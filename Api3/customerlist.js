async function customer() {
       try{
         const response=await fetch(`http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/api/customers`,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
              'Accept':'application/json',
            },
         });
         if(response.ok){
            const result=await response.json();
            const customer=result.data;
            customer.forEach(e=>{
              const row=document.createElement('tr');
              row.innerHTML=`
                  <td>${e.id}</td>
                  <td>${e.name}</td>
                  <td><img src="http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/${e.photo}" width="50"></td>
                  <td>${e.phone}</td>
                  <td>${e.email}</td>
                  <td>${e.address}</td>
                  <td>${e.notes}</td>
                  <td><button onClick="cusDelete(${e.id},this)">delete</button></td>
              `;
              document.querySelector('tbody').appendChild(row);
            });

            //document.getElementById('api').innerText=JSON.stringify(customer,null,2)
         }

       }catch(error){
         document.getElementById('error').innerText=`Error: ${error.message}`;
       }
};
customer();

async function cusDelete(id,btn){
   alert('Are You Sure');
   const response=await fetch (`http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/api/customers/${id}`,{
           method:"DELETE",
           headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
           },
   });

   if(response.ok){
      
         const row=btn.closest('tr'); 
         row.remove();
        // window.location.href='./customerlist.html';  
   };
   
}