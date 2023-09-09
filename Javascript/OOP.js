var new_class = {
   name: "Shreyas",
   age: 22,
   getName: function() {console.log(this.name);},
   getAge: function() {console.log(this.age);}
}

class Car {
   constructor(name,color) {
      this.name = name;
      this.color = color;
   }

   getName() {
      console.log(this.name);
   }

   getColor() {
      console.log(this.color);
   }
}

function main() {
   let object  = new_class;
   object.getName();
   object.getAge();

   let exter  = new Car("Exter","White");
   console.log(exter);
   exter.getName();
   exter.getColor();
   return;
}

main()