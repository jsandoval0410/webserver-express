
const hbs = require('hbs');

// helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((k, index) => {
        palabras[index] = k.charAt(0).toUpperCase() + k.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});
