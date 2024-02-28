"use client"
// pages/services/booking/[businessID].tsx
import { useRouter } from 'next/router';

const BusinessBooking = () => {
  const router = useRouter();
  const { businessID } = router.query;

  return (
    <div>
      <h1>Booking for Business ID: {businessID}</h1>
      {/* Additional content and logic for booking a specific business */}
    </div>
  );
};

export default BusinessBooking;
