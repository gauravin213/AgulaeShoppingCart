import { Component } from '@angular/core';
//import { createAction, createReducer, on } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgularShoppingCart';

  /*increment = createAction('[Counter Component] Increment');

  initialState = 0;

  _counterReducer = createReducer(
    this.initialState,
    on(this.increment, (state) => state + 1),
  );

  counterReducer(state, action) {
    return this._counterReducer(state, action);
  }*/

}
