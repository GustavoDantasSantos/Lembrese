const form = document.getElementById('form_cadastro');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const inputName = document.getElementById('name').value;
    const inputEmail = document.getElementById('e-mail').value;
    const inputPassword = document.getElementById('senha').value;

    const bodySend = {
        name: inputName,
        email: inputEmail,
        password: inputPassword,
    }

    const response = await fetch('http://localhost:3080/user', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(bodySend)
    });

    console.log(response);
});
