let bookride = document.getElementById("bookride")
let form = document.getElementById("form")
let fromWhere = document.getElementById("from")
let toWhere = document.getElementById("to")
let cancelride = document.getElementById("cancelride")
let startride = document.getElementById("startride")
let locinfoBox = document.getElementById("locinfoBox")
let locInfo = document.getElementById("locInfo")
let stopWatch = document.getElementById("stopWatch")
let wish = document.getElementById("wish")
let setMn = document.getElementById("mins")
let setSc = document.getElementById("sec")
let startExam = document.getElementById("exam")
let pauseCount = document.getElementById("pauseCount")
let stopCount = document.getElementById("stopCount")

let receiptBox = document.getElementById("receiptBox")
let timeAcct = document.getElementById("time")
let timeFare = document.getElementById("timefare")
let baseFare = document.getElementById("basefare")
let tax = document.getElementById("tax")
let totalPayment = document.getElementById("totalpayment")

let textPattern = /^[0-9a-zA-Z]+$/ 

// dynamics styles for showing and disappearing element in the DOM 
let showHiddenStyle = {
    visibility: "visible",
    position: "relative"
}
let HiddenStyle = {
    visibility: "hidden",
    position: "absolute"
}
let inputError = {
    border: "1px solid red",
    background: "pink"
}

// form validation for booking a ride
form.addEventListener("submit", (event) =>{
    event.preventDefault()

    let allcorrect = true

    if(!fromWhere.value.match(textPattern)){
        Object.assign(fromWhere.style, inputError)
        allcorrect = false
    }
    if(!toWhere.value.match(textPattern)){
        Object.assign(toWhere.style, inputError)
        allcorrect = false
    }

    if(allcorrect == true){
        //this is to hide the form  where filled correctly
        Object.assign(bookride.style, HiddenStyle)
        
        locInfo.innerText = `
        You are requesting a ride from ${fromWhere.value} to
        ${toWhere.value}. Please confirm your ride before proceeding
        `
        Object.assign(locinfoBox.style, showHiddenStyle)
    }
})

cancelride.addEventListener("click", () =>{
    fromWhere.value = ""
    toWhere.value = ""
    
    Object.assign(bookride.style, showHiddenStyle)
    
    Object.assign(locinfoBox.style, HiddenStyle)

})


// RIDE STARTS HERE
let timeInSeconds = 0 // time seconds
const timeFormat = () =>{

    let minutes = Math.floor(timeInSeconds/60) //return mins 
    let secds = timeInSeconds %  60 //returns secs

    // setMn.innerText = minutes
    // setSc.innerText = secds

    minutes<10 ? setMn.innerText = `0${minutes}` : setMn.innerText = minutes
    secds<10 ? setSc.innerText = `0${secds}` : setSc.innerText = secds
}
// RIDE STARTS COUNTING FROM HERE
const startCounting = () =>{
    countDownnow = setInterval (() =>{
        //decrease timing 
        timeInSeconds ++
        timeFormat()
    }, 10)
    // to hide the start
    Object.assign(locinfoBox.style, HiddenStyle) 
    // shows the count down
    Object.assign(stopWatch.style, showHiddenStyle) 
    // To ask if ride should continue or not
    Object.assign(wish.style, HiddenStyle)

    startExam.style.display = "none"
    pauseCount.style.display = "inline"
    stopCount.style.display = "inline"
    //pause the function
    pauseCount.addEventListener("click", () => {
        showHiddenStyle.color = "white"
        clearInterval(countDownnow)
        startExam.style.display = "inline"
        pauseCount.style.display = "none"

        wish.innerText = "Do you wish to Continue Ride?"
        Object.assign(wish.style, showHiddenStyle )
    })
    // stop the ride funtion
    stopCount.addEventListener("click", () =>{
        clearInterval(countDownnow)
        timeInSeconds = 0
        
        startExam.innerText = "START AGAIN"
        startExam.style.display = "inline"

        pauseCount.style.display = "none"

        let timeSpentStore = `${setMn.innerText} : ${setSc.innerText}`
        let timeFareFee = 50 * parseInt(setMn.innerText)
        let baseFareFee = 500
        let taxFee = parseInt((timeFareFee + baseFareFee) / 10)
        let totalFee = timeFareFee + baseFareFee + taxFee

        timeAcct.innerText = timeSpentStore
        timeFare.innerText = timeFareFee
        baseFare.innerText = baseFareFee
        tax.innerText = taxFee
        totalPayment.innerText = totalFee

        stopWatch.style.display = "none"
        Object.assign(receiptBox.style, showHiddenStyle)
    })
}
// this is to start the Ride at the beginning
startride.addEventListener("click", startCounting) 
// this is to continue the ride 
startExam.addEventListener("click", startCounting)