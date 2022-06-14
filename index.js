/* Your Code Here */
// Your code here

function createEmployeeRecord(arr){
    return {firstName: arr[0],familyName: arr[1], title: arr[2], payPerHour: arr[3],timeInEvents:[],timeOutEvents:[]}
}
function createEmployeeRecords(arr){
    const nArr = []
    arr.forEach(item => {
        nArr.push(createEmployeeRecord(item))
    });
    return nArr
}
function createTimeInEvent(date){
    console.log(date)
    const dates = date.split(" ")
    this.timeInEvents.push
        ({
        type : "TimeIn",
        hour: parseInt(dates[1]),
        date: dates[0]
        })

    return this

}
function createTimeOutEvent(date){
    const dates = date.split(" ")
    this.timeOutEvents.push 
        ({
        type : "TimeOut",
        hour: parseInt(dates[1]),
        date: dates[0]
        })
    return this
}
function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find((log)=>log.date === date)
    let timeOut = this.timeOutEvents.find((log)=>log.date === date)

    return (timeOut.hour - timeIn.hour) / 100
}
function wagesEarnedOnDate(date){
    //Add context to hoursworkedondate, so wagesearnedondate and hoursworkedondate refer to same object
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour)
}

function calculatePayroll(obj){
    let count = 0
    obj.forEach(employee=>{
        count += allWagesFor(employee)    
    })
    return count
}
function findEmployeeByFirstName(srcArray,firstName) {
    return srcArray.find(item=> item.firstName ===firstName)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function calculatePayroll(records){
    //console.log(records.reduce((prevRecord, record) => prevRecord + allWagesFor.call(record)))
    return (records.reduce((prevRecord, record) => prevRecord +  allWagesFor.call(record),0))
}
