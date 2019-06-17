//example dong bo: sync

console.log("chang chang 1");
console.log("chang chang 2");
console.log("chang chang 3");


//async
console.log("task 1");
console.log("task 2");
setTimeout(()=>console.log("task 3 need many times for waiting"), 1000);
console.log("task 4");

//Gọi hàm có từ khóa async phía trước luôn trả về một promise, dù trong hàm đó có await hay không.

//ko có await
function test() {
    var promise = returnTen()
    console.log(promise)
  }
  
  async function returnTen() {
    return 10
  }
  
  test()