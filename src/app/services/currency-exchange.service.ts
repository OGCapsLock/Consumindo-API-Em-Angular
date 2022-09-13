import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {API_URL} from "../../environments/environment";
import { CurrencyExchange } from "../model/currency-exchange";



@Injectable()
export class CurrencyExchangeService {
  constructor(private http: HttpClient) {
  }


  getAllCurrencyExchange(){
       return this.http.get<CurrencyExchange[]>(`${API_URL}`);
  }
  getAllCurrencyExchange1(coutry: string){
       let url ='https://open.er-api.com/v6/latest/'+coutry
       return this.http.get(url);
  }
  
  
}
