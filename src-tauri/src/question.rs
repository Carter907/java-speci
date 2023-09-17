use serde::Serialize;

#[derive(Serialize, Debug)]
pub struct Question {
    pub code: String,
    pub question: String,
    pub answer: String,
}