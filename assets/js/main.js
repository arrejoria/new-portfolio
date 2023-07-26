console.log('JS Loaded')


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  body.classList.add(currentTheme);
} else {
  body.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }
});



// Avatar Scripts
const avatarCard = document.querySelector('.card__content');
const myAvatar = document.getElementById('myAvatar'), 
      avHair = document.getElementById('hair');


      //Visualizar burbuja al hacer scroll a su altura

      const avatarBubble = document.getElementById('avatarBubble');

      window.addEventListener("scroll", ()=> {
        const avatarBubbleTop = avatarBubble.offsetTop + 500;
        window.scrollY >= avatarBubbleTop ?  avatarBubble.classList.replace('hidden', 'show') : avatarBubble.classList.replace('show', 'hidden');
      });
      avatarCard.addEventListener('mouseover', ()=> {
          avatarBubble.textContent = 'Cool!'
          isHover = false
      })