## Exercice 1 :

- Créer un nouveau projet Angular
- Créer un composant "counter"
- Intégrer le composant dans app
- Le composant doit afficher un compteur qui :
    - commence à 0
    - qui est rouge si le nombre est impair et vert si le nombre est pair
    - ajouter 2 boutons pour incrémenter et décrémenter le compteur.

## Exercice 2 :

- Créer un nouveau composant "series"
- Créer la route du composant series + la route du composant counter
- Créer la barre de navigation
- Dans series, créer une liste de séries en dur
- Afficher la liste des séries
- Afficher un message si la liste est vide
- Ajouter un bouton de suppression sur chaque élément de la liste 

## Exercice 3 :

- Créer un pipe personnalisé, qui prend en paramètre une liste, et un argument de type string 'order' ('asc' ou 'desc')
- Utiliser ce pipe sur la liste de série pour la trier
- Ajouter 2 boutons pour modifier l'ordre du tableau

## Exercice 4 :

- Créer un composant librairie, et sa route
- Dans ce composant, afficher une liste de livre
    - title
    - author
    - isRead
- quand le livre est lu, on affiche 👍 ou 👎 (windows + . pour ajouter l'emoji)
- Utiliser un pipe perso pour la gestion de l'emoji
- Ajouter un bouton pour marquer un livre lu / pas lu