function uploadFile(categoryId) {
    const categorySection = document.getElementById(categoryId);
    const input = categorySection.querySelector('input[type="file"]');
    const fileList = categorySection.querySelector('.file-list');

    if (input.files.length > 0) {
        const file = input.files[0];
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.href = URL.createObjectURL(file);
        link.textContent = file.name;
        link.download = file.name;

        listItem.appendChild(link);
        fileList.appendChild(listItem);

        input.value = '';
        alert('فایل با موفقیت آپلود شد!');
    } else {
        alert('لطفاً یک فایل انتخاب کنید.');
    }
}