import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map} from 'rxjs/operators'
import {Observable} from "rxjs";
import {invoke} from "@tauri-apps/api/tauri";
import {Assessment} from "../../model/assessment";
import {Question} from "../../model/question";
import {AssessmentService} from "../../service/assessment.service";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Location} from "@angular/common";
import {QuestionComponent} from "../../components/question/question.component";

@Component({
    selector: 'app-assessment',
    templateUrl: './assessment.component.html',
    styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
    chapter: number = 0;
    assessment: Assessment = {
        id: 0,
        questions: [],
        chapter: 0,
    };
    currentQuestionIndex = 0;


    constructor(private route: ActivatedRoute, private service: AssessmentService) {

        route.paramMap.subscribe((params) => {
            let chapterStr = params.get('chapter');
            this.chapter = chapterStr !== null ? Number.parseInt(chapterStr, 10) : 0;

            service.getAssessments(this.chapter).then(assessments => {
                this.assessment = assessments[0];

            })

        })


    }

    setNextQuestion() {

        if (this.currentQuestionIndex >= this.assessment.questions.length - 1)
            return;

        this.currentQuestionIndex++

    }

    goBackQuestion() {
        if (this.currentQuestionIndex <= 0)
            return;

        this.currentQuestionIndex--;
    }

    ngOnInit(): void {

    }


    protected readonly faArrowRight = faArrowRight;
    protected readonly faArrowLeft = faArrowLeft;


}
