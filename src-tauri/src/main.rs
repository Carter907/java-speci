// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod question;
mod category;
mod commands;
mod data;

use commands::get_speci_categories;
use commands::get_assessment_questions;


fn main() {
    include_bytes!("../data/jav-speci");
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_speci_categories,
            get_assessment_questions,


        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
