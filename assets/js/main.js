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
