namespace tp4_exo2 {

    function methodDecorator(target: Object, key: string, descriptor: TypedPropertyDescriptor<any>): any {

        console.log(target);
        console.log(key);
        console.log(descriptor);

        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]): any {
            console.log("Method called with args: ", args.join(", "));
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };


    class Product {
        constructor(private price: number) { }

        @methodDecorator
        displayPriceMultiplyByTwo(factor: number): number {
            return this.price * factor;
        }
    }

    const product = new Product(12);
    console.log(product.displayPriceMultiplyByTwo(2));
}