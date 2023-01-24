// Question #1
let student = [ { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
{ name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
{ name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
{ name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];

function studentWithHighestMarks(array) {
    let studentWithTheHighestMarks = "";
    let highestMarks = 0;

    array.forEach(student => {
      let totalMarks = student.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      if (totalMarks > highestMarks) {
        highestMarks = totalMarks;
        studentWithTheHighestMarks = student.name;
      }
    });
    return studentWithTheHighestMarks;
  }
console.log(studentWithHighestMarks(student));  


// arrayExample = [20, -2, 4, -11, 0, 25]
// Question #2
function minimumValue(array) {
    return array.reduce((a, b) => Math.min(a, b));
  }

// console.log(minimumValue(arrayExample));

// or 
let minimumV =(array)=>{return Math.min(...array);}

// console.log(minimumV(arrayExample));


// Question #3
let lengthOfString=(string) =>{return [...string].length;}