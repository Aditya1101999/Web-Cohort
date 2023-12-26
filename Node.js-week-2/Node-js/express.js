const express=require("express")

const app=express()
app.use(express.json())

// function calculateSum(n){
//     let sum=0
//     for(let i=0;i<=n;i++){
//         sum+=i
//     }
//     return sum
// }

// app.get("/",(req,res)=>{
//     const n=req.query.n
//     let sum=calculateSum(n)
//     res.send(sum.toString())
// })

let users=[{
    name:"John",
    kidneys:[{
        healthy:false
    },{
    healthy:true
   }]
}]

app.get("/",(req,res)=>{
    //how many kidneys he has , and how are healthy
    // function checkHealth(kidney){
    //     return kidney.healthy
    // }
    const kidneys=users[0].kidneys.length
    const healthResult=users[0].kidneys.filter((kidney)=>kidney.healthy).length
    const unhealthy=kidneys-healthResult
    //console.log(healthResult)
    res.json({
        kidneys,
        healthResult,
        unhealthy
    })

})
app.post("/",(req,res)=>{
    //put a kidney(unhealthy/healthy will be input)
    const isHealthy=req.body.isHealthy
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })
})
app.put("/",(req,res)=>{
    //update every unhealthy kidney to be healthy
    if (users[0].kidneys.find((kidney) => kidney.healthy === false) !== undefined) {
        const healthResult=users[0].kidneys.map((kidney)=>{
            if(!kidney.healthy) kidney.healthy=true
        })
        console.log(healthResult.length)
        res.json({
            msg:"replaced"
        })
    }
    else {
        res.status(411).json({
            msg: "no unhealthy kidney found!"
        });
    }
})
app.delete("/", (req, res) => {
    // Remove all unhealthy kidneys
    if (users[0].kidneys.find((kidney) => kidney.healthy === false) !== undefined) {
        let healthyKidneys = users[0].kidneys.filter((kidney) => kidney.healthy);
        users[0].kidneys = healthyKidneys;
        res.json({
            msg: "deleted"
        });
    } else {
        res.status(411).json({
            msg: "no unhealthy kidney found!"
        });
    }
});



app.listen(3000)