async function customer() {
  try {
    const response = await fetch(
      `http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/api/customers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      let result = await response.json();
      let customer = result.data;

      customer.forEach((e) => {
        let row = document.createElement("tr");
        row.innerHTML = `
                    <td>${e.id}</td>
                    <td>${e.name}</td>
                    <td> <img src="http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/${e.photo}" width="50" > </td>
                    <td>${e.phone}</td>
                    <td>${e.email}</td>
                    <td>${e.address}</td>
                    <td>${e.notes}</td>
                    <td>
                          <button onclick="customerDelete(${e.id},this)" >De</button>
                          <a href="./showData.html?id=${e.id}" > <button>Show</button> </a>
                          <a href="./update.html?id=${e.id}" > <button>Update</button> </a>
                    </td>
                  
                   `;
        document.querySelector("tbody").appendChild(row);
      });
    } else {
      document.getElementById(
        "error"
      ).innerText = `Fetch error: ${response.status}`;
    }
  } catch (error) {
    document.getElementById("error").innerText = `Error: ${error.message}`;
  }
}
customer();

async function customerDelete(id, btn) {
  try {
    const response = await fetch(
      `http://didar.intelsofts.com/Laravel_Vue/B_Backend/public/api/customers/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (response.ok) {
      const row = btn.closest("tr");
      row.remove();
    } else {
      document.getElementById("error").innerText = `Error:${response.status}`;
    }
  } catch (error) {
    document.getElementById("error").innerText = `Error:${error.message}`;
  }
}
