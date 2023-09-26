use serde::{Deserialize, Serialize};
use crate::question::Question;

#[derive(Serialize, Deserialize)]
pub struct Assessment {
    questions: Vec<Question>
}