import Character from './character';

export default class Daemon extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Daemon';
    this.attack = 10;
    this.defend = 40;
  }
}
