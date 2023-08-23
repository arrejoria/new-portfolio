console.log("JS Loaded");
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
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
      addEvent("mouseover", avatarCard, firstMessage);
      addEvent("mouseleave", avatarCard, secondMessage);
    }

    attachMessageEvents();
  }

  window.addEventListener("scroll", showBubble);
  handleAvatarMessage();
});

// Skills Section Scripts

// Selecciona los contenedores de tecnología
const stackGroup = document.querySelectorAll(".stack__category");

// Configura las animaciones iniciales
stackGroup.forEach((container) => {
  gsap.set(container, { opacity: 0, y: 50 });
});

// Función para manejar el desplazamiento
function handleScroll() {
  stackGroup.forEach((container) => {
    const containerPosition = container.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight * 0.8;

    if (containerPosition < scrollPosition) {
      gsap.to(container, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(container, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });
}

// Asigna la función de manejo de desplazamiento al evento de scroll
window.addEventListener("scroll", handleScroll);

// Llama a la función una vez al cargar la página para mostrar elementos visibles
handleScroll();

// Skills Section Scripts
const progressBar = document.querySelectorAll("#progressBar");
function handleSkillBar() {
  if (!progressBar) return;

  progressBar.forEach((bar) => {
    const parentNode = bar.closest(".stack__section-skills");
    const skillContainer = bar.closest(".stack__skill");
    gsap.set(bar, { width: 0 }); // Inicializa la barra con ancho cero

    ScrollTrigger.create({
      trigger: bar, // El elemento que activará la animación
      start: "top 90%", // Empieza la animación cuando el 90% superior del elemento esté en el viewport
      onEnter: () => {
        gsap.to(bar, {
          width: bar.getAttribute("aria-valuenow") + "%",
          duration: 1,
        });

        setTimeout(() => {
          gsap.to(skillContainer, { opacity: 1, y: 0, duration: 2, ease: "power2.out" });
        }, 1000);
      },
      onLeaveBack: () => {
        gsap.set(bar, { width: 0 }); // Reinicia la barra cuando se desplaza hacia arriba
      },
    });
  });
}

function handleScrollAnimation(){
  const skillContainers = document.querySelectorAll('[data-scroll]');

  skillContainers.forEach(container => {
    gsap.set(container, { opacity: 0, y: 100 });
    ScrollTrigger.create({
      trigger: container,
      onEnter: () => {
        gsap.to(container, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
      },
      onLeaveBack: () => {
        gsap.set(container, { opacity: 0, y: 100, duration: 0.5, ease: 'power2.out' }); // Reinicia la barra cuando se desplaza hacia arriba
      },
    });
  });
}
handleScrollAnimation()
handleSkillBar();
