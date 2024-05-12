import logger from "./logger";
import { GameManager} from "./store";





logger()


setInterval(()=>{
    // games.push({
    //     id:Math.random.toString(),
    //     whitePlayer: "aditya",
    //     blackPlayer: "jaskirat",
    //     moves: []
    // gameManager.addGame(Math.random.toString())
    GameManager.getInstance().addGame(Math.random.toString())
},5000)