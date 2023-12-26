function counter(){
    let count=0
    setInterval(()=>{
        console.log(count)
        count++
    },1000)
}


function counterWithoutSetInterval(){
    let count = 0

    function increment(){
        console.log(count)
        count++
        setTimeout(()=>{
            increment()
        },1000)
    }
    increment()
}

counterWithoutSetInterval()