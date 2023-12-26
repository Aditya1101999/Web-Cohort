//counter in js(from 30 to 0)

function startCounter(){
    let counter = 30;

    function decrement(){
        if(counter>0){
            console.log(counter)
            counter--
            setTimeout(decrement,1000)
        }
        else{
            console.log("done")
        }
    }
    decrement()
}

startCounter()


//Calculate the time it takes between a setTimeout call and the inner function actually running

function measureTime(){
    let start = Date.now()

    setTimeout(function(){
        let end=Date.now()
        console.log(end-start)
    },0)//delay is 0
}

measureTime()

//Create a terminal clock (HH:MM:SS)

function updateClock(){
    function padWithZero(num){
        return num<10 ? "0"+num : num.toString()
    }
    function getTime(){
        let date=new Date()
        let hours=padWithZero(date.getHours())
        let minutes=padWithZero(date.getMinutes())
        let seconds=padWithZero(date.getSeconds())

        console.log(hours+":"+minutes+":"+seconds)
    }
    setInterval(getTime,1000)
}
updateClock()

