function fib(n) {
   if(n<=1) {
      return 1;
   }
   return fib(n-1) + fib(n-2)
}

function main() {
   let val = fib(5);
   console.log(val);
   return;
}

main()