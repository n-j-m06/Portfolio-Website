// =========================
// HERO TEXT ANIMATION
// =========================

const titleElement = document.getElementById("main-title");

const initialTitle = "Hola Amigos!";
const secondTitle = "Welcome to my Universe";

function typeText(text, speed, callback) {
    let index = 0;
    titleElement.textContent = "";

    function type() {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            if (callback) callback();
        }
    }

    type();
}

function eraseText(callback) {
    let current = titleElement.textContent;

    const eraseInterval = setInterval(() => {

        current = current.slice(0, -1);
        titleElement.textContent = current;

        if (current.length === 0) {

            clearInterval(eraseInterval);

            if (callback) callback();
        }

    }, 40);
}

window.addEventListener("load", () => {

    typeText(initialTitle, 120, () => {

        setTimeout(() => {

            eraseText(() => {

                typeText(secondTitle, 80);

            });

        }, 1500);

    });

});

// =========================
// ROTATING ROLES
// =========================

const roles = [
    "AI Engineer",
    "Computer Vision Researcher",
    "Full Stack Developer",
    "Research Intern",
    "Builder of Intelligent Systems",
    "OpenCV Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;

const roleElement = document.getElementById("role");

function rotateRoles() {

    roleElement.style.opacity = 0;

    setTimeout(() => {

        roleElement.textContent = roles[roleIndex];

        roleElement.style.opacity = 1;

        roleIndex = (roleIndex + 1) % roles.length;

    }, 300);
}

rotateRoles();

setInterval(rotateRoles, 2500);

// =========================
// THREE.JS UNIVERSE
// =========================

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document
    .getElementById("canvas-container")
    .appendChild(renderer.domElement);

// =========================
// PARTICLES
// =========================

const particleCount = 2200;

const particlesGeometry =
    new THREE.BufferGeometry();

const positions =
    new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {

    positions[i] =
(Math.random() - 0.5) * 120;

}

particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        positions,
        3
    )
);

const particlesMaterial =
new THREE.PointsMaterial({
    color: 0x00E5FF,
    size: 0.05,
    transparent: true,
    opacity: 0.8
});

const particles =
    new THREE.Points(
        particlesGeometry,
        particlesMaterial
    );

scene.add(particles);

camera.position.z = 20;

// =========================
// MOUSE INTERACTION
// =========================

let targetMouseX = 0;
let targetMouseY = 0;

let mouseX = 0;
let mouseY = 0;

document.addEventListener(
    "mousemove",
    (event) => {

        targetMouseX =
            (event.clientX - window.innerWidth / 2) * 0.00008;

        targetMouseY =
            (event.clientY - window.innerHeight / 2) * 0.00008;

    }
);

// =========================
// ANIMATION LOOP
// =========================

function animate() {

    requestAnimationFrame(animate);

    mouseX += (targetMouseX - mouseX) * 0.02;
    mouseY += (targetMouseY - mouseY) * 0.02;

    // Super slow premium rotation
   particles.rotation.y += 0.00025;
   particles.rotation.x += 0.00008;

    particles.rotation.y += mouseX;
    particles.rotation.x += mouseY;

    // Twinkle effect
    particles.material.opacity =
    0.75 + Math.sin(Date.now() * 0.001) * 0.12;

    renderer.render(scene, camera);

}

animate();

// =========================
// RESIZE HANDLER
// =========================

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);

console.log("Hola Universe Loaded 🚀");

// =========================
// EXPLORE BUTTON
// =========================

const exploreBtn =
document.getElementById("explore-btn");

if(exploreBtn){

    exploreBtn.addEventListener("click",()=>{

        document
        .getElementById("mission")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}
// =========================
// PROFILE CARD REVEAL
// =========================

const profileCard =
document.querySelector(".profile-card");

window.addEventListener("scroll",()=>{

    const trigger =
    window.innerHeight * 0.8;

    const top =
    profileCard.getBoundingClientRect().top;

    if(top < trigger){

        profileCard.classList.add("show");

    }

});
// =========================
// TIMELINE REVEAL
// =========================

const timelineItems =
document.querySelectorAll(".timeline-item");

window.addEventListener("scroll",()=>{

    timelineItems.forEach(item=>{

        const trigger =
        window.innerHeight * 0.85;

        const top =
        item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");

        }

    });

});
// ========================
// TREE OF GROWTH
// ========================

const branches =
document.querySelectorAll(".branch");

branches.forEach(branch=>{

    const node =
    branch.querySelector(".expandable");

    node.addEventListener("click",()=>{

        branch.classList.toggle("active");

    });

});
const projectDetails = {

    chroma:{

        title:"🎨 ChromaSight",

        overview:
        "Patent-track computer vision system developed for real-time colour identification and accessibility support.",

        tech:[
            "Python",
            "OpenCV",
            "TensorFlow Lite",
            "KNN"
        ],

        features:
        "Real-time colour detection, 140+ colour dataset, accessibility-focused design, intelligent classification engine.",

        impact:
        "Developed as a patent-track innovation project."
    },

    expense:{

        title:"💰 Unified Expense Tracker",

        overview:
        "Full-stack expense management application designed to simplify budgeting and financial tracking.",

        tech:[
            "React.js",
            "Node.js",
            "SQL"
        ],

        features:
        "Expense categorization, transaction history, budgeting insights, responsive dashboard.",

        impact:
        "Helps users monitor spending habits and improve financial planning."
    },

    bharat:{

        title:"📊 Bharat Village Intelligence Dashboard",

        overview:
        "Large-scale analytics platform built on Indian census data to generate actionable demographic insights.",

        tech:[
            "FastAPI",
            "PostgreSQL",
            "Streamlit",
            "Python"
        ],

        features:
        "Interactive dashboards, demographic analytics, data visualization, rural intelligence reporting.",

        impact:
        "Processed and visualized over 550,000+ census records."
    },

    privacy:{

        title:"🛡️ Privacy Pulse",

        overview:
        "Privacy-focused monitoring platform designed to increase awareness of digital security and privacy risks.",

        tech:[
            "Python",
            "Encryption",
            "Security Analytics"
        ],

        features:
        "Privacy monitoring, risk assessment, encryption mechanisms, security insights.",

        impact:
        "Promotes safer digital practices and privacy awareness."
    },

    ethos:{

        title:"🎓 EthosLink",

        overview:
        "AI-powered online examination proctoring platform with real-time behavioural analysis.",

        tech:[
            "React.js",
            "FastAPI",
            "OpenCV",
            "MediaPipe",
            "PostgreSQL"
        ],

        features:
        "Facial landmark detection, head pose estimation, quadrant monitoring, warning generation, analytics dashboard.",

        impact:
        "Improves exam integrity through automated monitoring."
    },

    waitsafe:{

        title:"📍 WaitSafe",

        overview:
        "Personal safety monitoring platform featuring emergency communication and geofencing.",

        tech:[
            "Flutter",
            "FastAPI",
            "Python",
            "Twilio"
        ],

        features:
        "GPS tracking, geofencing, emergency alerts, SMS notifications, secure authentication.",

        impact:
        "Enhances personal safety through real-time monitoring."
    },

    legacy:{

        title:"🔐 LegacyCare",

        overview:
        "Secure digital estate management platform for preserving and transferring digital assets.",

        tech:[
            "React.js",
            "Node.js",
            "JWT",
            "RBAC"
        ],

        features:
        "Role-based access control, secure document storage, inheritance workflows.",

        impact:
        "Provides structured and secure digital legacy management."
    },

    vistara:{

        title:"🌍 Vistara",

        overview:
        "Interactive tourism discovery platform offering immersive state-wise exploration experiences.",

        tech:[
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js"
        ],

        features:
        "State exploration, responsive interface, dynamic content management, authentication.",

        impact:
        "Encourages digital tourism exploration."
    },

    specforge:{

        title:"🤖 SpecForge AI",

        overview:
        "Multi-agent AI ecosystem for automating software planning and architecture generation.",

        tech:[
            "Python",
            "LLMs",
            "Multi-Agent Systems"
        ],

        features:
        "Cross-agent auditing, live web grounding, requirement analysis, CI/CD blueprint generation.",

        impact:
        "Accelerates software engineering workflows through AI automation."
    },

    kaatru:{

        title:"🎹 Kaatru-Mozhi",

        overview:
        "Gesture-controlled virtual piano system using computer vision and hand tracking.",

        tech:[
            "Python",
            "OpenCV",
            "MediaPipe"
        ],

        features:
        "Finger tracking, gesture recognition, virtual piano interaction, real-time feedback.",

        impact:
        "Creates a touch-free music interaction experience."
    }

};
const planets =
document.querySelectorAll(".planet");

const modal =
document.querySelector(".project-modal");

const title =
document.getElementById("project-title");

const desc =
document.getElementById("project-description");

planets.forEach(planet=>{

    planet.addEventListener("click",()=>{

        const key =
        planet.dataset.project;

        const project =
        projectDetails[key];

        document.getElementById(
            "viewer-title"
        ).innerText =
        project.title;

        document.getElementById(
            "viewer-overview"
        ).innerText =
        project.overview;

        const techContainer =
document.getElementById(
    "viewer-tech"
);

techContainer.innerHTML = "";

project.tech.forEach(tech => {

    techContainer.innerHTML += `
        <span class="tech-badge">
            ${tech}
        </span>
    `;

});

        document.getElementById(
            "viewer-features"
        ).innerText =
        project.features;

        document.getElementById(
            "viewer-impact"
        ).innerText =
        project.impact;

        document
        .getElementById(
            "project-viewer"
        )
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

document
.getElementById("close-modal")
.addEventListener("click",()=>{

modal.style.display="none";

});