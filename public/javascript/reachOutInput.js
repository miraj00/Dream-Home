async function inputReachOutHandler(event) {
    event.preventDefault();

    const your_name = document.querySelector('input[id="contact-name"]').value;
    const your_contact_number = document.querySelector('input[id="contact-number"]').value;
    const your_message = document.querySelector('textarea[id="contact-message"]').value.trim();
    


    if (your_name) {   // is this needed??????
        const response = await fetch('/reach-out', {
            
            method: 'POST',
            body: JSON.stringify({
                your_name,
                your_contact_number,
                your_message,

            }),
            
            headers: {
                'Content-Type': 'application/json'   // what's this
            }
            
        });
        console.log(response);
        

        if (response.ok) {
           //  document.location.href = '/confirmationReceived';
             document.location.href = '/message-received';
            //  document.location.replace('/message-received');
        } else {
            alert(response.statusText);
        }
    }



}




document.querySelector('.contact-form').addEventListener('submit', inputReachOutHandler);

