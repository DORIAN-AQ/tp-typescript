enum TypeOfHero {
    Warrior,
    Mage
}

// Create an interface implemented by Warrior and Mage

class Mage {
    private typeOfHero: TypeOfHero = TypeOfHero.Mage;

    constructor(public isHero: boolean) {}

    protected canIUseMagic(): boolean {
        return this.typeOfHero === TypeOfHero.Mage;
    }
    protected canIUseForce(): boolean {
        return this.typeOfHero === TypeOfHero.Warrior;
    }

    presentMyself(): void {
        if (this.isHero) {
            console.log('Im a hero');
        }
        if (this.canIUseMagic()) {
            console.log('Im good with spells');
        }
        if (this.canIUseForce()) {
            console.log('Im strong');
        }
    }
}

class Warrior {
    private typeOfHero: TypeOfHero = TypeOfHero.Warrior;

    constructor(public isHero: boolean) {}

    protected canIUseMagic(): boolean {
        return this.typeOfHero === TypeOfHero.Mage;
    }
    protected canIUseForce(): boolean {
        return this.typeOfHero === TypeOfHero.Warrior;
    }

    presentMyself(): void {
        if (this.isHero) {
            console.log('Im a hero');
        }
        if (this.canIUseMagic()) {
            console.log('Im good with spells');
        }
        if (this.canIUseForce()) {
            console.log('Im strong');
        }
    }
}


// Changer le type "Mage|Warrior" par une interface
function presentMyHero(hero: Mage|Warrior): void {
    hero.presentMyself();
}

const heroMage = new Mage(true);
const heroWarrior = new Warrior(false);

presentMyHero(heroMage);
console.log('==============================');
presentMyHero(heroWarrior);
