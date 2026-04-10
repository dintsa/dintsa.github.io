// Translations
const translations = {
    id: {
        nav_about: "Tentang",
        nav_experience: "Pengalaman",
        nav_skills: "Keahlian",
        nav_projects: "Proyek",
        greeting: "Halo, saya",
        title: "Lulusan SMK TJKT & Network Enthusiast",
        bio: "Lulusan SMK jurusan Teknik Jaringan Komputer dan Telekomunikasi dengan minat yang kuat dalam jaringan, virtualisasi, dan pengembangan web dasar. Siap berkontribusi dan berkembang di dunia IT.",
        btn_contact: "Hubungi Saya",
        btn_portfolio: "Lihat Proyek",
        sect_experience: "Pengalaman",
        exp_date: "Okt 2025 - Jan 2026",
        exp_role: "Internship",
        exp_desc: "Mendapatkan pengalaman langsung di industri telekomunikasi, mempelajari infrastruktur jaringan dan pemeliharaan sistem.",
        sect_skills: "Keahlian Utama",
        skill_net_desc: "Pemahaman tentang topologi, routing, dan troubleshooting jaringan.",
        skill_mikro_desc: "Sertifikasi dasar untuk konfigurasi dan manajemen router Mikrotik.",
        skill_vm_desc: "Berpengalaman menggunakan VMWare/VirtualBox untuk simulasi server.",
        skill_code: "Coding Dasar",
        skill_code_desc: "Pengetahuan dasar pemrograman dalam HTML, CSS, JavaScript, dll.",
        sect_projects: "Proyek & Tugas",
        proj_badge1: "Administrasi",
        proj_title1: "Rekap Data PSB",
        proj_desc1: "Melakukan rekapitulasi data Pasang Baru (PSB) pelanggan secara akurat dan efisien untuk pelaporan harian.",
        proj_badge2: "Data Entry",
        proj_title2: "Input Data Harian",
        proj_desc2: "Memasukkan dan mengelola data harian ke dalam sistem database perusahaan secara terstruktur.",
        footer_title: "Mari Terhubung",
        footer_desc: "Tertarik untuk bekerja sama atau sekadar menyapa? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.",
        copyright: "Semua Hak Dilindungi."
    },
    en: {
        nav_about: "About",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_projects: "Projects",
        greeting: "Hello, I am",
        title: "TJKT Vocational Graduate & Network Enthusiast",
        bio: "Vocational High School graduate in Computer Network Engineering and Telecommunications. Strong passion for networking, virtualization, and basic web development. Eager to contribute and grow in the IT industry.",
        btn_contact: "Contact Me",
        btn_portfolio: "View Projects",
        sect_experience: "Experience",
        exp_date: "Oct 2025 - Jan 2026",
        exp_role: "Internship",
        exp_desc: "Gained hands-on experience in the telecommunications industry, learning network infrastructure and system maintenance.",
        sect_skills: "Core Skills",
        skill_net_desc: "Understanding of network topologies, routing, and troubleshooting.",
        skill_mikro_desc: "Basic certification for Mikrotik router configuration and management.",
        skill_vm_desc: "Experienced with VMWare/VirtualBox for server simulations.",
        skill_code: "Basic Coding",
        skill_code_desc: "Basic knowledge of programming using HTML, CSS, JavaScript, etc.",
        sect_projects: "Projects & Tasks",
        proj_badge1: "Administration",
        proj_title1: "PSB Data Recap",
        proj_desc1: "Accurately and efficiently categorized New Installation (PSB) customer data for daily reporting.",
        proj_badge2: "Data Entry",
        proj_title2: "Daily Data Input",
        proj_desc2: "Structurally inputted and managed daily data into the company's database system.",
        footer_title: "Let's Connect",
        footer_desc: "Interested in working together or just saying hi? Don't hesitate to reach out through the contacts below.",
        copyright: "All Rights Reserved."
    }
};

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const iconMoon = document.querySelector('.icon-moon');
const iconSun = document.querySelector('.icon-sun');

// Check local storage for theme
let currentTheme = localStorage.getItem('theme') || 'theme-light';
document.body.classList.add(currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('theme-light')) {
        document.body.classList.replace('theme-light', 'theme-dark');
        currentTheme = 'theme-dark';
    } else {
        document.body.classList.replace('theme-dark', 'theme-light');
        currentTheme = 'theme-light';
    }
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon(currentTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'theme-dark') {
        iconMoon.style.display = 'none';
        iconSun.style.display = 'block';
    } else {
        iconMoon.style.display = 'block';
        iconSun.style.display = 'none';
    }
}

// Language Toggle
const langToggle = document.getElementById('lang-toggle');
const langText = document.querySelector('.lang-text');

let currentLang = localStorage.getItem('lang') || 'id';
updateLanguage(currentLang);

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('lang', currentLang);
    updateLanguage(currentLang);
});

function updateLanguage(lang) {
    document.documentElement.lang = lang;
    langText.textContent = lang === 'id' ? 'EN' : 'ID';
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update specific html attributes if needed
    // e.g. document.querySelector('.some-input').placeholder = ...
}

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

// Scroll Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach((element) => {
    observer.observe(element);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
