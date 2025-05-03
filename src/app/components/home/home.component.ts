import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ]
})
export class HomeComponent {
    public buttons = [
        { name: 'Download', click: () => this.download() },
        { name: 'Activate Game', click: () => this.activateGame() },
        { name: 'Discord', click: () => this.goToDiscord() },
        { name: 'Website', click: () => this.goToWebsite() },
        { name: 'Settings', click: () => this.settings() }
    ]

    private download(): void {

    }

    private activateGame(): void {

    }

    private goToDiscord(): void {

    }

    private goToWebsite(): void {
        
    }

    private settings(): void {

    }
}
