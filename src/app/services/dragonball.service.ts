import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interfaces/character.interface";


const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root'})
export class DragonballService {

    personajesSrv = signal<Character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect( () => {
        console.log(`Character count ${this.personajesSrv().length}`)
        localStorage.setItem('characters', JSON.stringify(this.personajesSrv()));
    });

    addCharacterSrv(character: Character) {
        this.personajesSrv.update( (list) => [...list, character] );
    }

}