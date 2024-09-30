let elapsetime = document.getElementById("elapsetime")
let lodge = document.getElementById("lodge") //lodge button
let checkout = document.getElementById("checkout")  // check out button
let checkoutday = document.getElementById("checkoutday")

const setCountDown = (eventDate) =>{

   let nownow = new Date().getTime() // get the current time in seconds

   let theDay = new Date (eventDate)

   diff = theDay.getTime() - nownow

   let Days = Math.floor(diff / (1000*60*60*24))
   let theHrs = Math.floor((diff % (1000*60*60*24)) / (1000*60*60))
   let theMns = Math.floor((diff % (1000*60*60)) / (1000*60))
   let theSec = Math.floor((diff % (1000*60)) / (1000))

   elapsetime.innerText = `${Days}Days : ${theHrs}Hours : ${theMns}Minutes : ${theSec}Seconds`
}

function lodgeaction() {
   // checkoutday = checkoutday.value
   console.log(checkoutday.value);
   
   if(!(checkoutday.value == "")){
      let startCountingTime = setInterval(() => {
         setCountDown(checkoutday.value)
      }, 1000);

      checkout.addEventListener("click", () =>{
         clearInterval(startCountingTime)
      })
   }
}


lodge.addEventListener("click", lodgeaction)

