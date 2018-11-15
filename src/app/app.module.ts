import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
// import { MaterialModule } from '@angular/material';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
   MatListModule, MatSnackBarModule,MatSelectModule,MatInputModule,MatCheckboxModule,
  MatCardModule ,MatChipsModule, MatFormFieldModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routes }   from './app.route';
import { AppComponent, CategoriesComponent, TagsComponent, 
         QuestionsComponent, QuestionAddUpdateComponent } from './components';
import { CategoryService, TagService, QuestionService } from './services';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {CategoryActions, TagActions, QuestionActions} from './store/actions';
import {CategoryEffects, TagEffects, QuestionEffects} from './store/effects';
import { default as reducer } from './store/app-store';


@NgModule({
  declarations: [
    AppComponent, CategoriesComponent, TagsComponent, 
    QuestionsComponent, QuestionAddUpdateComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    // Router
    RouterModule.forRoot(routes), 
    // Forms
    FormsModule,
    ReactiveFormsModule, MatFormFieldModule,
    HttpClientModule,

    //Material
    // MaterialModule.forRoot(),
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSnackBarModule,
  MatCardModule ,MatChipsModule,MatSelectModule,MatInputModule,MatCheckboxModule,
    //Flex
    FlexLayoutModule,

    //store
    // StoreModule.provideStore(reducer),
    StoreModule.forRoot({reducer }),
    
    //ngrx effects
    // EffectsModule.run(CategoryEffects),
    // EffectsModule.run(TagEffects),
    // EffectsModule.run(QuestionEffects),
    EffectsModule.forRoot([
      CategoryEffects,TagEffects,QuestionEffects
    ]),

  ],
  providers: [ 
    CategoryService, TagService, QuestionService,
    CategoryActions, TagActions, QuestionActions

  ],                                                                      
  bootstrap: [AppComponent]
})
export class AppModule { }
