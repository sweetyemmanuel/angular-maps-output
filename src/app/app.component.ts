import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concat, from, merge, observable, of } from 'rxjs';
import { concatMap, mergeMap, switchMap,tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  private url ='https://jsonplaceholder.typicode.com/todos';

withconcatMap$ = of(1,2,3).pipe(tap(id=>console.log('concatmap result',id)),
concatMap(id=>this.http.get(`${this.url}/${id}`)));

withmergeMap$ = of(4,5,6).pipe(tap(id=>console.log('mergemap result',id)),
mergeMap(id=>this.http.get(`${this.url}/${id}`)));

withswitchMap$=of(4,7,9).pipe(tap(id=>console.log('switch result',id)),
switchMap(id=>this.http.get(`${this.url}/${id}`)));

  constructor(private http:HttpClient){
   this.withconcatMap$.subscribe(item=>console.log('concat result',item));
   this.withmergeMap$.subscribe(itm=>console.log('Merge result',itm));
   this.withswitchMap$.subscribe(i=>console.log('switch sub result ',i));
  }
  

 ngOnInit():void{
  const food=["pizza","bun","burger"];
  const $food=from(food);
  //$food.subscribe((d)=>console.log(d));
  const city=['hyd','chennai','pune'];
  const $city=from(city);
  merge($food,$city).subscribe((d)=>console.log(d));




}
}