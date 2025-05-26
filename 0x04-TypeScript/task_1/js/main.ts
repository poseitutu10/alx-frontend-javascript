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
interface Teacher extends Pick<Student, "firstName" | "lastName"> {
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
  contract: false,
};

console.log(teacher3);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: "Mathias",
  lastName: "Doe",
  location: "Sakumono",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName[0].toUpperCase()}. ${lastName}`;
};

const printteacher: string = printTeacher("Joe", "Doe");
console.log(printteacher);

interface printTeacherFunctionInterface {
  (firstName: string, lastName: string): string;
}

const printTeacherFunction: printTeacherFunctionInterface = (
  firstName: string,
  lastName: string
) => {
  return `${firstName[0].toUpperCase()}. ${lastName}`;
};

const interTeacher: string = printTeacherFunction("Phinehas", "Osei-Tutu");
console.log(interTeacher);

interface ClassProperties {
  firstName: string;
  lastName: string;
}

interface ClassConstructor {
  new (fname: string, lname: string): ClassProperties;
}

class StudentClass implements ClassProperties {
  firstName: string;
  lastName: string;

  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
  }

  workOnHomework(): string {
    return `Currently Working`;
  }

  displayName(): string {
    return this.firstName;
  }
}

const myClassInstance = (
  constructor: ClassConstructor,
  fname: string,
  lname: string
): ClassProperties => {
  return new constructor(fname, lname);
};

const classInstance = myClassInstance(StudentClass, "Phinehas", "Osei-Tutu");
console.log(classInstance);

//Advance Types
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface
  extends Pick<DirectorInterface, "workFromHome" | "getCoffeeBreak"> {
  workTeacherTasks(): string;
}

class DirectorClass implements DirectorInterface {
  workFromHome(): string {
    return `Working from home`;
  }
  getCoffeeBreak(): string {
    return `Getting a coffee break`;
  }
  workDirectorTasks(): string {
    return `Getting to director tasks`;
  }
}

class TeacherClass implements TeacherInterface {
  workFromHome(): string {
    return `Cannot work from home`;
  }

  getCoffeeBreak(): string {
    return `Cannot have a break`;
  }

  workTeacherTasks(): string {
    return `Getting to work`;
  }
  

}

interface construct {
  new (): void;
}

const createEmployee = (salary: number | string): TeacherClass | DirectorClass => {
  if((typeof salary == "number") && salary < 500){
    return new TeacherClass();
  }
  else if((typeof salary == "number") && salary >= 500){
    return new DirectorClass;
  }
}

const employeeInstance = createEmployee(1000);
console.log(employeeInstance)