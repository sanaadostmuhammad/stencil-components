import { Component, h } from '@stencil/core';
// import '@ionic/core';

@Component({
  tag: 'password-reset',
  styleUrl: 'password-reset.css',
  shadow: true
})
export class PasswordReset {
  render() {
    return [
      <ion-item>
        <ion-label position="floating">Floating Label</ion-label>
        <ion-input></ion-input>
      </ion-item>
    ];
  }
}
