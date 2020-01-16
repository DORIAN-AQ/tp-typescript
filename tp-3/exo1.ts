namespace tp3_exo1 {
    // =================================
    // NE PAS TOUCHER
    // =================================

    // Fonction retournant le résultat de la somme des éléments de `args`, ici on utilise le `Rest` operator : les paramètres (arg1, arg2, arg2, ..., argN) => (...args) soit ([arg1, arg2, ..., argN])
    function sumElementsOfAnArray(...args: number[]): number {
        return args.reduce((previousValue: number, currentValue: number): number => previousValue + currentValue, 0);
    }

    // Fonction retournant un liste (array) nommée `args` dont on a multiplié chaque éléments de `args` par `factor` donné ici en premier argument. On utilise le `Rest` operator : les paramètres (arg1, arg2, ..., argN) => (arg1, ...args) soit (arg1, [arg2, ..., argN])
    function multiplyAllElements(factor: number, ...args: number[]): number[] {
        return args.map((currentValue: number): number => currentValue * factor);
    }

    // =================================

    // Sortie attendue : 14
    console.log(`La somme : ${sumElementsOfAnArray()}`); // Compléter l'appel de la fonction sumElementsOfAnArray

    // Sortie attendue : [ 2, 4, 8]
    console.log(`Les produits : [ ${multiplyAllElements().join(', ')} ]`); // Compléter l'appel de la fonction multiplyAllElements
}