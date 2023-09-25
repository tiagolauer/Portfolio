export default function initScrollSuave() {
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    const container = document.querySelector("[data-menu='suave']");
    container.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
            scrollToSection(event);
        }
    });
}