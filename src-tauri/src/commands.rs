use crate::assessment::Assessment;
use crate::category::Category;
use crate::data;
use crate::question::Question;

#[tauri::command]
pub fn get_all_categories() -> Vec<Category> {
    data::get_all_categories()
}

#[tauri::command]
pub fn get_all_assessments_by_chapter(chapter: i64) -> Vec<Assessment> {
   data::get_all_assessments_by_chapter(chapter)
}