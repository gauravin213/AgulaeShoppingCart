import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { incrementAction, decrementAction, resetAction } from '../storeRxjs/actions/counter.action';


class State{
  count: number;
}

interface AppState {
  count: {
    combineReducerFeatureA : number
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  count: Observable<number>;
  //count: any;
  constructor(private store: Store<AppState>) {
    //this.count = store.select('count');

    /*let pp: number;
    store.subscribe(s => {
      //console.log(s.count.count2);
      pp = s.count.count2;
    });*/
  
    store.select('count').subscribe((data) => {
      this.count = data.combineReducerFeatureA;
      console.log(data.combineReducerFeatureA);
    });
   
  }

   getState(store: Store<State>): State {
    let state: State;

    store.subscribe(s => state = s);

    return state;
}

  increment() {
    this.store.dispatch(incrementAction());
  }

  decrement() {
    this.store.dispatch(decrementAction());
  }

  reset() {
    this.store.dispatch(resetAction());
  }

  ngOnInit(): void {
  }



}


