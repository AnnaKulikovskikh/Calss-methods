import Character from './character';

export default class Zombie extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Zombie';
    this.attack = 40;
    this.defend = 10;
  }
}
