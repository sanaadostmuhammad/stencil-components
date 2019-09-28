/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MableSpinner {}
  interface PasswordReset {}
  interface StockFinder {}
  interface StockPrice {
    'stockSymbol': string;
  }
}

declare global {


  interface HTMLMableSpinnerElement extends Components.MableSpinner, HTMLStencilElement {}
  var HTMLMableSpinnerElement: {
    prototype: HTMLMableSpinnerElement;
    new (): HTMLMableSpinnerElement;
  };

  interface HTMLPasswordResetElement extends Components.PasswordReset, HTMLStencilElement {}
  var HTMLPasswordResetElement: {
    prototype: HTMLPasswordResetElement;
    new (): HTMLPasswordResetElement;
  };

  interface HTMLStockFinderElement extends Components.StockFinder, HTMLStencilElement {}
  var HTMLStockFinderElement: {
    prototype: HTMLStockFinderElement;
    new (): HTMLStockFinderElement;
  };

  interface HTMLStockPriceElement extends Components.StockPrice, HTMLStencilElement {}
  var HTMLStockPriceElement: {
    prototype: HTMLStockPriceElement;
    new (): HTMLStockPriceElement;
  };
  interface HTMLElementTagNameMap {
    'mable-spinner': HTMLMableSpinnerElement;
    'password-reset': HTMLPasswordResetElement;
    'stock-finder': HTMLStockFinderElement;
    'stock-price': HTMLStockPriceElement;
  }
}

declare namespace LocalJSX {
  interface MableSpinner {}
  interface PasswordReset {}
  interface StockFinder {
    'onMableSymbolSelected'?: (event: CustomEvent<string>) => void;
  }
  interface StockPrice {
    'stockSymbol'?: string;
  }

  interface IntrinsicElements {
    'mable-spinner': MableSpinner;
    'password-reset': PasswordReset;
    'stock-finder': StockFinder;
    'stock-price': StockPrice;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'mable-spinner': LocalJSX.MableSpinner & JSXBase.HTMLAttributes<HTMLMableSpinnerElement>;
      'password-reset': LocalJSX.PasswordReset & JSXBase.HTMLAttributes<HTMLPasswordResetElement>;
      'stock-finder': LocalJSX.StockFinder & JSXBase.HTMLAttributes<HTMLStockFinderElement>;
      'stock-price': LocalJSX.StockPrice & JSXBase.HTMLAttributes<HTMLStockPriceElement>;
    }
  }
}


