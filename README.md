# TP TYPESCRIPT

Ce TP a pour but de parcourir les fonctionnalités de base de TypeScript

## Prerequis

Ts-node est un outil de développement qui nous permettra de lancer un script TS sans passer par un build
```
npm install -g ts-node
npm install -g typescript
```

## TP 1 : Type

Ce premier TP a pour objectif d'introduire le système de typage. Sur lénsemble des TPs, on notera les erreurs que l'IDE nous remonte. 

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

Dans cet exercire, `exo3.ts` ne fonctionne pas il le devrait, veuillez le corriger.

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-1/exo3.ts
```

### Type array

Compléter la fonction displayArray pour afficher l'intégralité de l'array

Pour vérifier le bon fonctionnement :
```
ts-node ./tp-1/exo4.ts
```

### Type generique

Corriger le programme.

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

## Decorator

Not ready yet