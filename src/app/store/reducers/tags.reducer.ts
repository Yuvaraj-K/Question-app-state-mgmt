import { Observable } from 'rxjs/Observable';
import '../../rxjs-extensions';
import {Action} from '@ngrx/store';

import { TagActions, LoadTagsSuccess } from '../actions/tag.actions';

export const tags = (state: any = [], action: LoadTagsSuccess): string[] => {
  switch (action.type) {
    case TagActions.LOAD_TAGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
