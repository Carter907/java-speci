use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Category {
    pub id: i32,
    pub title: String,
    pub description: String,
    pub chapter: i64,

}