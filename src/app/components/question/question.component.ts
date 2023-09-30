import {Component, Input} from '@angular/core';
import {Question} from "../../model/question";
import {QuestionService} from "../../service/question.service";

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})
export class QuestionComponent {
    @Input() question: Question = {
        code: [],
        question: '',
        answer: ''
    }
    @Input() showAnswer: boolean = false;

    constructor(private service: QuestionService) {

    }
}
