# TP TYPESCRIPT

Ce TP a pour but de parcourir les fonctionnalités de base de TypeScript

## Prerequis

Ts-node est un outil de développement qui nous permettra de lancer un script TS sans passer par un build
```
npm install -g ts-node
npm install -g typescript
```

## TP 1 : Type

Ce premier TP a pour objectif d'introduire le système de typage. Sur l'ensemble des TPs, on notera les erreurs que l'IDE nous remonte. 

### Type de base

Exercice pour typer les différentes variables, vous allez devoir typer toutes les variables correctement.

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-1/exo1.ts
```

### Type enum

Dans cet exercice, je voudrais la sortie suivante :
```
3
4
5
10
```

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-1/exo2.ts
```

### Type retour de fonction

Dans cet exercice, `exo3.ts` ne fonctionne pas il le devrait, veuillez le corriger.

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-1/exo3.ts
```

### Type array

Compléter la fonction displayArray pour afficher l'intégralité de l'array en utilisant map ou forEach.

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-1/exo4.ts
```

### Type generique

Corriger le programme en typant le retour de la fonction.

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-1/exo5.ts
```

## TP 2 : Class

Ce second TP a pour objectif de présenter les nouveautées sur les class ainsi que le système d'interface

### Création d'une interface

Créer une interface afin de pouvoir typer efficacement les héros

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-2/exo1.ts
```

### Extend

Créer une class parente aux Heros afin d'introduire une nouvelle class

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-2/exo2.ts
```

### Algo (Simple)

En ajoutant plusieurs produits à mon panier, je voudrais obtenir un panier total de `25`

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-2/exo3.ts
```

## Rest / Spread / Destructuration

Ici, on apprendra à utiliser les opérateurs Rest et Spread. Puis une petite overview des principes de destructuration
_Utiliser le dossier `tp-3` pour valider ce cours._

### Rest

Des fonctions utilisant le `Rest` operator attendent d'être appelé par vos soins.

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-3/exo1.ts
```

### Spread

Dans cet exercice, vous allez devoir utiliser le `Rest` operator afin de pouvoir appelé correctement les fonctions donné à votre disposition.

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-3/exo2.ts
```

### Destructuration

Ici, se sont les exercices `exo3` et `exo4` qu'il faudra compléter.

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-3/exo3.ts
ts-node ./tp-3/exo4.ts
```

## Decorator

Dans ce TP, on passera en revu les décorateurs en TypeScript. Les décorateurs sont utiliser en Angular à tous les niveaux.
_Utiliser le dossier `tp-4` pour valider ce cours._

### Rappel sur les types génériques

Ici, on verra les différences entre les déclarations de fonctions génériques et les fonctions typées. Les types génériques sont très utilisés dans les décorateurs car un décorateur viendra (décorer) compléter/ajouter des fonctionnalitées à nos propriétés, méthodes, fonctions...

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-4/exo0.ts
```

### Attribute / Propriété decorator


Pour vérifier le bon fonctionnement :
```
ts-node ./tp-4/exo1.ts
```

### Method decorator


Pour vérifier le bon fonctionnement :
```
ts-node ./tp-4/exo2.ts
```

### Class decorator


Pour vérifier le bon fonctionnement :
```
ts-node ./tp-4/exo3.ts
```

### Decorator with parameters


Pour vérifier le bon fonctionnement :
```
ts-node ./tp-4/exo4.ts
```