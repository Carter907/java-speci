use serde::Serialize;

#[derive(Serialize)]
pub struct Question {
    pub code: String,
    pub question: String,
    pub correct_answer: String,
}