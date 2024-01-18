// // import React, { useState, useEffect } from 'react';

// // function RoomItems() {
// //   // Define a state variable to store the fetched data
// //   const [data, setData] = useState([]);
// //   // Add a loading state
// //   const [loading, setLoading] = useState(true);

// //   useEffect(async () => {
// //     try {
// //       const apiUrl = 'http://localhost:4000/rooms/';
// //       const response = await fetch(apiUrl);
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! Status: ${response.status}`);
// //       }

// //       const responseData = await response.json();
// //       setData(responseData);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   }, []);
  

// //   // Conditionally render loading message or data
// //   return (
// //     <div style={{ display: 'flex', flexDirection: 'column' }}>
// //       {data.map((item) => (
// //         <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
// //           <div>{item.name}</div>
// //           <div>{item.capacity}</div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default RoomItems;

// import React, { useState, useEffect } from 'react';

// function RoomItems() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiUrl = 'http://localhost:4000/rooms/';
//         const response = await fetch(apiUrl);
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const responseData = await response.json();
//         setData(responseData);

//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }), [];


//   return (<p>hello</p>
//     // <div style={{ display: 'flex', flexDirection: 'column' }}>
//     //   {data.map((item) => (
//     //     <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
//     //       <div>{item.name}</div>
//     //       <div>{item.capacity}</div>
//     //     </div>
//     //   ))}
//     // </div>
//   );
// }

// export default RoomItems;
