// fakedata.tsx
const fakeData = [
    {
      id: 1,
      title: "BounceMania Party Rentals",
      servicesOffered: "Bouncy Houses, Water Slides, Party Games",
      tags: ["BouncyHouse", "PartyRentals", "KidsEvents"],
      description:
        "BounceMania provides a wide range of inflatable fun for children's parties and family events. Specializing in safe, clean, and thrilling bouncy houses and water slides that make every event a hit."
    },
    {
      id: 2,
      title: "DJ SpinMaster Pro",
      servicesOffered: "DJ Services, Lighting, Sound Systems",
      tags: ["DJServices", "EventMusic", "PartyLighting"],
      description:
        "DJ SpinMaster Pro offers top-notch DJ services with state-of-the-art sound and lighting for weddings, corporate events, and private parties. Guaranteed to keep your guests dancing all night long."
    },
    {
      id: 3,
      title: "Captured Moments Photography",
      servicesOffered: "Event Photography, Photo Booths, Portrait Sessions",
      tags: ["Photography", "PhotoBooths", "EventCapture"],
      description:
        "Captured Moments specializes in capturing the essence of your event. From candid shots to professional portraits, we ensure every significant moment is immortalized."
    },
    {
      id: 4,
      title: "Elegant Affairs Catering",
      servicesOffered: "Catering, Event Planning, Venue Setup",
      tags: ["CateringServices", "EventPlanning", "CustomMenus"],
      description:
        "Elegant Affairs Catering provides exquisite cuisine and comprehensive event planning services. Our team works closely with clients to craft custom menus and memorable experiences."
    },
    {
      id: 5,
      title: "Starlight Marquee Hire",
      servicesOffered: "Marquee Rentals, Outdoor Lighting, Furniture Hire",
      tags: ["MarqueeHire", "OutdoorEvents", "LuxuryRentals"],
      description:
        "Starlight Marquee Hire offers luxurious marquees for weddings, corporate events, and parties. Complete with atmospheric lighting and chic furniture, we transform any space into a magical setting."
    },
    {
      id: 6,
      title: "Laugh Out Loud Comedy Acts",
      servicesOffered: "Stand-up Comedians, Comedy Shows, Emcee Services",
      tags: ["ComedyEntertainment", "StandUpComedy", "EventHosts"],
      description:
        "Laugh Out Loud brings the joy of comedy to your event. Our roster of comedians and emcees are perfect for adding a touch of humor to corporate events, parties, and gatherings."
    },
    {
      id: 7,
      title: "Harmony Event Musicians",
      servicesOffered: "Live Bands, Solo Musicians, Custom Performances",
      tags: ["LiveMusic", "EventBands", "CustomShows"],
      description:
        "Harmony Event Musicians curate live musical experiences tailored to your event's theme. From jazz bands to solo pianists, our performers add a special touch to any occasion."
    },
    {
      id: 8,
      title: "Floral Fantasies Decor",
      servicesOffered: "Floral Arrangements, Event Decor, Venue Styling",
      tags: ["FloralDesign", "EventDecor", "VenueStyling"],
      description:
        "Floral Fantasies brings your event to life with breathtaking floral designs and decor. Our team specializes in creating unique, stylish settings for all types of events."
    },
    {
      id: 9,
      title: "Grand Galas Event Planners",
      servicesOffered: "Full-Service Event Planning, Vendor Coordination, Day-of Coordination",
      tags: ["EventPlanning", "VendorCoordination", "LuxuryEvents"],
      description:
        "Grand Galas is your go-to planner for luxury events. With meticulous attention to detail, we handle everything from vendor coordination to day-of execution, ensuring a flawless event."
    },
    {
      id: 10,
      title: "Magical Moments Videography",
      servicesOffered: "Event Videography, Live Streaming, Video Editing",
      tags: ["Videography", "LiveStreaming", "EventVideos"],
      description:
        "Magical Moments captures the magic of your event through professional videography. From cinematic highlights to live streaming services, we help you share and relive your special moments."
    },
    {
        id: 11,
        title: "Gourmet Gatherings",
        servicesOffered: "Custom Catering, Cooking Classes, Private Chef Services",
        tags: ["Catering", "CookingClasses", "PrivateChef"],
        description: "Gourmet Gatherings offers a culinary adventure with bespoke catering solutions, engaging cooking classes, and exclusive private chef experiences for intimate dinners and grand gatherings alike."
      },
      {
        id: 12,
        title: "Dynamic DJs",
        servicesOffered: "Wedding DJs, Corporate Event DJs, Party Music",
        tags: ["WeddingDJs", "EventMusic", "PartyDJs"],
        description: "Dynamic DJs bring life to any party with expertly curated playlists and high-energy performances tailored to your event's theme and audience."
      },
      {
        id: 13,
        title: "Luxe Limousines",
        servicesOffered: "Luxury Transport, Wedding Cars, Corporate Limousines",
        tags: ["LuxuryTransport", "WeddingCars", "Limousines"],
        description: "Arrive in style with Luxe Limousines' fleet of high-end vehicles, offering unparalleled service for weddings, corporate events, and VIP transport."
      },
      {
        id: 14,
        title: "Epic Event Planners",
        servicesOffered: "Full-Service Event Planning, Day-of Coordination, Logistics Management",
        tags: ["EventPlanning", "Coordination", "Logistics"],
        description: "From concept to completion, Epic Event Planners ensure your event unfolds flawlessly with comprehensive planning, coordination, and logistics management."
      },
      {
        id: 15,
        title: "Vivid Visuals Videography",
        servicesOffered: "Event Videography, Drone Footage, Video Editing",
        tags: ["Videography", "DroneFootage", "VideoEditing"],
        description: "Capture your event's most memorable moments with Vivid Visuals' professional videography services, including breathtaking drone footage and expert editing."
      },
      {
        id: 16,
        title: "Spectacular Stages",
        servicesOffered: "Stage Design, AV Rentals, Event Production",
        tags: ["StageDesign", "AVRentals", "EventProduction"],
        description: "Transform your event space with Spectacular Stages' innovative design, cutting-edge audio-visual rentals, and comprehensive event production services."
      },
      {
        id: 17,
        title: "Celestial Celebrations",
        servicesOffered: "Themed Decor, Event Styling, Custom Installations",
        tags: ["ThemedDecor", "EventStyling", "CustomInstallations"],
        description: "Celestial Celebrations specializes in creating immersive environments with themed decor, stylish event design, and unique custom installations that bring your vision to life."
      },
      {
        id: 18,
        title: "Harmony Hues",
        servicesOffered: "Floral Design, Event Theming, Color Consultation",
        tags: ["FloralDesign", "EventTheming", "ColorConsultation"],
        description: "Harmony Hues elevates your event with exquisite floral arrangements, cohesive theming, and expert color consultation to create a visually stunning experience."
      },
      {
        id: 19,
        title: "Momentous Marquees",
        servicesOffered: "Marquee Hire, Outdoor Events, Bespoke Tents",
        tags: ["MarqueeHire", "OutdoorEvents", "BespokeTents"],
        description: "Create the perfect setting for any outdoor event with Momentous Marquees' range of elegant tents and marquees, tailored to fit your specific needs and style."
      },
      {
        id: 20,
        title: "Platinum Party Favors",
        servicesOffered: "Custom Party Favors, Corporate Gifts, Wedding Souvenirs",
        tags: ["PartyFavors", "CorporateGifts", "WeddingSouvenirs"],
        description: "Platinum Party Favors crafts personalized gifts and souvenirs that leave a lasting impression on your guests, from weddings to corporate events and beyond."
      }
  ];
  
  export default fakeData;
  