export default function createIteratorObject(report) {
  const departments = report.allEmployees;
  const employeesIterator = {
    [Symbol.iterator]() {
      const departmentKeys = Object.keys(departments);
      let currentDepartmentIndex = 0;
      let currentEmployeeIndex = 0;

      return {
        next() {
          if (currentDepartmentIndex < departmentKeys.length) {
            const currentDepartment = departmentKeys[currentDepartmentIndex];
            const employees = departments[currentDepartment];

            if (currentEmployeeIndex < employees.length) {
              const employee = employees[currentEmployeeIndex];
              currentEmployeeIndex++;
              return { value: employee, done: false };
            } else {
              // Move to the next department
              currentEmployeeIndex = 0;
              currentDepartmentIndex++;
              return this.next(); // Recursively call next for the next department
            }
          }

          return { done: true };
        },
      };
    },
  };

  return employeesIterator;
}

