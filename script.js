// DOM
const touches = [...document.querySelectorAll('.bouton')]; // Sélectionne tous les éléments avec la classe 'bouton' et les place dans un tableau.
const ecran = document.querySelector('.ecran'); // Sélectionne l'élément avec la classe 'ecran'.

// Fonction pour gérer les entrées (clavier et clics)
function gererEntree(e) {
    // Obtient la valeur de la touche en fonction de l'événement (clavier ou clic)
    const valeur = e.type === 'keydown' ? e.keyCode.toString() : e.target.dataset.key;
    
    // Vérifie si la valeur obtenue correspond à une des touches et, si oui, effectue le calcul
    if (touches.some(touche => touche.dataset.key === valeur)) {
        effectuerCalcul(valeur);
    }
}

// Fonction pour effectuer le calcul
function effectuerCalcul(valeur) {
    switch (valeur) {
        case '8': // Si la valeur est '8', efface l'écran.
            ecran.textContent = "";
            break;
        case '13': // Si la valeur est '13', tente d'exécuter le calcul.
            try {
                ecran.textContent = eval(ecran.textContent);
            } catch (e) {
                alert('vous avez une erreur dans votre calcul: ' + e.message); // Affiche une alerte en cas d'erreur.
            }
            break;
        default: // Pour toute autre valeur, ajoute le caractère correspondant à l'écran.
            const touche = touches.find(t => t.dataset.key === valeur);
            if (touche) ecran.textContent += touche.innerHTML;
    }
}

// Écouteurs d'événements
document.addEventListener('keydown', gererEntree); // Ajoute un écouteur d'événement pour les touches du clavier.
document.addEventListener('click', gererEntree); // Ajoute un écouteur d'événement pour les clics.
