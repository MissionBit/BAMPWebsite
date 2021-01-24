const getUpdatesLinks = document.querySelectorAll('.getUpdates')
const emailInput = document.querySelector('.emailForm--inputBox')

for (const link of getUpdatesLinks) {
    link.addEventListener('click', () => emailInput.focus())
}
