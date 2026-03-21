const translations = {
    id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_exp: "Pengalaman",
        nav_skills: "Keahlian",
        hero_hello: "Halo, Saya",
        hero_role: "Lulusan TJKT | Network Enthusiast & Developer",
        hero_desc: "Membangun koneksi dan menciptakan pengalaman digital melalui jaringan dan kode. Selamat datang di portofolio saya.",
        about_title: "Tentang Saya",
        about_p1: "Saya adalah lulusan SMK jurusan Teknik Jaringan Komputer dan Telekomunikasi (TJKT) dari <strong>SMK Negeri 1 Ampelgading</strong> (2023 - 2026).",
        about_p2: "Saya sangat tertarik dengan dunia teknologi, khususnya pada administrasi jaringan, virtualisasi, serta eksplorasi dalam bidang animasi dan pemrograman (coding). Saya terus belajar dan beradaptasi dengan perkembangan teknologi terkini.",
        exp_title: "Pengalaman",
        exp_role: "Internship - Network Administrator",
        exp_company: "Telkom Pekalongan",
        exp_date: "Oktober 2025 - Januari 2026",
        exp_desc: "Selama masa magang, saya bertanggung jawab atas beberapa tugas penting terkait jaringan dan operasional harian:",
        job_1: "<i class=\"fas fa-check-circle\"></i> Rekap order PSB (Pasang Baru)",
        job_2: "<i class=\"fas fa-check-circle\"></i> Rekap data kendala PSB",
        job_3: "<i class=\"fas fa-check-circle\"></i> Rekap nota pemasangan",
        job_4: "<i class=\"fas fa-check-circle\"></i> Rekap data harian aktivitas PSB",
        skills_title: "Keahlian & Minat",
        skill_1_title: "Virtualization",
        skill_1_desc: "Pemahaman tentang Virtual Machine dan operasional VirtualBox.",
        skill_2_title: "Networking",
        skill_2_desc: "Sertifikasi & keahlian MikroTik MTCNA, routing, dan administrasi jaringan dasar.",
        skill_3_title: "Coding",
        skill_3_desc: "Tertarik pada pemrograman, pengembangan web, dan logika perangkat lunak.",
        skill_4_title: "Animation",
        skill_4_desc: "Minat eksplorasi pada desain animasi dan visual interaktif.",
        footer_text: "© 2026 Achmad Addin Tsakieb. All rights reserved."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_exp: "Experience",
        nav_skills: "Skills",
        hero_hello: "Hello, I am",
        hero_role: "TJKT Graduate | Network Enthusiast & Developer",
        hero_desc: "Building connections and creating digital experiences through networks and code. Welcome to my portfolio.",
        about_title: "About Me",
        about_p1: "I am a graduate of Computer Network and Telecommunication Engineering (TJKT) from <strong>SMK Negeri 1 Ampelgading</strong> (2023 - 2026).",
        about_p2: "I am highly interested in the technology field, particularly in network administration, virtualization, and exploring animation and programming (coding). I continuously learn and adapt to the latest technological advancements.",
        exp_title: "Experience",
        exp_role: "Internship - Network Administrator",
        exp_company: "Telkom Pekalongan",
        exp_date: "October 2025 - January 2026",
        exp_desc: "During my internship, I was responsible for several key networking and daily operational tasks:",
        job_1: "<i class=\"fas fa-check-circle\"></i> Recap of New Installation (PSB) orders",
        job_2: "<i class=\"fas fa-check-circle\"></i> Recap of PSB troubleshooting data",
        job_3: "<i class=\"fas fa-check-circle\"></i> Recap of installation receipts",
        job_4: "<i class=\"fas fa-check-circle\"></i> Recap of daily PSB activity data",
        skills_title: "Skills & Interests",
        skill_1_title: "Virtualization",
        skill_1_desc: "Understanding of Virtual Machines and VirtualBox operations.",
        skill_2_title: "Networking",
        skill_2_desc: "MikroTik MTCNA certification & expertise, routing, and basic network administration.",
        skill_3_title: "Coding",
        skill_3_desc: "Interested in programming, web development, and software logic.",
        skill_4_title: "Animation",
        skill_4_desc: "Interest in exploring animation design and interactive visuals.",
        footer_text: "© 2026 Achmad Addin Tsakieb. All rights reserved."
    }
};

let currentLang = 'id';

function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    
    // Update active button state
    document.getElementById('btn-id').classList.toggle('active', lang === 'id');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    
    // Smooth transition effect
    document.body.style.opacity = '0.7';
    setTimeout(() => {
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        document.body.style.opacity = '1';
    }, 150);
}

document.getElementById('btn-id').addEventListener('click', () => setLanguage('id'));
document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));

// Intersection Observer for Scroll Animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
};

document.addEventListener('DOMContentLoaded', observeElements);
