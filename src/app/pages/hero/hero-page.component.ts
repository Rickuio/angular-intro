import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    styles: ``,
    imports: [UpperCasePipe ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {

    name = signal('Iroman');
    age = signal(45);

    capitalizedName = computed( () => {
        return this.name().toUpperCase();
    } );

    computedHeroDescription = computed( () => {
        const description = `${this.name()} : ${this.age()}`;
        return description;
    });

    getHeroDescription() {
        return `${ this.name() } - ${ this.age() }`;
    }
    
    changeHero() {
        this.name.update((v) => 'Spiderman');
        this.age.update((v) => 22);
    }

    changeAge(value: number) {
        this.age.update((v) => value);
    }

    resetForm() {
        this.name.update((v) => 'Iroman');
        this.age.update((v) => 45);
    }

}