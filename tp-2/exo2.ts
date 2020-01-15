enum TypeOfWarrior {
    Berserk,
    Paladin
}

// Create class to be extended by Bersek and Paladin

class Berserk {
    private typeOfHero: TypeOfWarrior = TypeOfWarrior.Berserk;

    constructor(public isHero: boolean) {}

    protected canIUseMagic(): boolean {
        return this.typeOfHero === TypeOfWarrior.Paladin;
    }
    protected canIUseRage(): boolean {
        return this.typeOfHero === TypeOfWarrior.Berserk;
    }

    presentMyself(): void {
        if (this.isHero) {
            console.log('Im a hero');
        }
        if (this.canIUseMagic()) {
            console.log('Im good with spells');
        }
        if (this.canIUseRage()) {
            console.log('Im strong');
        }
    }
}

class Paladin {
    private typeOfHero: TypeOfWarrior = TypeOfWarrior.Paladin;

    constructor(public isHero: boolean) {}

    protected canIUseMagic(): boolean {
        return this.typeOfHero === TypeOfWarrior.Paladin;
    }
    protected canIUseRage(): boolean {
        return this.typeOfHero === TypeOfWarrior.Berserk;
    }

    presentMyself(): void {
        if (this.isHero) {
            console.log('Im a hero');
        }
        if (this.canIUseMagic()) {
            console.log('Im good with spells');
        }
        if (this.canIUseRage()) {
            console.log('Im strong');
        }
    }
}


// Changer le type "Berserk|Paladin" par une interface
function presentMyHero1(hero: Berserk|Paladin): void {
    hero.presentMyself();
}

const heroBerserk = new Berserk(true);
const heroPaladin = new Paladin(false);

presentMyHero1(heroBerserk);
console.log('==============================');
presentMyHero1(heroPaladin);
