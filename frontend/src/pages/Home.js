import { useEffect, useState } from "react";
import { useLawyersContext } from "../hooks/useLawyersContext";

import LawyerDetails from "../components/LawyerDetails"
import LawyerForm from "../components/LawyerForm";
import LawyerFilter from "../components/LawyerFilter";
const Home = () => {

        const {lawyers, dispatch} = useLawyersContext()
        const [isLoading, setIsLoading] = useState(true);

        // const [majorArray, setMajorArray] = useState([]);

        // const handleFilterChange = (filters) => {
        //         setMajorArray(filters);
        // };
    
        // const getFilteredLawyers = () => {
        //   if (!lawyers || lawyers.length === 0) {
        //     return [];
        //   }
          
        //   return lawyers.filter(lawyer => {
        //     const majorMatches = majorArray.length === 0 || 
        //       majorArray.some(filter => lawyer.major.toLowerCase() === filter.toLowerCase());
        //     const isNotComplete = lawyer.complete === false;
        
        //     return majorMatches && isNotComplete;
        //   });
        // }
        
        // const filteredLawyers = getFilteredLawyers();
        
        return (
          <>
          </>
        );   
}

export default Home;