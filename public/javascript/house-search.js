
async function houseSearch(event) {
  event.preventDefault();
  const city = document.querySelector("#search").value
  const location = document.querySelector('option[value="AL"]').value;
 console.log(city + " " + location)
  if (city && location) {
    const response = await fetch("/api/forsale", {
      method: "post",
      body: JSON.stringify({
        city,
        location,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("success");
    } else {
        alert(response.statusText)
    }
  }
}


document.querySelector(".btn-search").addEventListener('click', houseSearch)


