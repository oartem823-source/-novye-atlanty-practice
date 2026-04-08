// calc_materials.js - расчёт объёма бетона
function calcBetonVolume(length, width, height) {
    if (length <= 0 || width <= 0 || height <= 0) {
        return 0;
    }
    return length * width * height;
}

// Для проверки в консоли браузера
console.log("Объём бетона (5x4x0.5): " + calcBetonVolume(5, 4, 0.5));