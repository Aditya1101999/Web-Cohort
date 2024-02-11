//import Button from '@mui/material/Button'
export const RevenueCard=({
title,
orderCount,
amount
})=>{
    return <div className="bg-white rounded shadow-md p-4 hover:bg-slate-100">
        <div className="text-gray-700 flex justify-center flex-col">
           <div className="flex">
           <div>
            {title}
            </div>
           <div className="ml-1 pt-1 flex justify-center flex-col">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
           </svg>

           </div>
           </div>
        </div>
        <div className="flex justify-between pt-2">
            <div className="font-semibold text-2xl">
                Rs. {amount}
            </div>
            {orderCount ?
            <div className="cursor-pointer underline font-medium flex flex-col justify-center">
              <div className="flex">
              <div className="text-blue-700">
                {orderCount} order(s) 
               </div>
               <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path  strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>

            </div> : null}
        </div>
    </div>
}