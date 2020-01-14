enum OptionDisplay {
    justName,
    justAge,
    both
};

function presentMyself(name, age, option) { // Type return here
    switch(option) {
        case OptionDisplay.justName:
            return `My name is : ${name}`;
        case OptionDisplay.justAge:
            return `I'm ${age}`;
        case OptionDisplay.both:
            return `My name is : ${name} and I'm ${age}`;
        default:
            return `No presentation form`;
      }
}

function displayMe() { // Type return here
    let presentation: string;
    const name = 'Bob'; // Type here
    const age = 25; // Type here
    presentation = presentMyself(name, age));
    console.log(presentation);
}

displayMe();

