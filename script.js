// Highlight active section in navbar
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Expand project cards
document.querySelectorAll(".expand-btn").forEach(button => {
    button.addEventListener("click", () => {
        const extra = button.nextElementSibling;
        extra.style.display = extra.style.display === "block" ? "none" : "block";
        button.textContent = extra.style.display === "block" ? "Less info" : "More info";
    });
});

document.querySelector(".contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent (demo). Connect this to a backend or email service.");
});

document.getElementById("copy-email-btn").addEventListener("click", () => {
    const email = document.getElementById("email-text").textContent;
    navigator.clipboard.writeText(email);

    const btn = document.getElementById("copy-email-btn");
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy email", 1500);
});
