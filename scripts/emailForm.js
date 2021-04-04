const emailForm = document.querySelector('.emailForm')

/* send "get updates" links to email form */
const emailInput = emailForm.querySelector('.emailForm--inputBox')
const getUpdatesLinks = document.querySelectorAll('.getUpdates')
for (const link of getUpdatesLinks) {
    link.addEventListener('click', () => emailInput.focus())
}

/* update email form redirect URL with browser's exact location */
const emailRedirect = emailForm.querySelector('input[name="slap_redirect"]')
emailRedirect.value = location.href
