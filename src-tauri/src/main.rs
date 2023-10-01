// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod question;
mod category;
mod commands;
mod data;
mod assessment;
mod dto;

use commands::get_all_assessments_by_chapter;
use commands::get_all_categories;
use commands::add_question;


fn main() {
    include_bytes!("../data/jav-speci");
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_all_assessments_by_chapter,
            get_all_categories,
            add_question,


        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
