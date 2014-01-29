<?php


class Hero
{

    const HP_LIMIT = 30;

    private $hp;

    /**
     * @var Weapon
     */
    private $weapon;



    public function __construct($hp = self::HP_LIMIT)
    {
        $this->weapon = new Fist();
        $this->hp = min($hp, self::HP_LIMIT);
    }



    public function getHp()
    {
        return $this->hp;
    }



    public function hurt($damage = 1)
    {
        $this->hp -= $damage;
    }



    public function addWeapon(Weapon $weapon)
    {
        $this->weapon = $weapon;
    }



    /**
     * @return Weapon
     */
    public function showWeapon()
    {
        return $this->weapon;
    }

}

class Fight
{

    public function attack(Hero $red, Hero $blue)
    {

        $weapon = $red->showWeapon();
        $blue->hurt($weapon->damage);
    }

}

abstract class Weapon
{
    public $damage;
}

class Fist extends Weapon
{
    public $damage = 1;
}

class Sword extends Weapon
{
    public $damage = 7;
}

class Dagger extends Weapon
{
    public $damage = 5;
}

class Wand extends Weapon
{
    public $damage = 8;
}