import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map} from 'rxjs/operators'
import {Observable} from "rxjs";
import {invoke} from "@tauri-apps/api/tauri";
import {Assessment} from "../../model/assessment";
import {Question} from "../../model/question";
import {AssessmentService} from "../../service/assessment.service";

@Component({
    selector: 'app-assessment',
    templateUrl: './assessment.component.html',
    styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
    chapter: number = 0;
    assessmentId: number = 0;
    assessment: Assessment = {
        questions: []
    };

    constructor(private route: ActivatedRoute, private service: AssessmentService) {
        route.paramMap.subscribe((params) => {
            let chapterStr = params.get('chapter');
            this.chapter = chapterStr !== null ? Number.parseInt(chapterStr, 10) : 0;

            let assessmentIdStr = params.get("id")
            this.assessmentId = assessmentIdStr !== null ? Number.parseInt(assessmentIdStr, 10) : 0;


            service.getAssessmentQuestions(this.assessmentId).then(questions => {
                this.assessment.questions = questions;
            })
        })


    }

    ngOnInit(): void {

    }

}
