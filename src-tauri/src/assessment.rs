use serde::{Deserialize, Serialize};
use crate::question::Question;

#[derive(Serialize, Deserialize)]
pub struct Assessment {
    pub id: i64,
    pub chapter: i64,
    pub questions: Vec<Question>
}