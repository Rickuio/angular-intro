import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interfaces/character.interface";


const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root'})
export class DragonballService {
    /*
    personajes = signal<Character[]>([
        {id: 1, name: 'Goku', power: 9001 },
        {id: 2, name: 'Vegeta', power: 8000 },
    ]);
    */

    personajesSrv = signal<Character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect( () => {
        console.log(`Character count ${this.personajesSrv().length}`)
        localStorage.setItem('characters', JSON.stringify(this.personajesSrv()));
    });

    addCharacterSrv(character: Character) {
        this.personajesSrv.update(
            (list) => [...list, character]
        );
    }

}