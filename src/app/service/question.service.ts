import { Injectable } from '@angular/core';
import {Question} from "../model/question";
import { invoke } from "@tauri-apps/api/tauri"

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  addQuestion(question: Question) {

  }
}
