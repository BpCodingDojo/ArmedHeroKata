var maxHP = 30;
var weapons = {
    dagger: {
        damage: 5,
        defense: 4
    },
    staff:  {
        damage: 8,
        defense: 1
    },
    sword: {
        damage: 7,
        defense: 2
    },
    fist: {
        damage: 1,
        defense: 0
    },
    vampireDagger: {
        damage: 5,
        defense: 4,
        vampiric: true
    }
};

var baseHero = {
    setHP: function(hp)
    {
        this.hp = hp > maxHP ? maxHP : hp;
    },

    wound: function(damage) {
        var calculatedDamage = damage - this.getDefense();

        if (calculatedDamage > 0) {
            this.hp -= calculatedDamage;
        }

        if (this.hp === 0) {
            throw new Error();
        }

        return calculatedDamage;
    },

    getDefense: function() {
        return this.weapon ? this.weapon.defense : 0;
    },

    getBetter: function(additionalHp) {
        this.setHP(this.hp + additionalHp);
    }
};

var Hero = function(hp) {
    _.extend(this, baseHero);
    this.weapon = weapons.fist;

    this.setHP(hp);

    this.attack = function(hero) {
        var inflictedDamage = hero.wound(this.weapon.damage);

        if (this.weapon.vampiric) {
            this.getBetter(inflictedDamage);
        }
    };

    this.addWeapon = function(weapon) {
        this.weapon = weapon;
    };
};

var Priest = function(hp) {
    _.extend(this, baseHero);

    this.setHP(hp);

    this.heal = function(hero) {
        hero.getBetter(3);
    };
};