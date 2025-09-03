const students = [
  { id: 1, name: "Ana", age: 20, grade: 85, course: "JavaScript" },
  { id: 2, name: "Carlos", age: 22, grade: 92, course: "Python" },
  { id: 3, name: "María", age: 19, grade: 78, course: "JavaScript" },
  { id: 4, name: "Luis", age: 21, grade: 88, course: "Java" },
  { id: 5, name: "Sofía", age: 20, grade: 95, course: "JavaScript" }
];

const newa = students.filter(students => students.grade > 80);

const promedio = students.reduce((sum,student) => sum + student.grade / students.length, 0);
const mayor = students.filter(student => student.age >20).map(student => student.name);

const highgrade  = students.reduce((max, student) => {
  return student.grade > max.grade  ? student : max;
});
console.log("los estudiantes que sacaron nota mayor a 80 son:",newa);
console.log("el promedio de notas es:",promedio)
console.log("estudiantes mayores de 20 años: ",mayor)
console.log("el estudiante con mayor nota:",highgrade);

