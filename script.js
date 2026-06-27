// =========================
// SMOOTH REVEAL ANIMATION
// =========================
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15,
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// =========================
// NAV ACTIVE LINK
// =========================
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// =========================
// TOP BUTTON
// =========================
const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "auto";
    } else {
        topBtn.style.opacity = "0.4";
    }
});

// =========================
// HERO PARALLAX
// =========================
const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;

    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

// =========================
// BUTTON HOVER SCALE
// =========================
const buttons = document.querySelectorAll(".btn, .resume-btn");

buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-3px) scale(1.03)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0px) scale(1)";
    });
});