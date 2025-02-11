const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu ul');

burger.addEventListener('click', () => {
    menu.classList.toggle('show');
});


const elementsDiapo = document.querySelectorAll('.element-diapo');
let indexActuel = 0;

setInterval(() => {
  elementsDiapo[indexActuel].classList.remove('active');
  indexActuel = (indexActuel + 1) % elementsDiapo.length;
  elementsDiapo[indexActuel].classList.add('active');
}, 3000); // Changer d'élément toutes les 3 secondes


const menuItems = document.querySelectorAll('.menu2 > li');

menuItems.forEach(item => {
    const subMenu = item.querySelector('ul');

    if (subMenu) {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
        });
    }
});

// icon de recerche
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', (event) => {
event.preventDefault(); // Empêche le rechargement de la page

const searchTerm = input.value.toLowerCase();
const results = [];

// Simule une liste de fichiers dans le même dossier (à remplacer par une vraie logique de récupération des fichiers)
const files = ['mon_image.jpg', 'mon_document.pdf', 'ma_page.html'];

for (const file of files) {
if (file.toLowerCase().includes(searchTerm)) {
results.push(file);
}
}

// Affiche les résultats (à adapter à votre design)
const resultsDiv = document.createElement('div');
resultsDiv.innerHTML = results.join('<br>');
document.body.appendChild(resultsDiv);
});