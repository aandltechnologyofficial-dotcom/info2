/* ================================
   HERO DYNAMIC TYPING EFFECT
================================ */
const texts = [
  "Modern Websites",
  "UI / UX Designs",
  "Business Web Apps",
  "Professional Portfolios"
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 1500;
const dynamicText = document.getElementById("dynamic-text");

function typeText() {
  if (!dynamicText) return;
  if (charIndex < texts[textIndex].length) {
    dynamicText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  if (!dynamicText) return;
  if (charIndex > 0) {
    dynamicText.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (dynamicText) typeText();
});

/* ================================
   TEAM CARD HOVER EFFECT
================================ */
const teamCards = document.querySelectorAll(".team-card");
teamCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
    card.style.transition = "0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

/* ================================
   FOOTER YEAR AUTO UPDATE
================================ */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

/* ================================
   CONTACT FORM INLINE THANK-YOU
================================ */
const contactForm = document.getElementById("contact-form");
const thankYouMsg = document.getElementById("thankyou-message");

if (contactForm && thankYouMsg) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Stop default submission

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields ❗");
      return;
    }

    // Send message via FormSubmit AJAX
    fetch("https://formsubmit.co/ajax/aandltechnologyofficial@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: "New Client Message - A&L Tech"
      })
    })
    .then(response => response.json())
    .then(data => {
      thankYouMsg.style.display = "block"; // show thank-you
      contactForm.reset(); // clear form
    })
    .catch(error => {
      alert("Oops! Something went wrong. Please try again.");
      console.error(error);
    });
  });
}

// PAGE LOADER (FIRST VISIT ONLY)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Check if loader already shown
  if (!sessionStorage.getItem("loaderShown")) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      sessionStorage.setItem("loaderShown", "true");

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 1500); // loader duration
  } else {
    loader.style.display = "none";
  }
});

