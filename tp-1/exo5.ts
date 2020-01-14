function waitAndReturnDouble(value: number) {
    return new Promise((resolve): void => {
        setTimeout(() => {
            resolve(value * 2);
        }, 2000);
    });
}

const valueToDouble: number = 4;

waitAndReturnDouble(valueToDouble)
    .then((valueDoubled: number): void => {
        console.log(valueDoubled);
    });
