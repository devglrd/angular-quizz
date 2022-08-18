import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../../../store/reducer";
import {combineLatest, Observable, Subject} from "rxjs";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {getCurrent, getCurrentQuestion, getLoading, numberQuestion} from "../../../../store/quizz/quizz.selectors";
import * as QuizzActions from '../../../../store/quizz/quizz.actions'
import {Router} from "@angular/router";
import {AnswerEnum, IQuestion} from "../../../../store/quizz/type";

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit, OnDestroy {
  public loading$: Observable<any>;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  public form: FormGroup = new FormGroup<any>({});
  public question$: Observable<IQuestion>;
  public answerEnum = AnswerEnum;
  private question: IQuestion | undefined;
  private current$: Observable<number>;
  private total$: Observable<any>;
  private value: string = '';
  private values: string[] = [];

  get choices(): FormArray {
    return this.form?.get("choices") as FormArray
  }

  constructor(private router: Router, private store: Store<IAppState>, private fb: FormBuilder) {
    this.loading$ = this.store.pipe(select(getLoading()));
    this.question$ = this.store.pipe(select(getCurrentQuestion()))
    this.current$ = this.store.pipe(select(getCurrent()))
    this.total$ = this.store.pipe(select(numberQuestion()))

  }

  ngOnInit(): void {
    combineLatest([
      this.current$,
      this.total$
    ]).subscribe(([current, total]) => {
      if (total && current > total) {
        this.router.navigateByUrl('/results')
        this.store.dispatch(QuizzActions.endQuizz())
      }
    })
    this.question$.subscribe((data: IQuestion) => {
      if (data) {
        this.question = data;
        this.form = this.fb.group({
          text: this.fb.control(''),
          choices: this.fb.array([]),
        });
        if (data.answerType === AnswerEnum.choice || data.answerType === AnswerEnum.multipleChoice) {
          for (const choice of data.choices) {
            this.choices.push(this.addChoice(choice));
          }
        }
      }
    });
  }

  addChoice(choice: string) {
    return this.fb.group({
      name: choice,
    })
  }

  validate() {
    if (this.question?.answerType === AnswerEnum.choice) {
      const valid = this.question?.answer === this.value;
      return this.store.dispatch(QuizzActions.nextQuestion({
        answer: {label: this.question?.label, valid}
      }))
    }
    if (this.question?.answerType === AnswerEnum.text) {
      const valid = this.question?.answer === this.form.value.text;
      return this.store.dispatch(QuizzActions.nextQuestion({
        answer: {label: this.question?.label, valid}
      }))
    }
    if (this.question?.answerType === AnswerEnum.multipleChoice) {
      const wrongAnswer = this.values.filter((e) => {
        !this.question?.answers.includes(e);
      })
      const valid = wrongAnswer.length <= 0;
      return this.store.dispatch(QuizzActions.nextQuestion({
        answer: {label: this.question?.label, valid}
      }))
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  equals(a: any[], b: any[]) {
    return JSON.stringify(a) === JSON.stringify(b)
  };

  assign(choice: { value: { name: string } }) {
    if (this.question?.answerType === AnswerEnum.multipleChoice) {
      this.values.push(choice.value.name);
      return this.value;
    }
    this.value = choice.value.name
    return this.value;
  }
}
