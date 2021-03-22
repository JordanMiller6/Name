var wrap = document.body.querySelector(".wrap");
var C = 5
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for (var i = 0; i < list.length; i++) {
  var ele = document.createElement("div");
  var nameEle = document.createElement("h1");
  var ageEle = document.createElement("h2");
  nameEle.innerHTML = list[i].name;
  ageEle.innerHTML = "Age: " + list[i].age;
    ele.appendChild(nameEle);
  ele.appendChild(ageEle);
  var n = list[i].age > 25
    if (n > 0){
    ele.style.color = "green";
    }
wrap.appendChild(ele);}
function myFunction() {
  C = C + 1
  alert(C);
}