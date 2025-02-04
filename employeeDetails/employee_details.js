//array containing employees details
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000,specialization: 'Powerpoint' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000,specialization: 'Excel' },
    { id: 4, name: 'Riley Smith', age: 29, department: 'HR', salary: 30000,specialization: 'Python' },
    { id: 5, name: 'Jack Walden', age: 34, department: 'IT', salary: 65000,specialization: 'Javascript' },
    //... More employee records can be added here
  ];

   // Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

//Total employees button
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

//Total display HR employees button
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.specialization === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

//Total Find employees button
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }

}//Employees by specialization
function findBySpecialization() {
    const specializationEmployees = employees.filter(employee => employee.specialization === 'Javascript');
     const specializationEmployeesDisplay = specializationEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = specializationEmployeesDisplay;
}