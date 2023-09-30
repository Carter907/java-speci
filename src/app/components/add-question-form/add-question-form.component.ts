import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-question-form',
  templateUrl: './add-question-form.component.html',
  styleUrls: ['./add-question-form.component.css']
})
export class AddQuestionFormComponent {

  question = new FormControl('');
  code = new FormControl('');
  addQuestion() {

  }
}
