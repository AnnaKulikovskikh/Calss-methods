import Character from '../character';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('creation bowerman', () => {
  const hero1 = new Bowerman('Spiderman');
  const expected = {
    name: 'Spiderman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defend: 25
  }
  expect(hero1).toEqual(expected);
});

test('creation swordsman', () => {
  const hero2 = new Swordsman('Halk');
  const expected = {
    name: 'Halk',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defend: 10
  }
  expect(hero2).toEqual(expected);
});

test('creation magician', () => {
  const hero3 = new Magician('Strange');
  const expected = {
    name: 'Strange',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defend: 40
  }
  expect(hero3).toEqual(expected);
});

test('creation undead', () => {
  const hero4 = new Undead('Hydra');
  const expected = {
    name: 'Hydra',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defend: 25
  }
  expect(hero4).toEqual(expected);
});

test('creation zombie', () => {
  const hero5 = new Zombie('NoName');
  const expected = {
    name: 'NoName',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defend: 10
  }
  expect(hero5).toEqual(expected);
});

test('creation daemon', () => {
  const hero6 = new Daemon('Mimi');
  const expected = {
    name: 'Mimi',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defend: 40
  }
  expect(hero6).toEqual(expected);
});

test('damage', () => {
  const hero6 = new Daemon('Mimi');
  hero6.damage(80);
  expect(hero6.health).toBe(52);
});

test('level up', () => {
  const hero6 = new Daemon('Mimi');
  hero6.damage(80);
  hero6.levelUp();
  hero6.levelUp();
  const expected = {
    name: 'Mimi',
    type: 'Daemon',
    health: 100,
    level: 3,
    attack: 14.4,
    defend: 57.6
  }
  expect(hero6).toEqual(expected);
});

test('kelled', () => {
  const hero6 = new Daemon('Mimi');
  hero6.damage(800);
  hero6.levelUp();
  const expected = {
    name: 'Mimi',
    type: 'Daemon',
    health: -380,
    level: 1,
    attack: 10,
    defend: 40
  }
  expect(hero6).toEqual(expected);
});