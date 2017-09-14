import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { TermsAndPrivacyComponent } from './terms-and-privacy.component';

export * from './terms-and-privacy.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    TermsAndPrivacyComponent
  ],
  exports: [
    TermsAndPrivacyComponent
  ]
})
export class IonPluriutilsModule {
}
