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

document.getElementById("copy-email-btn").addEventListener("click", () => {
    const email = document.getElementById("email-text").textContent;
    navigator.clipboard.writeText(email);

    const btn = document.getElementById("copy-email-btn");
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy email", 1500);
});

// Contact form 
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent default redirect

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.textContent = "Message sent successfully!";
            status.style.color = "var(--accent)";
            form.reset();
        } else {
            const result = await response.json();
            status.textContent = result.error || "Something went wrong. Please use the mail icon to send the email manually.";
            status.style.color = "var(--accent)";
        }
    } catch (err) {
        status.textContent = "Network error. Try again later.";
        status.style.color = "red";
    }
});
