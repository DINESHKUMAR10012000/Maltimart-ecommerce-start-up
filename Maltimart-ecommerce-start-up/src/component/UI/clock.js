// import React from 'react';
// import { useTimer } from 'react-timer-hook';

// function MyTimer({ expiryTimestamp }) {
//   const {
//     seconds,
//     minutes,
//     hours,
//     days,
//     isRunning,
//   } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


//   return (
//     <div style={{textAlign: 'center'}}>
//       <div style={{fontSize: '100px'}}>
//         <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
//       </div>
//       <p>{isRunning }</p>
      
//     </div>
//   );
// }
// export default function App() {
//   const time = new Date();
//   time.setSeconds(time.getSeconds() + ); // 10 minutes timer
//   return (
//     <div>
//       <MyTimer expiryTimestamp={time} />
//     </div>
//   );
// }

import React from 'react'
import '../UI/clock.css';
import { useState, useEffect } from 'react';


function Clock() {
   const [days,setDays]=useState(0)
  const [hours,setHours]=useState(0)
  const [minutes,setMinutes]=useState(0)
  const [seconds,setSeconds]=useState(0)

  
  const destination = 'oct,20,2022';

   const getTime = ()=>{
    
    
     const time = Date.parse(destination)-Date.now();
    //  setDays( date.getTime() + days * 86400000 );
        setHours (Math.floor((time/(1000*60*60))%24));
        setMinutes (Math.floor((time/1000*60)%60));
        setSeconds (Math.floor((time/1000)%60))
      
   };
  
      
   useEffect(()=>{
    const interval = setInterval(()=> getTime(destination),1000);
    return ()=> clearInterval(interval);
   },[]);
   



 
  return (
    // <div className='clock__wrapper gap-5'>
    //   <div className='clock__date gap-1 '>
    //     <h1 className='text-white fs-3 mb-4 '>{days}</h1>
    //     <h5 className='text-white '>days</h5>
        
    //   </div>
      <>
      {/* <span className='text-white fs-1 gap-1'>:</span> */}
      <div className='clock__wrapper gap-5'>
        <div className='clock__date gap-1 '>
          <h1 className='text-white fs-3 mb-4 '>{hours}{minutes}{seconds}</h1>
          {/* <h5 className='text-white '>Hours</h5> */}
        </div>
        {/* <span className='text-white fs-1 gap-1'>:</span> */}
      </div>
      {/* <div className='clock__wrapper gap-5'>
        <div className='clock__date gap-1 '>
          <h1 className='text-white fs-3 mb-4'>{minutes}</h1>
          <h5 className='text-white '>Minutes</h5>
        </div>
        <span className='text-white fs-1 gap-1'>:</span>
      </div>
      <div className='clock__wrapper gap-5'>
        <div className='clock__date gap-1 '>
          <h1 className='text-white fs-3 mb-4'>{seconds}</h1>
          <h5 className='text-white '>Seconds</h5>
          
        </div>
        
      </div> */}
    
    </>

  )
}

export default Clock