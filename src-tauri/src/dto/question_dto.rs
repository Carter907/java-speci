use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct QuestionDto {
    pub code: Vec<String>,
    pub question: String,
    pub answer: String,
}