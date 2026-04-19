(function() {
    var u = 'david', d = 'dhtech.jp', e = u + '@' + d;
    var els = [
        document.getElementById('hero-email'),
        document.getElementById('contact-email')
    ];
    els.forEach(function(el) {
        if (el) { el.href = 'mailto:' + e; el.textContent = e; }
    });
})();
