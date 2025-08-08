chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
    // Список расширений для изображений
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    
    // Получаем расширение файла
    let ext = item.filename.split('.').pop().toLowerCase();
    
    if (imageExtensions.includes(ext)) {
        // Картинки в папку "Изображения"
        suggest({ filename: "Изображения/" + item.filename, conflictAction: "uniquify" });
    } else {
        // Всё остальное в стандартную "Загрузки"
        suggest({ filename: item.filename, conflictAction: "uniquify" });
    }
});
