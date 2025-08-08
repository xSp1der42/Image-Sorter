chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    
    let ext = item.filename.split('.').pop().toLowerCase();
    
    if (imageExtensions.includes(ext)) {
        suggest({ filename: "Изображения/" + item.filename, conflictAction: "uniquify" });
    } else {
        suggest({ filename: item.filename, conflictAction: "uniquify" });
    }
});

