import { Injectable } from '@angular/core';
import {Question} from "../model/question";
import { invoke } from "@tauri-apps/api/tauri"
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  addQuestion(question: Question, chapter: number): Promise<any> {
    return invoke("add_question", { question: question, chapter: chapter })
  }
}
