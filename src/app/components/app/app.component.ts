import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatSnackBar } from "@angular/material";

import { AppStore } from '../../store/app-store';
import { CategoryActions, TagActions, QuestionActions } from '../../store/actions';
import { LoadTags } from '../../store/actions/tag.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'trivia!';
  sub: any;

  constructor(private categoryActions: CategoryActions,
              private tagActions: TagActions,
              private questionActions: QuestionActions,
              private store: Store<AppStore>,
              private router: Router,
              public snackBar: MatSnackBar) {
    this.sub = store.select(s => s.questionSaveStatus).filter(status => status === "SUCCESS").subscribe(() => {
      this.snackBar.open("Question saved!", "", {duration: 2000});
      this.router.navigate(['/questions']);
    })
  }

  ngOnInit () {
    this.store.dispatch(this.categoryActions.loadCategories());
    this.store.dispatch(new LoadTags);
    this.store.dispatch(this.questionActions.loadQuestions());
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

}
