import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {QuestionService} from "../../service/question.service";
import { message } from "@tauri-apps/api/dialog"

@Component({
    selector: 'app-add-question-form',
    templateUrl: './add-question-form.component.html',
    styleUrls: ['./add-question-form.component.css']
})
export class AddQuestionFormComponent {

    question = new FormControl('');
    code = new FormControl('');
    answer = new FormControl('');
    chapter = new FormControl(0);
    constructor(private questionService: QuestionService) {

    }

    addQuestion() {
        this.questionService.addQuestion(
            {
                question: this.question.value!!,
                code: this.code.value!!.split("\n"),
                answer: this.answer.value!!

            }, this.chapter.value!!
        ).finally(() => {
            message(`question added to chapter ${this.chapter.value!!}`, { title: "jav-speci", type: "info" })
        })

    }
}
