
async function houseSearch(event) {
    event.preventDefault();
    const propertyType = document.querySelector("#search").value.trim();
    const location = document.querySelector('#location').value.trim();

    if (propertyType && location) {
        
        const response = await fetch("/api/forsale", {
            method: 'post',
            body: JSON.stringify({
                propertyType,
                location
            })
            
        });
    }


}