// scripts/app.js
document.addEventListener('DOMContentLoaded', async () => {
    const dynamicContent = document.getElementById('dynamic-content');
    const modules = ['experiencia', 'habilidades', 'proyectos', 'certificaciones', 'contacto'];
    let currentLang = localStorage.getItem('lang') || 'es';

    // Cargar módulos
    for (const mod of modules) {
        try {
            const response = await fetch(`modules/${mod}.html`);
            if (response.ok) {
                const html = await response.text();
                dynamicContent.insertAdjacentHTML('beforeend', html);
            }
        } catch (e) {
            console.error(`Error cargando ${mod}.html`, e);
        }
    }

    // Inicializar traducción
    translatePage(currentLang);
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);

    // Inicializar navegación
    initNavigation();

    // Cargar datos
    await loadInitialData();

    // Renderizar todo
    renderAll();

    // Inicializar formularios
    initForms();

    // Inicializar login
    initLogin();

    // Inicializar selector de temas
    initThemeSelector();

    // Aplicar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'principal';
    applyTheme(savedTheme);
});

// Traducciones
const translations = {
    es: {
        about: 'Acerca de mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        courses: 'Certificaciones',
        projects: 'Proyectos',
        contact: 'Contacto',
        login: 'Login',
        logout: 'Salir',
        edit: 'Editar',
        add: 'Añadir',
        emptyExperience: 'No tienes experiencias agregadas',
        emptySkills: 'No tienes habilidades agregadas',
        emptyProjects: 'No tienes proyectos agregados',
        emptyCourses: 'No tienes cursos agregados',
        emptyContact: 'No tienes medios de contacto agregados',
        position: 'Puesto',
        company: 'Compañía',
        project: 'Proyecto',
        period: 'Periodo',
        country: 'País',
        activities: 'Actividades y logros',
        tools: 'Herramientas',
        course: 'Curso',
        school: 'Institución',
        description: 'Descripción',
        send: 'Enviar mensaje',
        newContact: 'Nuevo contacto',
        name: 'Nombre',
        email: 'Correo Electrónico',
        message: 'Mensaje',
        cancel: 'Cancelar',
        save: 'Guardar',
        delete: 'Eliminar',
        beginner: 'Principiante',
        intermediate: 'Intermedio',
        advanced: 'Avanzado',
        expert: 'Experto'
    },
    en: {
        about: 'About Me',
        experience: 'Experience',
        skills: 'Skills',
        courses: 'Certifications',
        projects: 'Projects',
        contact: 'Contact',
        login: 'Login',
        logout: 'Logout',
        edit: 'Edit',
        add: 'Add',
        emptyExperience: 'You have no experiences added',
        emptySkills: 'You have no skills added',
        emptyProjects: 'You have no projects added',
        emptyCourses: 'You have no courses added',
        emptyContact: 'You have no contact methods added',
        position: 'Position',
        company: 'Company',
        project: 'Project',
        period: 'Period',
        country: 'Country',
        activities: 'Activities and achievements',
        tools: 'Tools',
        course: 'Course',
        school: 'Institution',
        description: 'Description',
        send: 'Send message',
        newContact: 'New contact',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        cancel: 'Cancel',
        save: 'Save',
        delete: 'Delete',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        expert: 'Expert'
    }
};

function translatePage(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });
    updateNavLabels();
}

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', currentLang);
    translatePage(currentLang);
}

function updateNavLabels() {
    const t = translations[currentLang];
    const labels = ['about', 'experience', 'skills', 'courses', 'projects', 'contact', 'login'];
    labels.forEach(label => {
        const item = document.querySelector(`[data-tab="${label}"]`);
        if (item) {
            const icon = item.querySelector('i');
            const text = t[label];
            item.innerHTML = '';
            item.appendChild(icon);
            item.append(` ${text}`);
        }
    });
}