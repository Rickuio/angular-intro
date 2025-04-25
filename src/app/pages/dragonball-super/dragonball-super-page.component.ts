import { NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragonball-super-page.component.html',
    selector: 'dragonball-super',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CharacterListComponent],
})
export class DragonballSuperPageComponent {

    characterName = signal('');
    characterPower = signal(0);

    personajes = signal<Character[]>([
        {id: 1, name: 'Goku', power: 9001 },
        {id: 2, name: 'Vegeta', power: 8000 },
    ]);

    powerClasses = computed(() => {
        return {
            'text-secondary': true,
        };
    });

    addCharacter() {
        if ( !this.characterName() || this.characterPower() <= 0) {
            return;
        }
        const newCharacter: Character = {
            id: this.characterName().length + 1,
            name: this.characterName(),
            power: this.characterPower(),
        }
        //this.personajes().push(newCharacter);
        this.personajes.update( (list) => [...list, newCharacter] );
        console.log(this.characterName(), this.characterPower());
        this.resetCharacter();
    }

    resetCharacter() {
        this.characterName.set('');
        this.characterPower.set(0);
    }

}