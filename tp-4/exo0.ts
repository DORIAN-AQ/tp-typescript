// Inspiré par https://www.typescriptlang.org/docs/handbook/generics.html

namespace tp4_exo0 {
    const arrayOfNumber: number[] = [0, 1, 2, 3, 4];
    const numberPi: number = 3.14;

    // Retour typé précis
    function returnArray(arrayToReturn: number[]): number[] {
        return arrayToReturn;
    }

    returnArray(arrayOfNumber).length; // Ici la methode nous retourne un array, donc on préserve les informations relatives à la famille des arrays
    returnArray(numberPi).length; // On ne peut pas utiliser returnArray avec numberPi

    // Retour de type any, donc perte de l'information
    function returnAnything(anythingToReturn: any): any {
        return anythingToReturn;
    }

    // Ici, on peut utiliser returnAnything avec n'importe quel type de variable mais on perd les informations relatives à la valeur de retour
    returnAnything(arrayOfNumber).length;
    returnAnything(numberPi).toString();

    // Retour typé générique, donc préservera les informations de la valeur de retour
    function returnAnyTypePreserved<T>(preservedTypeToReturn: T): T {
        // Par contre, ici, on ne peux pas utiliser les méthodes et propriétés de `preservedTypeToReturn` car il peut être de n'importe quel type.
        preservedTypeToReturn.length;
        preservedTypeToReturn.toString();
        return preservedTypeToReturn;
    }

    returnAnyTypePreserved(arrayOfNumber).length;
    // OU
    returnAnyTypePreserved<number[]>(arrayOfNumber).length;

    returnAnyTypePreserved(numberPi).toString();
    // OU
    returnAnyTypePreserved<number>(numberPi).toString();
}