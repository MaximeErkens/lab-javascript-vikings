// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomSaxonArmy = Math.floor(Math.random(this.saxonArmy.length) * 1);
    const randomVikingArmy = Math.floor(
      Math.random(this.vikingArmy.length) * 1
    );

    const finalFight = String(
      this.saxonArmy[randomSaxonArmy].receiveDamage(
        this.vikingArmy[randomVikingArmy].strength
      )
    );
    this.saxonArmy = this.saxonArmy.filter((saxon) => {
      return saxon.health > 0;
    });
    return finalFight;
  }

  saxonAttack() {
    const randomSaxonArmy = Math.floor(Math.random(this.saxonArmy.length) * 1);
    const randomVikingArmy = Math.floor(
      Math.random(this.vikingArmy.length) * 1
    );

    const finalFight = String(
      this.vikingArmy[randomVikingArmy].receiveDamage(
        this.saxonArmy[randomSaxonArmy].strength
      )
    );
    this.vikingArmy = this.vikingArmy.filter((viking) => {
      return viking.health > 0;
    });
    return finalFight;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.vikingArmy.length && this.saxonArmy.length) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
