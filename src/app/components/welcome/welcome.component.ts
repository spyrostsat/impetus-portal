import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
    impetusFunding =
        'The IMPETUS project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101037084 Funded in the EU Horizon 2020 Green Deal call';

    onUnderConstructionClick() {
        alert('Under Construction');
    }
}
