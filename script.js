/* ================= SCROLL ANIMATION ================= */

const faders = document.querySelectorAll(".fade");
const bars = document.querySelectorAll(".bar div");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });

    bars.forEach(bar => {
        if (bar.getBoundingClientRect().top < window.innerHeight) {
            bar.style.width = bar.dataset.width;
        }
    });
});

// Trigger once on load
setTimeout(() => {
    faders.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
}, 100);

/* ================= CAMEMBERT ================= */

const pie = document.querySelector(".pie");
const previewImg = document.getElementById("preview-img");
const previewText = document.getElementById("preview-text");

if (pie) {
    pie.addEventListener("mousemove", (e) => {
        const rect = pie.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI);
        let deg = (angle + 360) % 360;

        if (deg < 30 || deg >= 330) {
            previewImg.src = "images/cyber.jpg";
            previewText.innerText = "Cybersécurité";
        } else if (deg < 150) {
            previewImg.src = "images/reseau.jpg";
            previewText.innerText = "Réseaux";
        } else if (deg < 270) {
            previewImg.src = "images/basket.jpg";
            previewText.innerText = "Basketball";
        } else {
            previewImg.src = "images/voyage.jpeg";
            previewText.innerText = "Voyage";
        }
    });
}

/* ================= UTILS ================= */

function formatKeywords(text) {
    return text.replace(/(\b[A-Za-z0-9()\/\.\-]+\b)/g, '<span class="keyword">$1</span>');
}

/* ================= SKILLS ================= */

function showSkill(type) {

    const detail = document.getElementById("skill-detail");

    const data = {
        admin: {
            title: "Administrer",
            keywords: "Linux CLI DHCP DNS VLAN STP ACL iptables NAT PAT IMAP SMTP Wireshark FusionInventory",
            text: "Administration systèmes et réseaux à travers la configuration de services réseau et l'analyse de trafic.",
            eval: "Bonne maîtrise opérationnelle des environnements Linux et des services réseau.",
            prog: "Approfondir l'automatisation et les infrastructures complexes."
        },
        connect: {
            title: "Connecter",
            keywords: "RIP OSPF IP SSH Telnet VLAN routage",
            text: "Mise en place de réseaux locaux et multi-sites.",
            eval: "Bonne maîtrise des fondamentaux réseau.",
            prog: "Approfondir les architectures avancées."
        },
        prog: {
            title: "Programmer",
            keywords: "Python HTML CSS JavaScript CSV",
            text: "Développement de scripts et applications simples.",
            eval: "Bon niveau en logique algorithmique.",
            prog: "Améliorer la structuration et les bonnes pratiques."
        },
        dev: {
            title: "Développer",
            keywords: "HTML CSS JS Python PostgreSQL MySQL Git",
            text: "Conception d'applications web complètes.",
            eval: "Capacité à combiner plusieurs technologies.",
            prog: "Approfondir les architectures logicielles."
        },
        secu: {
            title: "Sécuriser",
            keywords: "Kali Linux pentesting firewall ACL Wireshark",
            text: "Approche cybersécurité via pentesting.",
            eval: "Compréhension progressive des vulnérabilités.",
            prog: "Approfondir les techniques avancées."
        }
    };

    const d = data[type];
    if (!d) return;

    detail.innerHTML = `
        <h3>${d.title}</h3>
        <p>${formatKeywords(d.keywords)}</p>
        <p><strong>Description :</strong> ${d.text}</p>
        <p><strong>Auto-évaluation :</strong> ${d.eval}</p>
        <p><strong>Axes de progression :</strong> ${d.prog}</p>
    `;
}

/* ================= EXPERIENCES ================= */

function toggleExperience(card, type) {

    const detail = card.querySelector(".exp-detail");
    const isOpen = !detail.classList.contains("hidden");

    // Close all
    document.querySelectorAll(".exp-card").forEach(c => {
        c.querySelector(".exp-detail").classList.add("hidden");
        c.querySelector(".exp-detail").innerHTML = "";
        c.classList.remove("open");
    });

    if (isOpen) return;

    const data = {
        poste: {
            title: "Employée commerciale",
            company: "Souk Dubai",
            location: "Aulnay-sous-Bois",
            type: "Commerce de détail",
            size: "Petite structure",
            date: "Juin – Août 2024",
            missions: [
                "Accueil et conseil client",
                "Gestion des encaissements",
                "Mise en rayon",
                "Relation client"
            ],
            skills: "Communication, vente, organisation"
        },
        poste2: {
            title: "Stage Assistante RH",
            company: "Groupe La Poste",
            location: "Villemomble",
            type: "Entreprise publique",
            size: "Grande entreprise",
            employees: "Plusieurs dizaines de milliers",
            date: "Février 2020",
            missions: [
                "Traitement de données confidentielles",
                "Gestion documentaire",
                "Utilisation d'outils bureautiques"
            ],
            skills: "Rigueur, confidentialité, organisation"
        }
    };

    const d = data[type];
    if (!d) return;

    detail.innerHTML = `
        <h4>${d.title}</h4>
        <p><strong>Entreprise :</strong> ${d.company}</p>
        <p><strong>Localisation :</strong> ${d.location}</p>
        <p><strong>Type :</strong> ${d.type}</p>
        <p><strong>Taille :</strong> ${d.size}</p>
        ${d.employees ? `<p><strong>Effectif :</strong> ${d.employees}</p>` : ""}
        <p><strong>Période :</strong> ${d.date}</p>
        <p><strong>Missions :</strong></p>
        <ul>
            ${d.missions.map(m => `<li>${m}</li>`).join("")}
        </ul>
        <p><strong>Compétences :</strong> ${d.skills}</p>
    `;

    detail.classList.remove("hidden");
    card.classList.add("open");
}

/* ================= PROJETS ================= */

function toggleProject(card, type) {

    const detail = card.querySelector(".proj-detail");
    const isOpen = !detail.classList.contains("hidden");

    // Close all
    document.querySelectorAll(".proj-card").forEach(c => {
        c.querySelector(".proj-detail").classList.add("hidden");
        c.querySelector(".proj-detail").innerHTML = "";
        c.classList.remove("open");
    });

    if (isOpen) return;

    const data = {
        hygiene: {
            title: "Hygiène informatique",
            img: "images/hygiene.jpg",
            desc: "Vidéo de prévention sur les bonnes pratiques numériques.",
            points: [
                "Sensibilisation cybersécurité",
                "Vulgarisation",
                "Travail en équipe"
            ]
        },
        web: {
            title: "Se présenter sur internet",
            img: "images/web.jpg",
            desc: "Création d'un site web personnel HTML/CSS.",
            points: [
                "Respect des standards W3C",
                "Présentation du parcours",
                "Identité professionnelle"
            ]
        },
        integratif: {
            title: "Projet intégratif",
            img: "images/integratif.jpg",
            desc: "Refonte d'un système d'information sécurisé.",
            points: [
                "Confidentialité / intégrité / disponibilité",
                "Architecture réseau",
                "Services numériques"
            ]
        },
        reseau: {
            title: "Réseau multisites",
            img: "images/reseau1.jpg",
            desc: "Infrastructure réseau pour la Ville de Valence.",
            points: [
                "Virtualisation",
                "Migration serveurs",
                "Active Directory",
                "Interconnexion multisites"
            ]
        },
        comm: {
            title: "Applications communicantes",
            img: "images/app.jpg",
            desc: "Application client/serveur de tirelire numérique.",
            points: [
                "Communication réseau",
                "Base de données PostgreSQL",
                "Interface Tkinter",
                "Gestion utilisateurs"
            ]
        },
        pentest: {
            title: "Pentesting",
            img: "images/pentest.jpg",
            desc: "Audit de sécurité sur un environnement vulnérable.",
            points: [
                "Lab VirtualBox",
                "Kali Linux",
                "Scan Nessus",
                "Exploitation de failles",
                "Rapport professionnel"
            ]
        },
        portfolio: {
            title: "Portfolio",
            img: "images/portfolio.jpg",
            desc: "Ensemble structuré de mes travaux académiques.",
            points: [
                "SAE et projets",
                "Compétences techniques",
                "Travaux pratiques",
                "Préparation stage / carrière"
            ]
        },
        morpion: {
            title: "Morpion Python",
            img: "images/morpion.jpg",
            desc: "Jeu interactif en Python avec mode 2 joueurs.",
            points: [
                "Gestion des tours",
                "Détection de victoire",
                "Interface console",
                "Logique de jeu"
            ]
        },
        snake: {
            title: "Snake Python",
            img: "images/snake.jpg",
            desc: "Jeu Snake avec contrôle clavier et collisions.",
            points: [
                "Déplacement clavier",
                "Gestion des collisions",
                "Croissance dynamique",
                "Score"
            ]
        },
        wifi: {
            title: "Attaque WiFi (lab)",
            img: "images/wifi.jpg",
            desc: "Tests en environnement contrôlé pour comprendre la sécurité WiFi.",
            points: [
                "Analyse de réseaux",
                "Compréhension des vulnérabilités",
                "Utilisation d'outils d'audit",
                "Environnement sécurisé"
            ]
        }
    };

    const d = data[type];
    if (!d) return;

    detail.innerHTML = `
        <h4>${d.title}</h4>
        <img src="${d.img}" class="project-img">
        <p>${d.desc}</p>
        <ul>
            ${d.points.map(p => `<li>${p}</li>`).join("")}
        </ul>
    `;

    detail.classList.remove("hidden");
    card.classList.add("open");
}

/* ================= TERMINAL ================= */

const text = [
    "Chaima@portfolio:~$ whoami",
    "Cybersecurity student",
    "",
    "Chaima@portfolio:~$ skills",
    "Linux • Réseaux • Pentesting • Sécurité",
    "",
    "Chaima@portfolio:~$ goal",
    "Future RSSI"
];

let i = 0;
let j = 0;
let currentLine = "";
const terminal = document.getElementById("terminal-text");

function typeEffect() {
    if (!terminal) return;

    if (i < text.length) {
        if (j < text[i].length) {
            currentLine += text[i][j];
            terminal.innerHTML = currentLine;
            j++;
            setTimeout(typeEffect, 20);
        } else {
            currentLine += "\n";
            i++;
            j = 0;
            setTimeout(typeEffect, 300);
        }
    }
}

typeEffect();