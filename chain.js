const users = {
    id: 1, name: "Nafiz", age: 30,
    jobName: {
        freelancer: "freelancer", baseSalary: 30000,
        anotherJob : "Teacher", baseSalary: 2000,
        category : "workfrom home", 
    },

}

console.log(users.jobNaame?.baseSalary);// Expect to return Undefined 
console.log(users.jobName?.baseSalary); // Expect to return VAlue
