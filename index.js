// SIMPLE CALCULATOR START HERE
let operator = document.getElementById("operator")
let answer = document.getElementById("ans")

//SUM FUNCTION
let sum = () => {
   // FOR GET VALUES IN THE TWO INPUT
   let firstValue = Number(document.getElementById("firstValue").value)
   let secondValue = Number(document.getElementById("secondValue").value)

   let result = firstValue+secondValue
   operator.innerHTML = "+"
   
   if(firstValue == "" || firstValue == isNaN){
      answer.innerHTML = "NaN"
   }
   else if(secondValue == "" || secondValue == isNaN){
      answer.innerHTML = "NaN"
   }
   else{
      answer.innerHTML = result
   }
   
}
let sub = () => {
   // FOR GET VALUES IN THE TWO INPUT
   let firstValue = Number(document.getElementById("firstValue").value)
   let secondValue = Number(document.getElementById("secondValue").value)

   let result = firstValue-secondValue
   operator.innerHTML = "-"

   if(firstValue == "" || firstValue == isNaN){
      answer.innerHTML = "NaN"
   }
   else if(secondValue == "" || secondValue == isNaN){
      answer.innerHTML = "NaN"
   }
   else{
      answer.innerHTML = result
   }
}
let divide = () => {
   // FOR GET VALUES IN THE TWO INPUT
   let firstValue = Number(document.getElementById("firstValue").value)
   let secondValue = Number(document.getElementById("secondValue").value)

   let result = firstValue/secondValue
   operator.innerHTML = "/"

   if(firstValue == "" || firstValue == isNaN){
      answer.innerHTML = "NaN"
   }
   else if(secondValue == "" || secondValue == isNaN){
      answer.innerHTML = "NaN"
   }
   else{
      answer.innerHTML = result
   }
}
let multiply = () => {
   // FOR GET VALUES IN THE TWO INPUT
   let firstValue = Number(document.getElementById("firstValue").value)
   let secondValue = Number(document.getElementById("secondValue").value)

   let result = firstValue*secondValue
   operator.innerHTML = "*"

   if(firstValue == "" || firstValue == isNaN){
      answer.innerHTML = "NaN"
   }
   else if(secondValue == "" || secondValue == isNaN){
      answer.innerHTML = "NaN"
   }
   else{
      answer.innerHTML = result
   }
}
let clearAll = () => {  
   let firstValue = document.getElementById("firstValue")
   let secondValue = document.getElementById("secondValue")
   firstValue.value = ""
   secondValue.value = ""
   operator.innerHTML = ""
   answer.innerHTML = ""
}
//SIMPLE CALCULATOR ENDS HERE


// TODO APP LIST START HERE
let ul = document.getElementById('tasks')
let addtask = document.getElementById('addtask')
countListItem = 1

addtask.addEventListener( 'click', () => {
   
   let getTask = document.getElementById("gettask")
   let li = document.createElement('li')
   li.innerText = `${countListItem} ${getTask.value}`

   if( getTask.value !== ''){
      countListItem += 1
      ul.appendChild(li)
   }
   
   getTask.value = ''
   
   // let getLi = document.querySelector('li')
   
   li.className = 'del'
   li.addEventListener('click', () => {
      li.style.display = "none"
   })
   console.log(countListItem)

   let delItem = document.querySelector('.delall')
   if (countListItem == 10 ){
      delItem.style.visibility= 'visible'
   }

})
// TODO APP ENDS HERE

// HEXDECIMAL COLOR GENERATOR

const charStore = '0123456789abcdef'
let color = ''
const generateColor = document.getElementById('generateColor')
const clearColor = document.getElementById('clearColor')
const displayCode = document.getElementById('displayCode')
const displayColor = document.getElementById('displayColor')

generateColor.addEventListener('click', ()=>{
   for(let i=0; i<6; i++){
      let index = Math.round(Math.random() * 15);
      color += charStore[index]
   }
   if (color.length == 6){
      displayCode.innerText = `#${color}`
      displayCode.style.background = `#${color}`
   }
})
clearColor.addEventListener('click', () => {
   color = ''
   displayCode.innerText = ''
})

// HEXDECIMAL COLOR GENERATOR ENDS


// PASSWORD GENRATOR

let passwordGenerator = document.getElementById('passwordGenerator')
let listOfPassword = document.getElementById('listOfPassword')
let passwordEntity = '1234567890!@#$%^&*()_+abcdefghijklmnopqrstuvwxyz'
let numberOfClick = 0


const generatePasswordFuntion = (event) =>{
   let pushPassword = ''
   for(let i=0; i<15; i++){
      let passwordIndex = Math.round(Math.random()*47)
      pushPassword += passwordEntity[passwordIndex]
   }
   listOfPassword.innerHTML += `
      <li>${pushPassword}</li>
   `
   numberOfClick += 1
   console.log(numberOfClick)

   // STOP THE BUTTON FROM CLICKING WHEN THE PASSWORDS
   // ARE 10 IN NUMBERS
   if (numberOfClick == 11) {
      event.target.removeEventListener('click', generatePasswordFuntion)
      listOfPassword.innerHTML = '<li>Reload your browser to get another set of password</li>'
   }

}
passwordGenerator.addEventListener('click', generatePasswordFuntion)

// PASSWORD GENERATOR ENDS HERE


// LOAN REPAYMENT APP
let askAmountSection = document.getElementById("getAmountToLoan")
let getBid = document.getElementById("getBid")
let getMonth = document.getElementById("month")
let calculate = document.getElementById("calculate")
let showMessage = document.getElementById("showmessage")
let resetButton = document.getElementById("reset")
let resetSection = document.getElementById("resetLoanPrice")
resetButton.style.display = "none"

function disappearAmountToBorrow(){
   askAmountSection.style.display = "none"
   resetButton.style.display = "block"
}

function loan(){
   let getBidValue = Number(getBid.value)
   let getMonthValue = getMonth.value
   let interestPercent = 0.15
   let interest = getBidValue*interestPercent
   let amountRefund = getBidValue+interest
   let returnDuration = parseInt(amountRefund / getMonthValue)
   
   // console.log(`${returnDuration} is the amount you will repay monthly in within the duraion of ${getMonthValue} months`)

   if(isNaN(getMonthValue) || isNaN(getBidValue) || getBidValue == ""){
      showMessage.textContent = 'Invalid Input'
      getBid.focus()
   }
   else{
      showMessage.textContent = 
      `${amountRefund} is the amount to be returned with the interest of 15%, ${returnDuration} is the amount you will repay monthly in within the duraion of ${getMonthValue} months`
      disappearAmountToBorrow()
   }
}

function reset(){
   askAmountSection.style.display = "block"
   showMessage.textContent = ''
   resetButton.style.display = "none"
   getBid.value = ""
   getBid.focus()
}

calculate.addEventListener("click", loan)
resetButton.addEventListener("click",reset)

// LOAN REPAYMENT APP ENDS HERE


// GUESS GAME STARTS HERE
let personGuess = document.getElementById('personGuess')
let guessButton = document.getElementById('guessButton')
let resetGuess= document.getElementById('resetGuess')
let showGuessState = document.getElementById('showGuessState')

let machineNumber = Math.round(Math.random()*(30)+20)
console.log(machineNumber);

let hideGuess = {
   visibility: "hidden",
   position: "absolute"
}
let showGuess = {
   visibility: "visible",
   position: "relative"
}
let numberofGuess = 0

function numberGuessed(event) {   
   if (personGuess.value == machineNumber) {
      showGuessState.innerText = `Woow! you are amazing, the number is ${machineNumber}`
      
      machineNumber = Math.round(Math.random()*(30)+20)

      Object.assign(guessButton.style, hideGuess)
      Object.assign(resetGuess.style, showGuess)

      console.log(machineNumber);
   }
   else if (personGuess.value == '' || isNaN(personGuess.value)){
      showGuessState.innerText = "Input a valid number"
      personGuess.focus()
   }
   else if(personGuess.value < 20 || personGuess.value > 50){
      showGuessState.innerText = "Your number should should within 20 and 50"
   }
   else {
      showGuessState.innerText = `Oppss your guess is wrong `
      personGuess.focus()
   }

   numberofGuess += 1 
   
   if (numberofGuess == 5) {
      event.target.removeEventListener('click', numberGuessed);

      Object.assign(guessButton.style, hideGuess)
      Object.assign(resetGuess.style, showGuess)

      showGuessState.innerText = "You are out of guesses try again" 
   }
   personGuess.value = ""
}

guessButton.addEventListener('click', numberGuessed)

resetGuess.addEventListener('click', () => {
   numberofGuess = 0

   Object.assign(guessButton.style, showGuess)
   Object.assign(resetGuess.style, hideGuess)

   console.log(numberofGuess)

   showGuessState.innerText = ""
   guessButton.addEventListener('click', numberGuessed)
})

// GUESS GAME ENDS HERE