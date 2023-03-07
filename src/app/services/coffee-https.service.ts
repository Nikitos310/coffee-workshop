import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CoffeeModel} from "../model/coffee.model";

@Injectable()
export class CoffeeHttpsService {

  private coffeeUrl: string = `https://random-data-api.com/api/coffee/random_coffee`

  constructor(private http: HttpClient) {
  }

  public getCoffeeData(sizeOfItems: string): Observable<CoffeeModel[]>{
    return this.http.get<CoffeeModel[]>(this.coffeeUrl,
      { params: new HttpParams().set('size', sizeOfItems) }
    );
  }
}
