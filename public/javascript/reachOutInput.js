async function inputReachOutHandler(event) {
    event.preventDefault();

    const comment_input = document.getElementById('textarea[id="contact-message"]').ariaValueMax.trim();
    const comment_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];


    if (comment_input) {
        const response = await fetch('/', {
          method: 'POST',
          body: JSON.stringify({
            comment_id,
            comment_input
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }



}




document.querySelector('.contact-form').addEventListener('submit', inputReachOutHandler);

