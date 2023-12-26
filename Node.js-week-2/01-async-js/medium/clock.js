function updateClock(){
    const date=new Date()
    let hours=date.getHours()
    let minutes=date.getMinutes()
    let seconds=date.getSeconds()
    let ampm = hours>12 ? "PM" : "AM"

    let ampmhours=hours%12
    ampmhours=ampmhours==0 ? 12 : ampmhours
    
    minutes= minutes<10 ? '0'+minutes : minutes
    seconds=seconds<10 ? '0'+seconds : seconds

    let time24=hours+':'+minutes+':'+seconds
    let time12=ampmhours+':'+minutes+':'+seconds+" "+ampm

    console.log('24-hour format: ' + time24);
    console.log('12-hour format: ' + time12);
    
}

setInterval(updateClock,1000)