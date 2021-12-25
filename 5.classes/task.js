//Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задача 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find(book => book[type] === value);
        if (findBook === undefined) return null;
        return findBook;
    }

    giveBookByName(bookName) {
        let giveBook = this.books.find(book => book.name === bookName);
        if (giveBook === undefined) return null;
        this.books = this.books.filter(book => book.name !== bookName);
        return giveBook;
    }
}

//Задача 3
class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    setSubject(subjectName) {
        this.subject = subjectName;
    }

    addMark(mark) {
        if (this.marks === undefined) {
            this.marks = [];
            this.marks.push(mark);
        } else {
            this.marks.push(mark);
        }
    }

    addMarks(...marks) {
        if (this.marks === undefined) {
            this.marks = [];
            marks.forEach(mark => this.marks.push(mark));
        } else {
            marks.forEach(mark => this.marks.push(mark));
        }
    }

    getAverage() {
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        let average = sum / this.marks.length;
        return average;
    }

    getAverageBySubject(subjectName) {
        this.marksSubject = this.marks.filter(subject => subject = subjectName);
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        let averageBySubject = sum / this.marks.length;
        return averageBySubject;
    }

    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
}
