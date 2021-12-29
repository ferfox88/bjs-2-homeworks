//Задача 1
function parseCount(value) {
    let number = Number.parseInt(value);
    if (isNaN(number)) {
        const invalidValueError = new Error("Невалидное значение");
        throw invalidValueError;
    }
    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (invalidValueError) {
        return invalidValueError;
    }
}

//Задача2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a) {
            const triangleError = new Error("Треугольник с такими сторонами не существует");
            throw triangleError;
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch (triangleError) {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        }
    }
}
