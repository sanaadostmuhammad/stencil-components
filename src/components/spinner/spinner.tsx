import { Component, h } from '@stencil/core';

@Component({
  tag: 'mable-spinner',
  styleUrl: 'spinner.css',
  shadow: true
})
export class spinner {
  render() {
    return <div class="lds-dual-ring"></div>;
  }
}
