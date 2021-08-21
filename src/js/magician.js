import Character from './character';

export default class Magician extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Magician';
    this.attack = 10;
    this.defend = 40;
  }
}
