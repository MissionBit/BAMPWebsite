const emailForm = document.querySelector('.emailForm')

/* send "get updates" links to email form */
const emailInput = emailForm.querySelector('.emailForm--inputBox')
const getUpdatesLinks = document.querySelectorAll('.getUpdates')
for (const link of getUpdatesLinks) {
    link.addEventListener('click', () => emailInput.focus())
}
