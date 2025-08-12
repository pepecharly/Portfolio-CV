// scripts/modules/docx-generator.js
window.generateDOCX = () => {
    const { Document, Paragraph, TextRun, Packer } = docx;

    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                new Paragraph({
                    text: "Curriculum Vitae",
                    heading: "Heading1",
                    thematicBreak: true
                }),
                ...getAboutSection(),
                ...getExperienceSection(),
                ...getSkillsSection(),
                ...getCoursesSection(),
                ...getProjectsSection(),
                ...getContactSection()
            ]
        }]
    });

    Packer.toBlob(doc).then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cv-${getCurrentName().toLowerCase().replace(/\s+/g, '-')}.docx`;
        a.click();
    });
};

function getAboutSection() {
    const aboutText = document.getElementById('aboutText')?.innerText || '';
    return [new Paragraph({ text: "Acerca de mí", heading: "Heading2" }),
            new Paragraph(aboutText)];
}

function getExperienceSection() {
    const items = Array.from(document.querySelectorAll('#experienceList .project-card')).map(el => {
        const title = el.querySelector('.position-badge')?.textContent || '';
        const company = el.querySelector('.company-bold')?.textContent || '';
        const period = el.querySelector('.project-period')?.textContent || '';
        const desc = el.querySelector('.project-description')?.textContent || '';
        return new Paragraph(`${title} - ${company} (${period})\n${desc}`);
    });
    return [new Paragraph({ text: "Experiencia", heading: "Heading2" }), ...items];
}

function getSkillsSection() {
    const items = Array.from(document.querySelectorAll('#skillsList .skill-item')).map(el => {
        const tool = el.querySelector('.skill-tool')?.textContent || '';
        const level = el.querySelector('.skill-level-text')?.textContent || '';
        return new Paragraph(`${tool}: ${level}`);
    });
    return [new Paragraph({ text: "Habilidades", heading: "Heading2" }), ...items];
}

function getCoursesSection() {
    const items = Array.from(document.querySelectorAll('#courseList .project-card')).map(el => {
        const course = el.querySelector('.course-badge')?.textContent || '';
        const school = el.querySelector('.institution-bold')?.textContent || '';
        const period = el.querySelector('.project-period')?.textContent || '';
        return new Paragraph(`${course} - ${school} (${period})`);
    });
    return [new Paragraph({ text: "Cursos", heading: "Heading2" }), ...items];
}

function getProjectsSection() {
    const items = Array.from(document.querySelectorAll('#projectList .project-card')).map(el => {
        const title = el.querySelector('.project-title')?.textContent || '';
        const desc = el.querySelector('.project-description')?.textContent || '';
        return new Paragraph(`${title}\n${desc}`);
    });
    return [new Paragraph({ text: "Proyectos", heading: "Heading2" }), ...items];
}

function getContactSection() {
    const items = Array.from(document.querySelectorAll('#contactList .contact-item a')).map(el => {
        const type = el.closest('.contact-item')?.querySelector('.font-medium')?.textContent || '';
        return new Paragraph(`${type}: ${el.textContent} (${el.href})`);
    });
    return [new Paragraph({ text: "Contacto", heading: "Heading2" }), ...items];
}