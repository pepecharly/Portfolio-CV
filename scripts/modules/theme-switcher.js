// scripts/modules/theme-switcher.js
const themes = [
    { id: 'principal', name: 'Verde Pistache', color: '#a2d48c' },
    { id: 'linkedin', name: 'LinkedIn', color: '#0a66c2' },
    { id: 'x', name: 'X (Twitter)', color: '#000000' },
    { id: 'oscuro', name: 'Modo Oscuro', color: '#121212' },
    { id: 'claro', name: 'Modo Claro', color: '#ffffff' },
    { id: 'tiktok', name: 'TikTok Neón', color: '#fe2c55' },
    { id: 'instagram', name: 'Instagram', color: 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)' },
    { id: 'discord', name: 'Discord', color: '#7289da' }
];

window.applyTheme = (themeId) => {
    const themeLink = document.getElementById('theme-style');
    themeLink.href = `styles/themes/${themeId}.css`;
    localStorage.setItem('theme', themeId);
};

function initThemeSelector() {
    const dropdown = document.getElementById('themeDropdown');
    const preview = document.getElementById('themePreview');
    const themeName = document.getElementById('themeName');
    const optionsList = document.getElementById('themeOptions');

    themes.forEach(theme => {
        const li = document.createElement('li');
        li.className = 'flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm';
        li.setAttribute('role', 'option');
        li.setAttribute('data-theme', theme.id);

        const colorBox = document.createElement('span');
        colorBox.className = 'w-4 h-4 rounded mr-3';
        colorBox.style.background = theme.color;
        colorBox.style.backgroundSize = 'cover';

        const text = document.createElement('span');
        text.textContent = theme.name;

        li.appendChild(colorBox);
        li.appendChild(text);
        optionsList.appendChild(li);
    });

    const savedTheme = localStorage.getItem('theme') || 'principal';
    const currentTheme = themes.find(t => t.id === savedTheme) || themes[0];
    applyTheme(savedTheme);
    updateDropdownDisplay(currentTheme);

    dropdown.addEventListener('click', () => {
        optionsList.classList.toggle('hidden');
        dropdown.setAttribute('aria-expanded', optionsList.classList.contains('hidden') ? 'false' : 'true');
    });

    optionsList.addEventListener('click', (e) => {
        const target = e.target.closest('[data-theme]');
        if (!target) return;
        const themeId = target.getAttribute('data-theme');
        const selectedTheme = themes.find(t => t.id === themeId);
        applyTheme(themeId);
        updateDropdownDisplay(selectedTheme);
        optionsList.classList.add('hidden');
        dropdown.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            optionsList.classList.add('hidden');
            dropdown.setAttribute('aria-expanded', 'false');
        }
    });
}

function updateDropdownDisplay(theme) {
    const preview = document.getElementById('themePreview');
    const themeName = document.getElementById('themeName');
    preview.style.background = theme.color;
    preview.style.backgroundSize = 'cover';
    themeName.textContent = theme.name;
}