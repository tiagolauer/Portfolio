export default function initMenuTransition() {
    const nav = document.querySelector('nav');
  
    function transitionMenu() {
      nav.classList.toggle("fixed", window.pageYOffset > 0);
    }
  
    window.addEventListener('scroll', transitionMenu);
  }