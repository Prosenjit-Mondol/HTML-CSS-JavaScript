console.log("Welcome PROSENJIT MONDOL");
const age=23;
x=null;
y=undefined;
console.log(age,x,y);

let name="Pritha";
console.log(name)

let marks=[85,95,89,93,92];
let sum=0;
for (let index = 0; index < marks.length; index++) {
    sum+= marks[index];
}
console.log("The total sum of the marks is ",sum);

function su(x,y){
    s=x+y;
    return s;
}

let va=su(5,8);

console.log(va);

let str=["Prosenjit","Pritha","Aishariya","Tofha"];

str.forEach((val,idx) =>{
    console.log(idx,val);
});

console.dir(document.body);

let btn1=document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a)
}

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("YOU ArE inside box")
}