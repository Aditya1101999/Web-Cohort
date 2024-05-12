export class PubSubManager{
    public static instance : PubSubManager
    private constructor(){

    }
    public static getInstance(){
        if(!PubSubManager.instance){
            PubSubManager.instance= new PubSubManager()
        }
        return PubSubManager.instance;
    }
    //reference : https://projects.100xdevs.com/tracks/singleton-sm-pubsubs/Singleton-Pattern--Backend-State-management-and-Pub-Subs-6
    addUserToStock(userId: string , stockTicker:string){

    }
    removeUserToStock(userId: string , stockTicker:string){

    }

}