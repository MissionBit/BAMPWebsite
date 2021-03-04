function toggleFaq(event) {
    const cls = 'faq-is-open'
    const faq = event.target.closest('.faq')
    const open = faq.classList.contains(cls)

    faq.classList[open ? 'remove' : 'add'](cls)
    event.preventDefault()
}

const faqs = document.querySelectorAll('.faq--questionBox')
for (const faq of faqs) {
    faq.addEventListener('click', toggleFaq)
}
