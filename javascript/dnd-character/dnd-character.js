export { Character, abilityModifier };

class Character {
    constructor() {
        this.strength = Math.floor(Math.random() * 15 + 3);
        this.dexterity = Math.floor(Math.random() * 15 + 3);
        this.constitution = Math.floor(Math.random() * 15 + 3);
        this.intelligence = Math.floor(Math.random() * 15 + 3);
        this.wisdom = Math.floor(Math.random() * 15 + 3);
        this.charisma = Math.floor(Math.random() * 15 + 3);
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