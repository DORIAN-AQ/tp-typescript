// import 'reflect-metadata';

namespace tp4_exo1 {

    function propertyDecorator(target: any, key: string): void {
        // tips : on voudra enregistrer la valeur à manipuler dans une autre variable

        // Changer cette fonction pour changer la sortie du prix sous ce format `Mon prix est : ${prix}`
        const getter = (): string => { };

        // Changer cette fonction pour enregistrer la valeur divisée par 2
        const setter = (val: number) => { };

        Reflect.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };

    class Product {
        @propertyDecorator
        public price!: number;

        displayPrice(): void {
            console.log(this.price);
        }
    }

    const product = new Product();
    product.price = 10;
    product.displayPrice();
}
