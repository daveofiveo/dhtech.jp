function toggleCard(button) {
    var card = button.closest('.service-card');
    var body = card && card.querySelector('.service-card-body');
    var chevron = button.querySelector('.service-chevron');
    if (!card || !body || !chevron) return;
    var isOpen = !body.classList.contains('hidden');
    body.classList.toggle('hidden', isOpen);
    chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    button.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.service-card-header').forEach(function(btn) {
        btn.addEventListener('click', function() { toggleCard(btn); });
    });
});
