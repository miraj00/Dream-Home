// const api_Key = "46c4c85120mshb128887db4ffa70p145b34jsn9d69bb1b5a1f";

fetch(
  "https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=200&sort=relevance",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
      "x-rapidapi-key": `${api_Key}`,
    },
  }
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
