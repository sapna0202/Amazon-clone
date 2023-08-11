// import React, { useState, useEffect } from 'react';
// import { db } from "./firebase";
// import './Orders.css'
// import { useStateValue } from "./StateProvider";
// import Order from './Order'

function Orders() {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     console.log("db object:", db); // Check if db is imported correctly
//     if(user) {
//         db
//         .collection('users')
//         .doc(user?.id)
//         .collection('orders')
//         .orderBy('created', 'desc')
//         .onSnapshot(snapshot => (
//             setOrders(snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 data: doc.data()
//             })))
//         ))
//     } else {
//         setOrders([])
//     }

//   }, [user])

    return (
        <div className=' absolute top-[240px] left-[560px] border-2 border-yellow-400 p-8 text-2xl font-bold rounded-lg bg-yellow-200'>
            <h1> Thanks for Ordering </h1>

        {/* <div className='orders__order'> */}
          {/* hiii */}
                {/* {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div> */}
        </div>
    )
}

export default Orders
