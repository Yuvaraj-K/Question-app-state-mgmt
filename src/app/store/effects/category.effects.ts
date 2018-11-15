import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {AppStore} from '../app-store';
import {CategoryActions} from '../actions';
import {Category} from '../../model';
import {CategoryService} from '../../services';
import { LoadCategoriesSuccess } from '../actions/category.actions';

@Injectable()
export class CategoryEffects {
    constructor (
        private actions$: Actions,
        private categoryActions: CategoryActions,
        private svc: CategoryService
    ) {}

    @Effect() 
    loadCategories$ = this.actions$
        .ofType(CategoryActions.LOAD_CATEGORIES)
        .switchMap(() => this.svc.getCategories())
        .map((categories: Category[]) => new LoadCategoriesSuccess(categories))
        // this.categoryActions.loadCategoriesSuccess(categories))
}
