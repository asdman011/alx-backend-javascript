interface Teacher {
  firstName: string; // Modifiable only when initialized
  lastName: string; // Modifiable only when initialized
  fullTimeEmployee: boolean; // Always defined
  yearsOfExperience?: number; // Optional attribute
  location: string; // Always defined
  [key: string]: any; // Allow any additional attribute without specifying the name
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Example of an additional attribute
};

console.log(teacher3);

// Directors Interface extends the Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Function printTeacher
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printedTeacher: string = printTeacher('John', 'Doe');
console.log(printedTeacher);

// Interface for StudentClass constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create an instance of StudentClass
const student: StudentClass = new StudentClass('Alice', 'Smith');
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: Alice

