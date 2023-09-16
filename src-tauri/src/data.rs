use sqlite::{Connection};
use crate::category::Category;
use crate::question::Question;

pub fn get_all_categories() -> Vec<Category> {
    let conn = Connection::open("data/jav-speci").unwrap();

    let query = "SELECT title, description FROM categories;";
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
            }
        );
    }


    categories
}

pub fn get_assessment_questions(id: i32, chapter: i32) -> Vec<Question> {
    let mut questions: Vec<Question> = vec![];
    let conn = Connection::open("data/jav-speci");
    let query = "SELECT * FROM questions WHERE assessment_id = ?";
    for row in conn.unwrap()
        .prepare(query)
        .unwrap()
        .into_iter()
        .bind((1, id))
        .unwrap()
        .map(|row| row.unwrap()){
        questions.push(
            Question {
                code: row.read::<&str, _>("code").to_string(),
                question: row.read::<&str, _>("question").to_string(),
                correct_answer: row.read::<&str, _>("correct_answer").to_string(),
            }
        );
    }
    questions
}