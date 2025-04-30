import { NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragonball-page.component.html',
    styles: ``,
    imports: [NgClass],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballPageComponent {

    title = 'Dragon Ball 👾';
    characterName = signal('');
    characterPower = signal(0);

    personajes = signal<Character[]>([
        {id: 1, name: 'Goku', power: 9001 },
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