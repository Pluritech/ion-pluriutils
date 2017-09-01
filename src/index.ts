import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsAndPrivacyComponent } from './terms-and-privacy.component';

export * from './terms-and-privacy.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TermsAndPrivacyComponent
  ],
  exports: [
    TermsAndPrivacyComponent
  ]
})
export class SampleModule {
}
