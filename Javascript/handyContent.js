function fib(n) {
   if(n<=1) {
      return 1;
   }
   return fib(n-1) + fib(n-2)
}


function main() {
   let val = {"fib":fib(7)};
   console.log(val.fib);
   return;
}

main()