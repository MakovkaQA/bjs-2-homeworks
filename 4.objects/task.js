function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student("Sofia", "female", 18);
let student2 = new Student("Ivan", "male", 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks != undefined && this.marks != null) {
    this.marks.push(...marks);
  } else {
      return 0;
    };   
}

Student.prototype.getAverage = function () {
  if(this.marks != undefined && this.marks.length != 0) {    
    const sumOfMarks = this.marks.reduce((acc, val) => { return acc + val});
    return sumOfMarks / this.marks.length;
  } else {
      return 0;
    };   
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
