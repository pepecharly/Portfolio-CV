# Portfolio/CV Automático

Portfolio profesional con generación automática de PDF y DOCX, múltiples temas visuales y estructura modular.

## ✅ Características

- ✅ Generación automática de PDF y DOCX (offline)
- ✅ 8 temas visuales intercambiables (pistache, LinkedIn, X, oscuro, claro, TikTok, Instagram, Discord)
- ✅ Selector de temas con **iconos de color**
- ✅ Estructura modular fácil de actualizar
- ✅ Diseño responsive y profesional
- ✅ Multilenguaje: Español / Inglés
- ✅ Optimizado para GitHub Pages
- ✅ Sin backend: solo HTML, CSS, JS

## 🚀 Cómo Usar

1. Clona el repositorio
2. Edita los módulos en `modules/` si es necesario
3. Modifica `assets/data/cv-data.json` con tu información
4. Personaliza los estilos en `styles/themes/`
5. Sube a GitHub Pages

## 🛠 Tecnologías

- HTML5, CSS3, JavaScript ES6
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) para PDF
- [docx.js](https://github.com/dolanmiu/docx) para DOCX
- Font Awesome (iconos)
- Tailwind CSS (opcional)

## 📄 Licencia

MIT

## 📁 Estructura
portfolio-cv/
├── index.html
├── modules/
│ ├── experiencia.html
│ ├── habilidades.html
│ ├── proyectos.html
│ ├── certificaciones.html
│ └── contacto.html
├── scripts/
│ ├── app.js                  # Lógica principal del CV
│ ├── libs/
│ │   ├── html2pdf.js         # Librería para generar PDF (offline)
│ │   └── docx.js             # Librería para generar DOCX (offline)
│ └── modules/
│     ├── pdf-generator.js    # Función personalizada: generatePDF()
│     ├── docx-generator.js   # Función personalizada: generateDOCX()
│     ├── theme-switcher.js   # Cambio de tema (pistache, linkedin, oscuro, etc.)
│     └── email-handler.js    # Manejo del formulario de contacto
├── styles/
│ ├── base/
│ │   ├── reset.css
│ │   └── variables.css
│ ├── themes/
│ │   ├── principal.css     # Verde pistache (tu tema actual)
│ │   ├── linkedin.css      # Estilo LinkedIn
│ │   ├── x.css             # Estilo X/Twitter
│ │   ├── oscuro.css        # Modo oscuro
│ │   ├── claro.css         # Fondo claro, texto oscuro
├─│   ├── moderno.css       # Diseño minimalista moderno
│ │   ├── tiktok.css        # Estilo TikTok (neón, gradiente)
│ │   ├── youtube.css       # Estilo YouTube
│ │   ├── instagram.css     # Estilo Instagram
│ │   └── discord.css       # Estilo Discord
│ └── layouts/
│ 	  ├── print.css         # Estilos para impresión
│ 	  └── mobile.css        # Responsive
└── assets/
  ├── images/
  │   └── JCCR.png          # Foto del perfil (ya mencionada)
  ├── fonts/                # (opcional) Fuentes personalizadas
  └── data/
      └── cv-data.json      # Datos estructurados del CV (clave)

