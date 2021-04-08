function toggleFaq(event) {
    $(event.target).closest('.faq').toggleClass('faq-is-open')
    event.preventDefault()
}

$('.faq--questionBox').click(toggleFaq)
