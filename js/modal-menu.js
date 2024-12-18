    // Убедитесь, что скрипт загружается после загрузки DOM
    document.addEventListener('DOMContentLoaded', function() {
        // Открытие модального меню
        document.getElementById('menu-toggle').addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            document.getElementById('modal-menu').style.display = 'flex'; // Показываем меню
        });

        // Закрытие модального меню
        document.getElementById('close-btn').addEventListener('click', function(event) {
            document.getElementById('modal-menu').style.display = 'none'; // Скрываем меню
        });

        // Закрытие меню при клике вне его области (опционально)
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('modal-menu');
            if (event.target === modal) {
                modal.style.display = 'none'; // Скрываем меню
            }
        });
    });