import {Question} from "./question";

export interface Assessment {
    id: number,
    questions: Question[];
    chapter: number
}