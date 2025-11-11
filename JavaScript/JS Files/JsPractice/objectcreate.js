//1.Objects Literals:{}
const user={
    name:'V',
    age:'1',
    male:'F'
}
console.log(user.name)
// 2.Constructor Function:
function Car(brand,model,price){
    this.brand=brand;
    this.model=model;
    this.price=price;
}
const c1=new Car('Suzuik','2025','1322000')
console.log(c1.brand)
//3.Class style:
