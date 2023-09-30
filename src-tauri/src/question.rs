use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Question {
    pub id: i64,
    pub code: Vec<String>,
    pub question: String,
    pub answer: String,
}