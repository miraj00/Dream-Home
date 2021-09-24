async function houseSearch(event) {
  event.preventDefault();
  const city = $("#search").value.toUpperCase();
  const locationElement = $("#location");
  const location = locationElement.options[locationElement.selectedIndex].value;

  console.log(city + " " + location);
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
      console.log(response);
      $(".house-data").empty();
      response.data.listings.forEach((house) => {
        $(".house-data").append(`<div class="col-6 margin-pic">
        
        <article>
        <div class="card-top-img">
                <div>
                <a href=$house.{house.rdc_web_url}>
                <img class="real-pic" src=${house.photo} />
                </a>
                </div>
                </div>
                <div class="card-info">
                <div class="card-header">
                <span class="price">Price : ${house.price}</span>
                </div>
                <div>
                <span class="description">
                    ${house.beds}
                    beds
                    ${house.baths}
                    ba
                    ${house.sqft}
                    sqft 
                    </span>
                    </div>
                    <div>
                    <address class="address">${house.address}</address>
                    </div>
                <div class="card-footer">JLML Real State</div>
                </div>
                </article>
                
                </div>`);
      });
      // console.log("success");
    }
  } else {
    alert(response.statusText);
  }
}

$(".btn-search").on("click", houseSearch);

