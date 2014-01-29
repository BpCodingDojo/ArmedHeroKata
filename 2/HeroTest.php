<?php
/**
 * Created by PhpStorm.
 * User: tibor.toth
 * Date: 1/29/14
 * Time: 6:01 PM
 */

require_once("Hero.php");

class HeroTest extends PHPUnit_Framework_TestCase
{

    private $hero;



    /**
     * @test
     */
    public function testConstructor_NoHpSpecified_HPis30()
    {
        $this->hero = new Hero();
        $this->assertEquals(30, $this->hero->getHp());
    }

    /**
     * @test
     */
    public function testConstructor_ValidHpSpecified_HPisTheSpecifiedValue()
    {
        $this->hero = new Hero(25);
        $this->assertEquals(25, $this->hero->getHp());
    }

    /**
     * @test
     */
    public function testConstructor_OverLimit_HPisLimit()
    {
        $this->hero = new Hero(35);
        $this->assertEquals(30, $this->hero->getHp());
    }

    /**
     * @test
     */
    public function testHurt_DecreaseHPAccordingly()
    {
        $this->hero = new Hero();
        $this->hero->hurt(2);
        $this->assertEquals(Hero::HP_LIMIT - 2, $this->hero->getHp());
    }

    /**
     * @test
     */
    public function testShowWeapon_HeroHasNoWeapon_HeroHasFist()
    {
        $this->hero = new Hero();
        $this->assertType('Fist', $this->hero->showWeapon());
    }

    /**
     * @test
     */
    public function testShowWeapon_AddSwordToHero_SwordReturned()
    {
        $this->hero = new Hero();
        $sword = new Sword();
        $this->hero->addWeapon($sword);
        $this->assertEquals($sword, $this->hero->showWeapon());
    }

    /**
     * @test
     */
    public function testShowWeapon_AddDaggerToHero_DaggerReturned()
    {
        $this->hero = new Hero();
        $dagger = new Dagger();
        $this->hero->addWeapon($dagger);
        $this->assertEquals($dagger, $this->hero->showWeapon());
    }



}



class FightTest extends PHPUnit_Framework_TestCase
{
    /**
     * @test
     */
    public function attack_AliveHeroes_DefenderDamaged()
    {
        $blue = new Hero();
        $fight = new Fight();
        $fight->attack(new Hero(), $blue);
        $this->assertEquals(Hero::HP_LIMIT - 1, $blue->getHp());

    }

    /**
     * @test
     */
    public function attack_AttackerHasWeapon_DefenderDamagedMore()
    {
        $blue = new Hero();

        $red = new Hero();
        $sword = new Sword();
        $red->addWeapon($sword);

        $fight = new Fight();
        $fight->attack($red, $blue);

        $this->assertEquals(Hero::HP_LIMIT - $sword->damage, $blue->getHp());
    }


}