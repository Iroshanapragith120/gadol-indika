// Account data for LegitFF Shop - Premium Free Fire Accounts
const accounts = [
    {
        id: 1,
        name: "FF Elite 01",
        level: 75,
        price: 89.90,
        category: "pro",
        image: "http://static.photos/gaming/640x360/101",
        features: ["30 Skins Raras", "Passe S8+S9+S10", "Evo M1887 Nível 7", "Personagem Chrono"],
        badge: "POPULAR"
    },
    {
        id: 2,
        name: "FF God 01",
        level: 92,
        price: 199.90,
        category: "god",
        image: "http://static.photos/gaming/640x360/102",
        features: ["80+ Skins", "Todos os Passes", "Evo Weapons Max", "Bundle Angelical"],
        badge: "TOP"
    },
    {
        id: 3,
        name: "FF Starter 01",
        level: 42,
        price: 49.90,
        category: "iniciante",
        image: "http://static.photos/gaming/640x360/103",
        features: ["10 Skins", "Passe S12", "Evo MP40 Nível 4", "Personagem DJ Alok"],
        badge: null
    },
    {
        id: 4,
        name: "FF Elite 02",
        level: 68,
        price: 79.90,
        category: "pro",
        image: "http://static.photos/gaming/640x360/104",
        features: ["25 Skins Raras", "Passe S6+S7", "Evo M1014 Nível 6", "Personagem K"],
        badge: null
    },
    {
        id: 5,
        name: "FF Elite 03",
        level: 82,
        price: 119.90,
        category: "pro",
        image: "http://static.photos/gaming/640x360/105",
        features: ["45 Skins Raras", "Passe S4 ao S15", "Evo AK Nível 7", "Bundle Samurai"],
        badge: "PROMO"
    },
    {
        id: 6,
        name: "FF God 02",
        level: 88,
        price: 179.90,
        category: "god",
        image: "http://static.photos/gaming/640x360/106",
        features: ["60+ Skins", "Passe S1 ao S20", "Evo Weapons Max", "Personagem Todos"],
        badge: null
    },
    {
        id: 7,
        name: "FF Ultra 01",
        level: 95,
        price: 249.90,
        category: "elite",
        image: "http://static.photos/gaming/640x360/107",
        features: ["100+ Skins", "Passes Completo", "Coleção Completa", "Bundle Aniversário"],
        badge: "RARO"
    },
    {
        id: 8,
        name: "FF Starter 02",
        level: 38,
        price: 39.90,
        category: "iniciante",
        image: "http://static.photos/gaming/640x360/108",
        features: ["8 Skins", "Passe S18", "Evo UMP Nível 3", "Personagem Wukong"],
        badge: "OFERTA"
    },
    {
        id: 9,
        name: "FF Pro 01",
        level: 55,
        price: 69.90,
        category: "pro",
        image: "http://static.photos/gaming/640x360/109",
        features: ["18 Skins", "Passe S14+S16", "Evo M1887 Nível 5", "Personagem Skyler"],
        badge: null
    }
];

// DOM Elements
const accountsGrid = document.getElementById('accounts-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const statsCounters = document.querySelectorAll('.stats-counter');

// Render accounts
function renderAccounts(filter = 'all') {
    const filteredAccounts = filter === 'all' 
        ? accounts 
        : accounts.filter(acc => acc.category === filter);
    
    accountsGrid.innerHTML = filteredAccounts.map(account => {
        const badgeHtml = account.badge 
            ? `<div class="absolute top-4 left-4 bg-gradient-to-r from-ff-orange to-ff-gold text-black font-bold text-xs px-3 py-1 rounded-full">${account.badge}</div>` 
            : '';
        
        return `
            <div class="glass-effect rounded-2xl overflow-hidden card-hover group">
                <div class="relative">
                    ${badgeHtml}
                    <img src="${account.image}" alt="${account.name}" class="w-full h-48 object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-ff-dark via-transparent to-transparent"></div>
                    <div class="absolute bottom-4 left-4 right-4">
                        <div class="flex items-center justify-between">
                            <h3 class="font-orbitron font-bold text-xl">${account.name}</h3>
                            <div class="flex items-center gap-1 bg-ff-orange/20 px-2 py-1 rounded-lg">
                                <i data-lucide="bar-chart" class="w-4 h-4 text-ff-orange"></i>
                                <span class="text-sm font-semibold">Lvl ${account.level}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <ul class="space-y-2 mb-6">
                        ${account.features.map(feat => `
                            <li class="flex items-center gap-2 text-gray-300 text-sm">
                                <i data-lucide="check-circle" class="w-4 h-4 text-green-500 flex-shrink-0"></i>
                                ${feat}
                            </li>
                        `).join('')}
                    </ul>
                    <div class="flex items-center justify-between">
                        <div>
                            <span class="text-gray-400 text-sm">Preço</span>
                            <div class="text-2xl font-bold text-ff-orange">R$ ${account.price.toFixed(2)}</div>
                        </div>
                        <a href="https://wa.me/5511999999999?text=Quero%20comprar%20a%20conta%20${account.name}" target="_blank" class="bg-gradient-to-r from-ff-orange to-ff-gold text-black font-bold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-ff-orange/50 transition-all transform hover:scale-105 flex items-center gap-2">
                            Comprar
                            <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Re-initialize Lucide icons
    lucide.createIcons();
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => {
            b.classList.remove('active', 'bg-ff-orange', 'text-black');
            b.classList.add('bg-ff-gray', 'text-white');
        });
        
        // Add active class to clicked
        btn.classList.remove('bg-ff-gray', 'text-white');
        btn.classList.add('active', 'bg-ff-orange', 'text-black');
        
        // Filter accounts
        renderAccounts(btn.dataset.filter);
    });
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            mobileMenu.classList.add('hidden');
        }
    });
});

// Animated counters
function animateCounters() {
    statsCounters.forEach(counter => {
        const target = +counter.dataset.target;
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for counters
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe stats section
const statsSection = document.querySelector('.stats-counter').closest('div').parentElement;
if (statsSection) {
    observer.observe(statsSection);
}

// Navbar scroll effect moved to main scroll event above

// Cookie consent
const cookieBanner = document.getElementById('cookie-banner');
const acceptCookiesBtn = document.getElementById('accept-cookies');

function showCookieBanner() {
    setTimeout(() => {
        cookieBanner.classList.remove('translate-y-full');
    }, 1000);
}

acceptCookiesBtn.addEventListener('click', () => {
    cookieBanner.classList.add('translate-y-full');
    localStorage.setItem('cookiesAccepted', 'true');
});

// Check if cookies were already accepted
if (!localStorage.getItem('cookiesAccepted')) {
    showCookieBanner();
}

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    // Show/hide back to top button
    if (window.scrollY > 500) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
    
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg', 'shadow-ff-orange/5');
    } else {
        nav.classList.remove('shadow-lg', 'shadow-ff-orange/5');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderAccounts();
    lucide.createIcons();
});