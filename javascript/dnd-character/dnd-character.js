export { Character, abilityModifier };

class Character {
    constructor() {
        this.strength = Character.rollAbility();
        this.dexterity = Character.rollAbility();
        this.constitution = Character.rollAbility();
        this.intelligence = Character.rollAbility();
        this.wisdom = Character.rollAbility();
        this.charisma = Character.rollAbility();
        this.hitpoints = 10 + abilityModifier(this.constitution);
    }

    static rollAbility() {
        const roll1Die = () => Math.round(0.5 + Math.random() * 5);
        let roll4Dice = [0, 0, 0, 0].map(roll1Die).sort().splice(0).reduce((acc, cur) => acc + cur);
        return roll4Dice;
    }

}

const abilityModifier = (i) => {
    if (i < 3) throw new Error('Ability scores must be at least 3')
    if (i > 18) throw new Error('Ability scores can be at most 18')
    return Math.floor((i - 10) / 2);
};