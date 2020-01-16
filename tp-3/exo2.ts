namespace tp3_exo2 {

    // =================================
    // NE PAS TOUCHER
    // =================================
    const listCustomer: string[] = ['Jack', 'Danniel', 'Georges', 'Bob'];

    // Cette fonction prends N arguments et utilise le `Rest` operator pour les réunir au sein du même array `listCustomerToPresent` afin de pouvoir les présenter
    function presentAllCustomers(...listCustomerToPresent: string[]): void {
        console.log(`Mes clients sont : ${listCustomerToPresent.join(', ')}`)
    }
    // =================================

    // Ici, on se concentre sur lútilisation du `Spread` operator
    presentAllCustomers(); // Compléter l'appel de la fonction afin de présenter la liste des clients `listCustomer`
}