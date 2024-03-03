"use client"
import fakeData from "@/app/compoents/fakedata";
import Header from "@/app/compoents/header";
import SearchBar from "@/app/compoents/searchBar";
import Link from "next/link";


export default function Services() {
    const generateCards = () => {
        
        
        return fakeData.map((business, index) => (
            
            //console.log("Business ID:", business.id); // Log the business ID here
            <Link 
            key={index} 
                href={{
                    pathname : `/services/booking/${business.id}`,
                    query: {businessID: business.id}
                    }}
            
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer bg-softTaupe hover:bg-darkTaupe"
            >

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">{business.title}</div>
                    <p className="text-gray-700 text-base">{business.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {business.tags.map((tag, idx) => (
                        <span key={idx} className="inline-block bg-dustyRose rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                        
                        
                    ))}
                    
                </div>
            </Link>
        ));
    };

    return (
        <>
            
            <SearchBar/>
            
            <div className="flex flex-wrap justify-start">
                {generateCards()}
            </div>
        </>
    );
}