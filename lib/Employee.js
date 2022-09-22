
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email;
    }

   //Method to get specific name 
    getName() {
      return this.name;
    }



    //Method to get specific ID
    getId() {
      return this.id;
    }

    

    //Method to get specific email address
    getEmail() {
      return this.email;
    }



    //Method to get role. Returns "employee", will be overidden to return 
    getRole() {
      return "Employee";
    }
}

module.exports = Employee;