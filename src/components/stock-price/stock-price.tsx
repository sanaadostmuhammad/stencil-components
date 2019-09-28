import {
  Component,
  h,
  State,
  Element,
  Prop,
  Watch,
  Listen
} from '@stencil/core';
import { AV_API_KEY } from '../../global/global';
@Component({
  tag: 'stock-price',
  styleUrl: 'stock-price.css',
  shadow: true
})
export class StockPrice {
  StockInput: HTMLInputElement;
  initialStockSymbol: string;
  @State() error: string;

  @Element() el: HTMLElement;

  @State() fetchedPrice: number;
  @State() stockUserInput: string;
  @State() stockInputValid = false;
  @State() loading = false;

  @Prop({ mutable: true, reflectToAttr: true }) stockSymbol: string;

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.stockUserInput = this.stockSymbol;
      this.fetchStockPrice(this.stockSymbol);
    }
  }
  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    this.stockInputValid = this.stockUserInput.trim() !== '';
  }
  onFetchStockPrice(event: Event) {
    event.preventDefault();
    // const stockSymbol = (this.el.shadowRoot.querySelector(
    //   '#stock-symbol'
    // ) as HTMLInputElement).value;
    this.stockSymbol = this.StockInput.value;
    // this.fetchStockPrice(stockSymbol);
  }

  componentDidLoad() {
    if (this.stockSymbol) {
      this.initialStockSymbol = this.stockSymbol;
      this.stockUserInput = this.stockSymbol;
      this.fetchStockPrice(this.stockSymbol);
    }
  }
  componentDidUpdate() {
    // console.log('Component did update');
    // if (this.stockSymbol != this.initialStockSymbol) {
    //   this.initialStockSymbol = this.stockSymbol;
    //   this.fetchStockPrice(this.stockSymbol);
    // }
  }
  @Listen('mableSymbolSelected', { target: 'body' }) //listen globally -  possible through bubbling
  onStockSymbolSelected(event: CustomEvent) {
    if (event.detail && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail;
      this.stockInputValid = true;
      // this.fetchStockPrice(event.detail);
    }
  }

  hostData() {
    return { class: this.error ? 'error' : '' };
  }
  fetchStockPrice(stockSymbol: string) {
    this.loading = true;
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`
    )
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Invalid');
        }
        return res.json();
      })
      .then(parsedRes => {
        console.log(parsedRes);
        if (!parsedRes['Global Quote']['05. price']) {
          throw new Error('Invalid Symbol');
        }
        this.error = null;
        this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.error = err.message;
        this.loading = false;
      });
  }
  render() {
    let dataContent = 'Please enter a symbol!';
    if (this.error) {
      dataContent = <p>{this.error}</p>;
    }
    if (this.fetchedPrice) {
      dataContent = <p>Price: ${this.fetchedPrice}</p>;
    }
    if (this.loading) dataContent = <mable-spinner />;
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input
          id="stock-symbol"
          ref={el => (this.StockInput = el)}
          value={this.stockUserInput}
          onInput={this.onUserInput.bind(this)}
        />
        <button type="submit" disabled={!this.stockInputValid || this.loading}>
          Fetch
        </button>
      </form>,

      <div>{dataContent}</div>
    ];
  }
}
