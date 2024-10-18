// TODO LIST COMPLETE APP
let taskTitle = document.getElementById("tasktitle")
let startTime = document.getElementById("starttime")
let endTime = document.getElementById("endtime")
let addTaskButton = document.getElementById("addtask")
let theUl = document.getElementById("myul")

let trashIconClass = ["bi", "bi-trash"]
let markIconClass = ["bi", "bi-check"]
let editIconClass = ["bi", "bi-pen-fill"]


// function to create list and it's item dyanmically
function createListFunc(task, startTheTime, endTheTime) {
   //created li, div and icons dynamincally
   let createdList = document.createElement("li")
   let textDiv = document.createElement("div")
   let timeDiv = document.createElement("div")
   let iconDiv = document.createElement("div")

   // creted icons dynamically
   let trashIcon = document.createElement("i")
   let markIcon = document.createElement("i")
   let editIcon = document.createElement("i")

   // added class to icons here
   trashIcon.classList = trashIconClass.join(" ")
   markIcon.classList = markIconClass.join(" ")
   editIcon.classList = editIconClass.join(" ")

   //added classes to the divs
   textDiv.classList = "task-name"
   timeDiv.classList = "duration"
   iconDiv.classList = "manage"

   // added text gotten from the input
   textDiv.innerText = task

   iconDiv.appendChild(trashIcon)
   iconDiv.appendChild(markIcon)

   function taskCountDown() {
      let timeDiff = (endTheTime - startTheTime) * 60 * 60
      
      if (timeDiff > 0) {
         function timeCount(){
            timeDiff--

            let theHr = Math.floor(timeDiff / (60 * 60))
            let theMns = Math.floor((timeDiff % (60 * 60)) / 60)
            let theSe = Math.floor((timeDiff % 60))

            theHr < 10 ? theHr = `0${theHr}` : theHr = theHr
            theMns < 10 ? theMns = `0${theMns}` : theMns = theMns
            theSe < 10 ? theSe = `0${theSe}` : theSe = theSe
            
            let taskTime = `${theHr}Hr : ${theMns}Mns : ${theSe}Sec`

            timeDiv.innerText = taskTime
         }

         countDownow = setInterval(() => {
            timeCount()
            if (timeDiff == 0) {
               clearInterval(countDownow)
               timeDiv.innerText = "Task Completed"
            }
         }, 1000);
      
         //function to complete the task
         markIcon.addEventListener("click", () =>{
            clearInterval(countDownow)
            textDiv.style.textDecoration = "line-through"
            timeDiv.innerText = "Task Completed"
         })
      }
      else{
         timeDiv.innerText = "time incorrect"
      }
   }

   taskCountDown()

   createdList.appendChild(textDiv)
   createdList.appendChild(timeDiv)
   createdList.appendChild(iconDiv)

   // added the list to the ul 
   theUl.appendChild(createdList)

   // function to delete the list
   trashIcon.addEventListener("click", () =>{
      let askpermt = confirm("Are you want to delete the task?")
      
      if (askpermt) {
         theUl.removeChild(createdList)
      }
   })

}

addTaskButton.addEventListener("click", () =>{
   let taskValue = taskTitle.value
   let starttime = startTime.value.replace(":", ".")
   let endtime = endTime.value.replace(":", ".")
   

   if (taskTitle.value == "") {
      taskTitle.style.border = "1px solid red"
      taskTitle.style.background = "pink"
      taskTitle.focus()
      return false
   }
   if (startTime.value == "") {
      startTime.style.border = "1px solid red"
      startTime.style.background = "pink"
      startTime.focus()
      return false
   }
   if (endTime.value == "") {
      endTime.style.border = "1px solid red"
      endTime.style.background = "pink"
      endTime.focus()

      return false
   }
   else{
      createListFunc(taskValue, starttime, endtime)
      taskTitle.value = ""
      startTime.value = ""
      endTime.value = ""
   }
})