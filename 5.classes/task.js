class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  set state(number) {
    number < 0 ? this._state = 0 :
    number > 100 ? this._state = 100 :
    this._state = number;
  }
  get state() {
    return this._state;
  }
  fix() {
    if(this._state * 1.5 > 100) {
      return this._state = 100;           
    } else {
      return this._state *= 1.5;
    }    
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

  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }

    addBook(book) {
      if(book.state > 30) {
        this.books.push(book);
      } 
    }

    findBookBy(type, value) {
      let result = this.books.find(book => book[type] === value);
      if(result === undefined) {
        result = null;
      }
      return result;
    }

    giveBookByName(bookName) {  
      let result = null;   
      for(let i = 0; i < this.books.length; i++) {        
        if(this.books[i].name === bookName) {
          result = this.books[i];
          this.books.splice(i, 1);          
        } 
      }
      return result;
    }
  }



  class Student {
    constructor(name) {
      this.name = name;      
      this.marks = {};
    }   

    addMark(mark, subject) {      
      if(mark < 2 || mark > 5) {
        return;
      }; 
      if(this.marks[subject] === undefined) {
        this.marks[subject] = [];          
      }                
      this.marks[subject].push(mark);       
    }

    getAverageBySubject(subjectName) {      
      if(this.marks[subjectName] != undefined) {
        const sumOfMarks = this.marks[subjectName].reduce((acc, val) => { return acc + val});
        return sumOfMarks / this.marks[subjectName].length;                  
      } else {
        return 0;
      }               

    }

    getAverage() {
      debugger
      const arrSubject = Object.keys(this.marks);
      if(arrSubject.length === 0) {
        return 0;         
      } else {         
        let sumOfMarks = 0; 
        for(let i = 0; i < arrSubject.length; i++) {          
          sumOfMarks += this.getAverageBySubject(arrSubject[i]);
        }       
        return sumOfMarks / arrSubject.length;          
      };  
    }     
  }  