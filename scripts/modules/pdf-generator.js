// scripts/modules/pdf-generator.js
window.generatePDF = () => {
    const element = document.body;
    const opt = {
        margin: 1,
        filename: `cv-${getCurrentName().toLowerCase().replace(/\s+/g, '-')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
};

function getCurrentName() {
    return document.querySelector('.text-lg.font-bold')?.textContent || 'Perfil Profesional';
}