import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { FaUser } from "react-icons/fa";
import { db } from "../../firebase-config"
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
 
const RoomRates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Create a query (optional, but good practice for filtering/ordering)
        const apartmentsQuery = query(
          collection(db, "villaPrices"), // Replace with your collection name
          // Example filters (uncomment and adjust as needed):
          // where("availability", "==", true), // Filter by availability
          // orderBy("price", "asc")       // Order by price (ascending)
        );

        // 2. Get the documents based on the query (or the collection if no query)
        const querySnapshot = await getDocs(apartmentsQuery);

        // 3. Map the documents to an array of objects:
        const fetchedApartments = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(fetchedApartments);
        console.log(fetchedApartments);
        setLoading(false); // Set loading to false after successful fetch
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
        setLoading(false); // Set loading to false even if there's an error
        console.error("Error fetching apartments:", err);
      }
    };

    fetchData();
  }, []); 


  return (
    <div className='' id="accomodation">
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center w-full'>
        {/* <h1>What We Offer</h1> */}
        <div className='w-full items-center flex  justify-center'>
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-2xl md:text-4xl font-bold font-serif text-gray-500"
            >
            Accomodation          
            </motion.h1>
            {/* <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn"
            >
              Discover More
            </motion.button> */}
        </div>
        
        {/* <p className='py-4'>Your Oasis of Modern Luxury!</p> */}
        <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className='w-full'
        >
        <ApartmentList apartments={apartmentsData} />
        
        </motion.div>
        
    </div>
    </div>
  )
}

export default RoomRates

const ApartmentList = ({ apartment }) => {
    return (
    //   <div className="border border-gray-200 p-4 rounded-md mb-4">
    //     <div className="flex justify-between items-center mb-2">
    //       <h3 className="text-lg font-semibold">{apartment.type}</h3>
    //       <span className="text-gray-600">
    //         {apartment.guests} guests <span className="text-xs text-gray-400">({apartment.bedrooms} bedrooms)</span>
    //       </span>
    //     </div>
    //     <div className="flex justify-between items-center mb-2">
    //       <span className="text-lg font-bold">LKR {apartment.price}</span>
    //       <span className="text-sm text-gray-500">+ LKR {apartment.taxesAndFees} taxes and fees</span>
    //     </div>
    //     <ul className="list-disc pl-4">
    //       {apartment.amenities.map((amenity, index) => (
    //         <li key={index} className="text-sm text-gray-600">{amenity}</li>
    //       ))}
    //     </ul>
    //     <div className="flex justify-end">
    //       <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    //         Select
    //       </button>
    //     </div>
    //   </div>
    <div className='w-full my-6'>
        <div className="grid grid-cols-3 gap-4">
            <div className="... border border-collapse">Apartment Type</div>
            <div className="... border border-collapse">Number of guests	</div>
            <div className="... border border-collapse">Today's Price</div>
            <div className="row-span-6 border border-collapse">04</div>
            <div className="... border border-collapse p-1.5">
               <FaUser/>
            </div>
            <div className="... border border-collapse">LKR 13,610 <span className="text-sm text-gray-500">+ LKR 1574 taxes and fees</span></div>
            <div className="... border border-collapse flex gap-1 justify-start items-center p-1.5">
                <FaUser/><FaUser/>
            </div>
            <div className="... border border-collapse">LKR 14,310</div>
            <div className="... border border-collapse flex gap-1 justify-start items-center p-1.5">
                <FaUser/><FaUser/><FaUser/>
            </div>
            <div className="... border border-collapse">LKR 15,205</div>   
            <div className="... border border-collapse flex gap-1 justify-start items-center p-1.5">
                <FaUser/><FaUser/><FaUser/><FaUser/>
            </div>
            <div className="... border border-collapse">LKR 16,099</div>
            <div className="... border border-collapse flex gap-1 justify-start items-center p-1.5">
                <FaUser/><FaUser/><FaUser/><FaUser/><FaUser/>
            </div>
            <div className="... border border-collapse">LKR 16,994</div>   
            <div className="... border border-collapse flex gap-1 justify-start items-center p-1.5">
                <FaUser/><FaUser/><FaUser/><FaUser/><FaUser/><FaUser/>
            </div>
            <div className="... border border-collapse">LKR 17,888</div>
        </div>
    </div>
    
    );
  };

  // Sample apartment data (replace with your actual data)
const apartmentsData = [
    {
      id: 1,
      type: "Three-Bedroom Apartment",
      guests: "4 guests",
      bedrooms: "3",
      price: 14310,
      taxesAndFees: 1574,
      amenities: [
        "Free cancellation before February 5, 2025",
        "No prepayment needed - pay at the property",
        "No credit card needed",
        // ... other amenities
      ],
    },
    // ... other apartments
  ];

  const Apartment = ({ apartment }) => {
    return (
      <div className="w-full">
        {apartments.map((apartment,index) => (
          <>
            <div className="... border border-collapse p-1.5" key={index}>
               <FaUser/>
            </div>
            <div className="... border border-collapse">{`LKR ${apartment.price}`} <span className="text-sm text-gray-500"> {`+ LKR ${apartment.tax} taxes and fees`}</span></div>
            </>
        ))}
      </div>
    );
  };

  //mongodb+srv://eshanesn97:MmUu8325L0JO6Qep@cluster0.pzeto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

  //MmUu8325L0JO6Qep




  //I value working in a team environment where I can learn from others and contribute to a shared goal.
   //I believe Rootcode's focus on building great tech would be a great fit for my career aspirations."

   //I've been following Rootcode's work with great interest since long time. I'm really excited about mission that focused on "Bulding Great Tech"
   //and believe my skills could make a significant contribution to its success."
  