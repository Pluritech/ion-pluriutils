import { Component, Input } from '@angular/core';

@Component({
  selector: 'terms-and-privacy',
  template: `<ion-header>
    <ion-navbar [color]="color" no-border-bottom>
      <ion-title>
        {{ title }}
      </ion-title>
    </ion-navbar>


    <ion-toolbar no-border-top [color]="color">
        <ion-segment [(ngModel)]="type" clear [color]="segmentcolor">
          <ion-segment-button value="terms">
            Termos
          </ion-segment-button>
          <ion-segment-button value="privacy">
            Políticas
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>

  </ion-header>

  <ion-content padding>
    <div [ngSwitch]="type">
      <div *ngSwitchCase="'terms'">
        {{ terms }}
      </div>
      <div *ngSwitchCase="'privacy'">
        {{ privacy }}
      </div>
    </div>
  </ion-content>`
})
export class TermsAndPrivacyComponent {

  public type: string = 'terms';
  @Input() title: string = 'Termos e Políticas';
  @Input() color: string = 'light';
  @Input() terms: string = '';
  @Input() privacy: string = '';
  @Input() segmentcolor: string = 'primary';

  constructor() {
  }

}
