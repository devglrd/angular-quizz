import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/reducer";
import {Subject, takeUntil} from "rxjs";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AddScore, EndQuizz, NextQuestion} from "../../../../store/global/global.actions";
import {QuizzService} from "../../services";

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit, OnDestroy {
  public loading = true;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  public question: any;

  public form: FormGroup = new FormGroup<any>({});
  public value: any;
  public values: any[] = [];
  public quizz: any;
  public bestScore: any = '0';
  public history: any[] = [];
  public isNewBestScore = false;

  get choices(): FormArray {
    return this.form?.get("choices") as FormArray
  }

  constructor(private store: Store<IAppState>,
              private fb: FormBuilder,
              private quizzService: QuizzService) {
  }

  ngOnInit(): void {
    this.store.select('global').pipe(takeUntil(this.destroy$)).subscribe(({quizz, bestScore, isNewBestScore}) => {
      this.quizz = quizz;
      this.isNewBestScore = isNewBestScore;
      this.bestScore = bestScore;
      if (quizz.start) {
        this.question = quizz.questions[quizz.current];
        this.form = this.fb.group({
          text: this.fb.control(''),
          choices: this.fb.array([]),
        });

        if (this.question.answerType === 'choice' || this.question.answerType === 'multiple-choice') {
          for (const choice of this.question.choices) {
            this.choices.push(this.addChoice(choice));
          }
        }
        this.loading = false;
      }
    })
  }

  addChoice(choice: string) {
    return this.fb.group({
      name: choice,
    })
  }

  validate() {
    if (this.question.answerType === 'choice') {
      const isRight = this.question.answer === this.value;
      this.addToHistory(this.question.label, this.value, isRight);
      if (isRight) {
        this.store.dispatch(new AddScore())
      }
    } else if (this.question.answerType === 'text') {
      const isRight = this.question.answer === this.form.value.text;
      this.addToHistory(this.question.label, this.form.value.text, isRight);
      if (isRight) {
        this.store.dispatch(new AddScore())
      }
    } else if (this.question.answerType === 'multiple-choice') {
      const wrongAnswer = this.values.filter((e) => {
        return !this.question.answers.includes(e);
      })
      const isRight = wrongAnswer.length <= 0;
      this.addToHistory(this.question.label, this.values, isRight);
      if (isRight) {
        this.store.dispatch(new AddScore())
      }
    }
    if (this.quizz.questions.length - 1 === this.quizz.current) {
      this.store.dispatch(new EndQuizz(this.quizz.score))
    } else {
      this.store.dispatch(new NextQuestion())
    }

  }

  public addToHistory(question: any, value: any, right: boolean) {
    this.history.push({question, value, right})
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  equals(a: any[], b: any[]) {
    return JSON.stringify(a) === JSON.stringify(b)
  };

  assign(choice: { value: { name: string } }) {
    if (this.question.answerType === 'multiple-choice') {
      this.values.push(choice.value.name);
      return this.value;
    }
    this.value = choice.value.name
    return this.value;

  }
}
