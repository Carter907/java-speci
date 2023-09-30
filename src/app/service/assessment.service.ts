import { Injectable } from '@angular/core';
import {invoke} from "@tauri-apps/api/tauri";
import {Question} from "../model/question";
import {Assessment} from "../model/assessment";



@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  constructor() {


  }

  getAssessments(chapter: number): Promise<Assessment[]> {

    return invoke<Assessment[]>("get_all_assessments_by_chapter", {chapter: chapter})
  }
}
