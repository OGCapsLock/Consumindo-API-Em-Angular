import { CurrencyExchange } from './../../model/currency-exchange';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CurrencyExchangeService } from 'src/app/services/currency-exchange.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {
  @ViewChild('prices')

  prices!: ElementRef;
currencyExchange : CurrencyExchange[] = []
montante = 0;
result = 0;
price =0;


  constructor( private currency: CurrencyExchangeService) { }

  ngOnInit(): void {
    this.currency.getAllCurrencyExchange().subscribe(data =>{
      if(data){
        this.currencyExchange = data;
      }
      console.log(data);

    });

  }

  onSeleted(){
    this.price = this.prices.nativeElement.value;
    console.log("Price",this.price);

  }

  calculador(){
    console.log("teste", this.price);
    this.result = this.montante * this.price
  }


}
