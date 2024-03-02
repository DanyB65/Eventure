"use client";
import { useSearchParams } from "next/navigation";
import Header from "@/app/compoents/header";
import fakeData from "@/app/compoents/fakedata";
import Calendar from "@/app/compoents/calander";
import TimePicker from "@/app/compoents/timePicker";

export default function BusinessBooking({}) {
  const searchParams = useSearchParams();
  const id = searchParams.get("businessID");
  const selectedBusiness = fakeData.find(
    (business) => business.id.toString() === id
  );

  return (
    <>
      <Header />
      <Calendar />
      <TimePicker onSelectTime={(time) => console.log(time)} />

      {selectedBusiness ? (
        <div className="p-4 bg-cream">
          {" "}
          {/* Ajout d'un padding et d'un fond crème pour plus de lisibilité */}
          <h1 className="text-black text-xl font-bold">
            Booking for Business ID: {selectedBusiness.id}
          </h1>
          <h2 className="text-black text-lg">
            Title: {selectedBusiness.title}
          </h2>
          {/* Additional content and logic for booking a specific business */}
        </div>
      ) : (
        <h1 className="text-black">Business not found</h1>
      )}
    </>
  );
}
