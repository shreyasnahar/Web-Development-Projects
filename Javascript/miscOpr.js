var top3 = [
   "Pune",
   "Mumbai",
   "Delhi",
]

function travelPlaces(p1,p2,p3) {
   console.log(`Start with ${p1}`);
   console.log(`Next go to ${p2}`);
   console.log(`Last end with ${p3}`);
   return;
}

//rest operators
function traverseList(...list) {
   for(item in list) {
      console.log(item);
   }
}

function main() {
   console.log("main running...")
   travelPlaces(...top3);  //spread operator
   traverseList(1,2,3,4,5,6);
   return;
}

main()