export { Character, abilityModifier };

class Character {
    constructor() {
        this.strength = Character.rollAbility();//Math.floor(Math.random() * 15 + 3);
        this.dexterity = Character.rollAbility();
        this.constitution = Character.rollAbility();
        this.intelligence = Character.rollAbility();
        this.wisdom = Character.rollAbility();
        this.charisma = Character.rollAbility();
        this.hitpoints = 10 + this.abilityModifier(this.constitution);
    }

    static rollAbility() { return Math.floor(Math.random() * 15 + 3) }
    abilityModifier(c) {
        return (Math.floor((c - 10) / 2))
    }
}

const abilityModifier = (i) => {
    if (i < 3) throw new Error('Ability scores must be at least 3')
    if (i > 18) throw new Error('Ability scores can be at most 18')
    let o = Math.floor((i - 10) / 2);
    return o
};