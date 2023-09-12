// function
function funcA() {
  console.log("AAA");
}

funcA();

function funcB(data1, data2) {
  console.log(`${data1} ยกกำลัง ${data2} = ${data1 ** data2}`);
}

funcB(2, 8);

function funcC() {
  console.log("Wow...");
  return 1000 * 2;
}

console.log(funcC());
x = funcC() - 500;
console.log(x);

function funcD(xx, yy, zz){
return xx+yy+zz

}

console.log(funcD(10,10,20));

y = funcD(1,2,3)
console.log(y);

function funcE(n1,n2 = 50,n3 = 100){
    console.log(n1+n2+n3);
}

funcE(200,300)
funcE(200,300,400)

let a = 20

let b = function(){
    console.log('SAU 555');
    console.log('DTI 555');
}

let c = ()=>{
    console.log('SAU 555');
    console.log('DTI 555');
}

let d = function(xxx){
    console.log(xxx + 20);
}

let e = (num)=> num * 10

b()
b()
c()
d(500)
console.log(e(200));