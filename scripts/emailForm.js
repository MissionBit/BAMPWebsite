const getUpdatesLinks = document.querySelectorAll('.getUpdates')
const emailInput = document.querySelector('.emailForm--inputBox')

for (const link of getUpdatesLinks) {
    link.addEventListener('click', () => emailInput.focus())
}

function openGoogleForm(event) {
    const input = event.target.closest('.emailForm').querySelector(".emailForm--inputBox")
    const email = input.value
    event.preventDefault()

    window.location.href = (
        'https://docs.google.com/forms/d/e/' +
        '1FAIpQLSc8P8mhGKiwYt87ab5hUlhywRYdZW4fxUVscHmUtsTU37qEcQ' +
        "/viewform?usp=pp_url&entry.359343040=" +
        email
    )
}

const submit = document.querySelector('.emailForm .btnLink')
submit.addEventListener('click', openGoogleForm)
