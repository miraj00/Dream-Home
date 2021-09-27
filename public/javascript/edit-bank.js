async function editFormHandler(event) {
    event.preventDefault();
  
    const branch_name = document.querySelector('input[name="prop-title"]').value.trim();
    const branch_address = document.querySelector('input[name="prop-text"]').value;
    const contact_number = document.querySelector('input[name="prop-contact"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/props/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        branch_name,
        branch_address,
        contact_number
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/bank/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-prop-form').addEventListener('submit', editFormHandler);