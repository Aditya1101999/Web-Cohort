import { atom, selector } from "recoil";
import { atomFamily , selectorFamily } from "recoil";
import axios from 'axios'

export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: selectorFamily({
      key: "todoSelectorFamily",
      get: (id) => async () => {
        await new Promise(r => setTimeout(r,5000))
       // throw new Error("just for fun")
        const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        return res.data.todo;
      },
    })
  });

// export const todosAtomFamily = atomFamily({
//     key: 'todosAtomFamily',
//     default: id => {
//       return TODOS.find(x => x.id === id)
//     },
//   });

export const TODOS = [{
    id: 1,
    title: "Go to Gym",
    description: "Hit the gym from 7-9"
}, {
    id: 2,
    title: "Go to eat food",
    description: "Eat food from from 9-11"
},]

export const notifications=atom({
    key: 'notifications',
    default: selector({
        key: "notificationselector",
        get: async  ()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})


export const countAtom=atom({
    key : "countAtom",
    default:0
})

export const countSelector=selector({
    key : "evenselector",
    get: ({get})=>{
        const count=get(countAtom)
        return count%2==0
    }
})
export const networkAtom=atom({
    key : "networkAtom",
    default:104
})

export const jobsAtom=atom({
    key : "jobsAtom",
    default:0
})

export const notificationAtom=atom({
    key : "notificationAtom",
    default:0
})

export const messagingAtom=atom({
    key : "messagingAtom",
    default:12
})

// export const totalNotificationSelector=selector({
//     key:"totalNotificationSelector",
//     get : ({get})=>{
//         const networkAtomCount=get(networkAtom)
//         const jobAtomcount=get(jobsAtom)
//         const notificationAtomCount=get(notificationAtom)
//         const  messagingAtomCount=get(messagingAtom)
//         return networkAtomCount+jobAtomcount+notificationAtomCount+messagingAtomCount
        
//     }
// })





