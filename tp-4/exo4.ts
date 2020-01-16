namespace tp4_exo2 {

    function methodDecorator(factorOfFactor: number): any {
        return (_target: Object, _key: string, descriptor: TypedPropertyDescriptor<any>): any => {
            const originalMethod = descriptor.value;
            descriptor.value = function (factor: number): any {
                console.log(`Method called with factor : ${factor}`)
                return originalMethod.apply(this, [factor * factorOfFactor]);
            };
            return descriptor;
        };
    };


    class Product {
        constructor(private price: number) { }

        @methodDecorator(5)
        displayPriceMultiplyByTwo(factor: number): number {
            return this.price * factor;
        }
    }

    const product = new Product(10);
    console.log(product.displayPriceMultiplyByTwo(2));
}