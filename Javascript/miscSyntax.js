var Entity = {
   name: "anonymous",
   age: 0,
   place: "other",
}

function main() {
   console.log("Running main...")
   var entity = Object.create(Entity);

   //Need to declare the values to property of object
   entity.name = "Shreyas";
   entity.age = 22;
   entity.place = "Pune";

   for(prop of Object.keys(entity)) {
      //console.log(prop + " " + entity[prop]);   Simple way of use
      console.log(`${prop} is ${entity[prop]}`)  // alternate format method
   }

   return;
}

main()