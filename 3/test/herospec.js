describe('hero', function()
{
    it('has hp', function()
    {
        var hero = new Hero(3);
        expect(hero.hp).toBe(3);
    });

    it('hp cannot be larger than 30', function()
    {
        var hero = new Hero(34);
        expect(hero.hp).toBe(30);
    });

    it('hp cannot be larger than 30', function()
    {
        var hero = new Hero(34);
        expect(hero.hp).toBe(30);
    });

    it('can attack enemy hero', function()
    {
        var heroAttacker = new Hero(34);
        var heroDefender = new Hero(12);

        heroAttacker.attack(heroDefender);

        expect(heroDefender.hp).toBe(11);
    });

    it('raise error if hero is out of HP', function()
    {
        var heroAttacker = new Hero(34);
        var heroDefender = new Hero(1);

        expect(function()
        {
            heroAttacker.attack(heroDefender);
        }).toThrow();
    });

    it("should wound 3 if his weapon is dagger", function()
    {
        var heroAttacker = new Hero(34);
        var heroDefender = new Hero(6);

        heroAttacker.addWeapon(weapons.dagger);

        heroAttacker.attack(heroDefender);

        expect(heroDefender.hp).toBe(1);
    });

    it("should wound 4 if his weapon is dagger and defends with staff", function()
    {
        var heroAttacker = new Hero(34);
        var heroDefender = new Hero(6);

        heroAttacker.addWeapon(weapons.dagger);
        heroDefender.addWeapon(weapons.staff);

        heroAttacker.attack(heroDefender);

        expect(heroDefender.hp).toBe(2);
    });


    it("shouldn't wound if his defense if higher than the attacker's damage", function()
    {
        var heroAttacker = new Hero(34);
        var heroDefender = new Hero(6);

        heroDefender.addWeapon(weapons.dagger);

        heroAttacker.attack(heroDefender);

        expect(heroDefender.hp).toBe(6);
    });

    it("should gain hp by the damage he made", function()
    {
        var heroAttacker = new Hero(10);
        var heroDefender = new Hero(10);

        heroAttacker.addWeapon(weapons.vampireDagger);
        heroDefender.addWeapon(weapons.staff);

        heroAttacker.attack(heroDefender);

        expect(heroAttacker.hp).toBe(14);
    });
});

describe('Priest', function()
{
    var priest;

    beforeEach(function() {
        priest = new Priest(12);
    });


    it('can heal any entities', function()
    {
        priest.heal(priest);

        expect(priest.hp).toEqual(15);
    });

    it('can be attacked', function()
    {
        var hero = new Hero(34);

        hero.attack(priest);

        expect(priest.hp).toBe(11);
    });

    it('cant heal more than max hp', function()
    {
        var hero = new Hero(30);

        priest.heal(hero);

        expect(hero.hp).toBe(30);
    });
});