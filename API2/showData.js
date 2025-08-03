async function show() {
  let id = new URLSearchParams(window.location.search).get("id");
  if (!id) {
    document.getElementById(
      "showtext"
    ).innerText = `Error: ID not found in URL`;
  }

  try {
    let response = await fetch(
      `http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/api/customers/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "Application/json",
          'Accept': "Application/json",
        },
      }
    );
    if (response.ok) {
      let result = await response.json();
      document.getElementById('name').innerText=result.name;
      document.getElementById('phone').innerText=result.phone;
      document.getElementById('email').innerText=result.email;
      document.getElementById('address').innerText=result.address;
      document.getElementById('notes').innerText=result.notes;
      document.getElementById('photo').src=`http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/${result.photo}`;
   
      document.getElementById("showtext").innerText = JSON.stringify( result, null, 1);
    } else {
      document.getElementById( "showtext" ).innerText = `Error Res: ${response.status}`;
    }
  } catch (error) {
    document.getElementById("showtext").innerText = `Error: ${error.message}`;
  }
}
show();
