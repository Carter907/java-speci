use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Category {
    pub title: String,
    pub description: String,
    pub chapter: i64,

}