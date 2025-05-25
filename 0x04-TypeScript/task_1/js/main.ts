interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Phinehas",
  lastName: "Osei-Tutu",
  age: 23,
  location: "Tema",
};

const student2: Student = {
  firstName: "Pappy",
  lastName: "Mensah",
  age: 28,
  location: "Sakumono",
};

const StudentList: Student[] = [student1, student2];

console.log(StudentList);


//Creating a teacher interface
interface Teacher extends Pick<Student, "firstName" | "lastName">{
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "Felix",
  lastName: "Koney Okpoti",
  fullTimeEmployee: false,
  location: "London",
  contract: false
}

console.log(teacher3)




