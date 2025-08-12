// scripts/modules/email-handler.js
window.sendContactMessage = () => {
    const name = document.getElementById('messageName')?.value;
    const email = document.getElementById('messageEmail')?.value;
    const message = document.getElementById('messageContent')?.value;

    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Usa FormSubmit.co (sin backend)
    fetch('https://formsubmit.co/ajax/pepecharly@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Mensaje enviado correctamente. ¡Gracias!');
        document.getElementById('messageForm').classList.add('hidden');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje. Intenta más tarde.');
    });
};

// Cerrar formulario
document.getElementById('cancelMessageBtn')?.addEventListener('click', () => {
    document.getElementById('messageForm').classList.add('hidden');
    document.getElementById('contactList').classList.remove('hidden');
});