import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {QuestionService} from "../../service/question.service";

@Component({
    selector: 'app-add-question-form',
    templateUrl: './add-question-form.component.html',
    styleUrls: ['./add-question-form.component.css']
})
export class AddQuestionFormComponent {

    question = new FormControl('');
    code = new FormControl('');
    answer = new FormControl('');

    constructor(private questionService: QuestionService) {

    }

    addQuestion() {

    }
}
