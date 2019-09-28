import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'stock-finder',
  styleUrl: 'stock-finder.css',
  shadow: true
})
export class StockFinder {
  stockNameInput: HTMLInputElement;
  @State() loading = false;
  @State() searchResults: { symbol: string; name: string }[] = [];
  @Event({ bubbles: true, composed: true }) mableSymbolSelected: EventEmitter<
    string
  >;

  onSelectedSymbol(symbol: string) {
    this.mableSymbolSelected.emit(symbol);
  }
  onFindStocks(event: Event) {
    event.preventDefault();
    this.loading = true;
    const stockName = this.stockNameInput.value;
    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`
    )
      .then(res => res.json())
      .then(parsedRes => {
        this.searchResults = parsedRes['bestMatches'].map(s => {
          return { name: s['2. name'], symbol: s['1. symbol'] };
        });
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.loading = false;
      });
  }

  render() {
    let content = (
      <ul>
        {this.searchResults.map(result => (
          <li onClick={this.onSelectedSymbol.bind(this, result.symbol)}>
            <strong>{result.symbol}</strong> - {result.name}
          </li>
        ))}
      </ul>
    );

    if (this.loading) content = <mable-spinner />;
    return [
      <form onSubmit={this.onFindStocks.bind(this)}>
        <input id="stock-symbol" ref={el => (this.stockNameInput = el)} />
        <button type="submit">Find!</button>
      </form>,
      content
    ];
  }
}
