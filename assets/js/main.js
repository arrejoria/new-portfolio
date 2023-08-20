console.log("JS Loaded");

document.addEventListener('DOMContentLoaded', () => {
  const avatarCard = document.querySelector(".card__content");
  const avatarBubble = document.getElementById("avatarBubble");

  function addEvent(event, element, callback) {
    element.addEventListener(event, callback);
  }

  function showBubble() {
    const avatarBubbleTop = avatarBubble.offsetTop + 500;
    if (window.scrollY >= avatarBubbleTop) {
      avatarBubble.classList.replace("hidden", "show");
    } else {
      avatarBubble.classList.replace("show", "hidden");
    }
  }

  function handleAvatarMessage() {
    function setMessage(message) {
      avatarBubble.textContent = message;
    }

    function firstMessage() {
      setMessage("Cool!");
    }

    function secondMessage() {
      setMessage("Thank you!");
    }

    function attachMessageEvents() {
      addEvent('mouseover', avatarCard, firstMessage);
      addEvent('mouseleave', avatarCard, secondMessage);
    }

    attachMessageEvents();
  }

  window.addEventListener("scroll", showBubble);
  handleAvatarMessage();
});

// Skills Section Scripts 

// Selecciona los contenedores de tecnología
const stackGroup = document.querySelectorAll('.stack__category');

// Configura las animaciones iniciales
stackGroup.forEach(container => {
  gsap.set(container, { opacity: 0, y: 50 });
});

// Función para manejar el desplazamiento
function handleScroll() {
  stackGroup.forEach(container => {
    const containerPosition = container.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight * 0.8;

    if (containerPosition < scrollPosition) {
      gsap.to(container, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
    } else {
      gsap.to(container, { opacity: 0, y: 50, duration: 0.5, ease: 'power2.out' });
    }
  });
}

// Asigna la función de manejo de desplazamiento al evento de scroll
window.addEventListener('scroll', handleScroll);

// Llama a la función una vez al cargar la página para mostrar elementos visibles
handleScroll();

