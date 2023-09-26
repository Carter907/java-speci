use sqlite::{Connection};
use crate::assessment::Assessment;
use crate::category::Category;
use crate::question::Question;

pub fn get_all_categories() -> Vec<Category> {
    let conn = Connection::open("data/jav-speci").unwrap();

    let query = "SELECT * FROM categories;";
    let mut categories = vec![];

    for row in conn
        .prepare(query)
        .unwrap()
        .into_iter()
        .map(|row| row.unwrap()) {
        categories.push(
            Category {
                title: row.read::<&str, _>("title").to_string(),
                description: row.read::<&str, _>("description").to_string(),
                chapter: row.read::<i64, _>("chapter")
            }
        );
    }


    categories
}
pub fn get_all_assessments_by_chapter(chapter: i32) {
    let mut assessments: Vec<Assessment> = vec![];
    let conn = Connection::open("data/jav-speci");
    let query = "SELECT question FROM questions WHERE "
}

pub fn get_assessment_questions(id: i64) -> Vec<Question> {
    let mut questions: Vec<Question> = vec![];
    let conn = Connection::open("data/jav-speci");
    let query = "SELECT code, question, answer FROM questions WHERE assessment_id = ?";
    for row in conn.unwrap()
        .prepare(query)
        .unwrap()
        .into_iter()
        .bind((1, id))
        .unwrap()
        .map(|row| row.unwrap()){
        questions.push(
            Question {
                code: row.read::<&str, _>("code").to_string().lines().map(|line| line.to_string()).collect(),
                question: row.read::<&str, _>("question").to_string(),
                answer: row.read::<&str, _>("answer").to_string(),
            }
        );
    }
    println!("{questions:?}");
    questions
}