import { GameManager } from "./store";

export default function logger(){
    setInterval(()=>{
        // console.log(games)
        // gameManager.log()
        GameManager.getInstance().log();
    },5000)
}