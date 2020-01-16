namespace tp4_exo3 {


    function constructorDecorator<T>(originalConstructor: new (...args: any[]) => T): any {
        function newConstructor(...args: any[]): T {
            console.log(`Product contructor args are: ${args.join(", ")}`);
            return new originalConstructor(...args);
        }
        newConstructor.prototype = originalConstructor.prototype;
        return newConstructor;
    };

    @constructorDecorator
    class Product {
        constructor(public label: string, public price: number) { }
    }

    const product: Product = new Product('Tesla model S', 65000);
    console.log(product);
}