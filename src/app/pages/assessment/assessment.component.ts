import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map} from 'rxjs/operators'
import {Observable} from "rxjs";
import {invoke} from "@tauri-apps/api/tauri";
import {Assessment} from "../../model/assessment";

@Component({
    selector: 'app-assessment',
    templateUrl: './assessment.component.html',
    styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
    chapter: string = '';
    assessmentId: string = '';
    assessment: Assessment = {
        questions: {}
    };

    constructor(private route: ActivatedRoute) {
        this.route.paramMap.subscribe((params) => {
            let chapter = params.get("chapter")
            this.chapter = chapter !== null ? chapter : "";
        })
        this.route.paramMap.subscribe((params) => {
            let assessmentId = params.get("assessmentId")
            this.assessmentId = assessmentId !== null ? assessmentId : "";
        })
        invoke();
    }

    ngOnInit(): void {

    }

}
