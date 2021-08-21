import Character from '../character';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('creation daemon', () => {
  const hero1 = new Daemon('Mimi');
  expect(hero1.type).toBe('Daemon');
});

test('magician defend', () => {
  const hero2 = new Magician('Harry');
  expect(hero2.defend).toBe(40);
});

test('undead attack', () => {
  const hero3 = new Undead('Lenin');
  expect(hero3.defend).toBe(25);
});

test('zombie level', () => {
  const hero4 = new Zombie('Voldemort');
  expect(hero4.level).toBe(1);
});

test('bowermen health', () => {
  const hero5 = new Bowerman('Betman');
  expect(hero5.health).toBe(100);
});

test('creation swordsman', () => {
  const hero6 = new Swordsman('DArtanian');
  const expected = {
    name: 'DArtanian',
    type: 'Swordsman',
    health: 100,
    attack: 40,
    defend, 10
  }
  expect(hero6).toEqual(expected);
});
