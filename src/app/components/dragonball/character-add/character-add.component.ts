import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {

  characterName = signal('');
  characterPower = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if ( !this.characterName() || this.characterPower() <= 0) {
        return;
    }
    const newCharacter: Character = {
        id: Math.floor(Math.random() * 1000),
        name: this.characterName(),
        power: this.characterPower(),
    }
    this.newCharacter.emit(newCharacter);
    this.resetCharacter();
  }
  
  resetCharacter() {
    this.characterName.set('');
    this.characterPower.set(0);
  }

 }
