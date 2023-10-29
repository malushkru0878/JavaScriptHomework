//Задача 1
class PrintEditionItem {
    type = null;
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;

        }
        else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    type = "magazine";

}

class Book extends PrintEditionItem {
    type = "book";
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
}

class NovelBook extends Book {
    type = "novel";
}
class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}


// Задача 2
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
        let result = this.books.find(b => b[type] === value);
        return result ? result : null;
    }

    giveBookByName(bookName) {
        let bookIndex = this.books.findIndex(b => b.name === bookName);
        if (bookIndex != -1) {
            let res = this.books[bookIndex];
            this.books.splice(bookIndex, 1);
            return res;
        } else {
            return null;
        }
    }
}