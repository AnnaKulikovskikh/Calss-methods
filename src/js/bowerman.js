import Character from './character';

export default class Bowerman extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Bowerman';
    this.attack = 25;
    this.defend = 25;
  }
}
