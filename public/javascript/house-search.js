async function houseSearch(event) {
  event.preventDefault();
  const propertyType = document.querySelector("#search").value.trim();
  const location = document.querySelector("#location").value.trim();

  if (propertyType && location) {
    const response = await fetch("/api/forsale", {
      method: "post",
      body: JSON.stringify({
        propertyType,
        location,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
    } else {
        alert(response.statusText)
    }
  }
}


document.querySelector(".search-form").addEventListener('submit' , houseSearch )