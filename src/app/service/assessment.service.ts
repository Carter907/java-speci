import { Injectable } from '@angular/core';
import {invoke} from "@tauri-apps/api/tauri";
import {Question} from "../model/question";



@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  constructor() {


  }

  getAssessmentQuestions(id: number): Promise<Question[]> {

    return invoke<Question[]>("get_assessment_questions", {id: id})
  }
}
