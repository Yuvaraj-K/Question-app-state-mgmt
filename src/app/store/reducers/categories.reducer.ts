import { Observable } from 'rxjs/Observable';
import '../../rxjs-extensions';
import {Action} from '@ngrx/store';

import {CategoryActions} from '../actions';
import { Category } from '../../model';
import { LoadCategoriesSuccess } from '../actions/category.actions';

export const categories = (state: any = [], action: LoadCategoriesSuccess): Category[] => {
  switch (action.type) {
    case CategoryActions.LOAD_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
