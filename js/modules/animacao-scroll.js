export default function initAnimationScroll() {
    const sections = document.querySelectorAll("[data-anime='js-scroll']");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation');
            }
        });
    }, { threshold: 0.6 });

    sections.forEach((section) => {
        observer.observe(section);
    });
}