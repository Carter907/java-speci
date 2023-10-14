use sqlite::{Connection, Value};
use crate::assessment::Assessment;
use crate::category::Category;
use crate::dto::question_dto::QuestionDto;
use crate::question::Question;

pub fn get_all_categories() -> Vec<Category> {
    let conn = Connection::open("./data/jav-speci").unwrap();

    let query = "SELECT * FROM categories;";
    let mut categories = vec![];

    for row in conn
        .prepare(query)
        .unwrap()
        .into_iter()
        .map(|row| row.unwrap()) {
        categories.push(
            Category {
                id: row.read::<i64, _>("id"),
                title: row.read::<&str, _>("title").to_string(),
                description: row.read::<&str, _>("description").to_string(),
                chapter: row.read::<i64, _>("chapter"),
            }
        );
    }


    categories
}

pub fn add_question(question: QuestionDto, chapter: i64) {
    let conn = Connection::open("./data/jav-speci").unwrap();
    let id: i64;
    match get_all_assessments_by_chapter(chapter).pop() {
        Some(assessment) => {

            id = assessment.id;
        }
        None => {
            add_assessment(chapter);
            id = get_all_assessments_by_chapter(chapter).pop().unwrap().id;
        }
    }

    conn.execute(
        format!(
            "INSERT INTO questions(question, answer, code, assessment_id) VALUES ('{}', '{}', '{}', {});",
            question.question,
            question.answer,
            question.code.join("' | char(10) | '\n"),
            id
        )).expect("failed to execute insert");
}


pub fn get_all_assessments_by_chapter(chapter: i64) -> Vec<Assessment> {
    let mut assessments: Vec<Assessment> = vec![];
    let conn = Connection::open("./data/jav-speci");
    let query = "SELECT * FROM assessments WHERE chapter = ?";

    for row in conn.unwrap()
        .prepare(query)
        .unwrap()
        .into_iter()
        .bind((1, chapter))
        .unwrap()
        .map(|row| row.unwrap()) {
        let (id, chapter) = (row.read::<i64, _>("id"),
                             row.read::<i64, _>("chapter"));
        assessments.push(
            Assessment {
                id,
                chapter,
                questions: get_assessment_questions(id),
            }
        );
    }

    assessments
}

fn add_assessment(chapter: i64) {
    let mut conn = Connection::open("./data/jav-speci").unwrap();
    let mut statement = conn.prepare("INSERT INTO assessments(chapter) VALUES(?)")
        .unwrap();
    statement.bind((1, chapter)).expect("failed to bind");

    statement.iter().next();

}

fn get_assessment_questions(assessment_id: i64) -> Vec<Question> {
    let mut questions: Vec<Question> = vec![];
    let conn = Connection::open("./data/jav-speci");
    let query = "SELECT * FROM questions WHERE assessment_id = ?";
    for row in conn.unwrap()
        .prepare(query)
        .unwrap()
        .into_iter()
        .bind((1, assessment_id))
        .unwrap()
        .map(|row| row.unwrap()) {
        questions.push(
            Question {
                id: row.read::<i64, _>("id"),
                code: row.read::<&str, _>("code").to_string().lines().map(|line| line.to_string()).collect(),
                question: row.read::<&str, _>("question").to_string(),
                answer: row.read::<&str, _>("answer").to_string(),
            }
        );
    }
    println!("{questions:?}");
    questions
}