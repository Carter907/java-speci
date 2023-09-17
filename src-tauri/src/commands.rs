use crate::category::Category;
use crate::data;
use crate::question::Question;

#[tauri::command]
pub fn get_speci_categories() -> Vec<Category> {
    data::get_all_categories()
}

#[tauri::command]
pub fn get_assessment_questions(id: i64) -> Vec<Question> {
   data::get_assessment_questions(id)
}