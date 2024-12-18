// Создаем медиазапрос для экранов с максимальной шириной 1200px
const mediaQuery = window.matchMedia('(max-width: 1200px)');

// Переменные для управления слайдером
let reviewsSliderInterval = null; // Переменная для хранения ID интервала
let currentIndex = 0;
const comments = document.querySelectorAll('.comment');
const totalComments = comments.length;

// Функция для показа следующего отзыва
function showNextComment() {
    // Скрываем текущий отзыв
    comments[currentIndex].classList.remove('active');

    // Обновляем индекс
    currentIndex = (currentIndex + 1) % totalComments;

    // Показываем следующий отзыв
    comments[currentIndex].classList.add('active');

    // Перемещаем слайдер
    const slider = document.getElementById('reviewsSlider');
    slider.style.transform = `translateX(-${currentIndex * (100 / totalComments)}%)`;
}

// Функция для настройки слайдера
function setupSlider() {
    return setInterval(() => {
        showNextComment();
    }, 3000); // Меняем отзыв каждые 3 секунды
}

// Функция для проверки состояния слайдера
function checkSlider() {
    if (mediaQuery.matches) {
        // Запускаем слайдер, если ширина меньше 1200px
        if (!reviewsSliderInterval) {
            reviewsSliderInterval = setupSlider(); // Запускаем слайдер отзывов
            console.log('Слайдер запущен.');
        }
    } else {
        // Останавливаем слайдер при ширине больше 1200px и сбрасываем его позицию
        if (reviewsSliderInterval) {
            clearInterval(reviewsSliderInterval);
            reviewsSliderInterval = null;

            // Сброс позиции слайдера
            const slider = document.getElementById('reviewsSlider');
            slider.style.transform = 'translateX(0)';

            // Сбрасываем активный класс у всех комментариев и показываем первый
            comments.forEach(comment => {
                comment.classList.remove('active');
            });
            currentIndex = 0;
            comments[currentIndex].classList.add('active'); // Показываем первый комментарий

            console.log('Слайдер остановлен и сброшен.');
        }
    }
}

// Начальная проверка состояния слайдера
checkSlider();

// Подписываемся на изменения в медиазапросе
mediaQuery.addEventListener('change', checkSlider);
