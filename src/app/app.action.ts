import { createAction, props } from '@ngrx/store';

export const isLoggedInAction = createAction('[App] IsLoggedIn', props<{ payload: boolean }>());