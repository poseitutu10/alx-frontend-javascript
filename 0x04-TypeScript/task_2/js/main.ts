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

class Director implements DirectorInterface {
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

class Teacher implements TeacherInterface {
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

const createEmployee = (salary: number | string): Teacher | Director => {
  if (typeof salary == "string") {
    salary = salary.replace(/\D/g, "");
    salary = parseInt(salary, 10);
  }
  if (typeof salary == "number" && salary < 500) {
    return new Teacher();
  } else if (typeof salary == "number" && salary >= 500) {
    return new Director();
  }
};

const employeeInstance = createEmployee("$400");
console.log(employeeInstance);

//Creating functions specific to employees

const isDirector = (employees: Director | Teacher): employees is Director => {
  return (employees as Director).workDirectorTasks !== undefined;
};

const result = isDirector(createEmployee(700));


const executeWork = (employees: Director | Teacher): string => {
  if ((employees as Director).workDirectorTasks) {
    return (employees as Director).workDirectorTasks();
  } else if ((employees as Teacher).workTeacherTasks) {
    return (employees as Teacher).workTeacherTasks();
  }
};

const ex1 = executeWork(createEmployee(200));
const ex2 = executeWork(createEmployee(700));
console.log(ex1);
console.log(ex2)
