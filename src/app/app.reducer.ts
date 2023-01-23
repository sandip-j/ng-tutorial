import { createReducer, on } from '@ngrx/store';
import { isLoggedInAction } from './app.action';

export const initialState: AppData = {
    isLoggedIn: false
};

export const AppReducer = createReducer(
  initialState,
  on(isLoggedInAction, (state, {payload }) => {
    console.log("action dispatched!!", state, payload);
    return { ...state, isLoggedIn: payload};
  })
);

export interface AppData {
    isLoggedIn: boolean;
}