use serde::Serialize;

#[derive(Serialize, Debug)]
pub struct Question {
    pub id: i32,
    pub code: Vec<String>,
    pub question: String,
    pub answer: String,
}