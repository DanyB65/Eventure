import Header from "./compoents/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-softTaupe flex flex-col justify-between">
        <section className="text-center py-20 px-4 bg-gradient-to-b from-magentaSky to-softTaupe">
          <h1 className="text-4xl font-bold text-cream mb-4">
            Welcome to Eventure
          </h1>
          <p className="text-dustyRose dark:text-dustyRose-darker">
            Your one-stop digital concierge for unforgettable events
          </p>
          <Link href="/get-started" passHref>
            <button className="mt-6 py-2 px-4 bg-oldGold text-darkTaupe dark:text-darkTaupe-darker rounded-full font-semibold">
              Get Started
            </button>
          </Link>
        </section>

        <section className="py-20 px-4">
          <h2 className="text-3xl text-center font-bold text-dustyRose dark:text-dustyRose-darker mb-6">
            How It Works
          </h2>
          <div className="flex justify-center gap-10">
            <div className="bg-cream p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-darkTaupe dark:text-darkTaupe-darker">
                Select Your Services
              </h3>
              <p className="text-almostBlack">
                Browse and choose from a wide variety of local event services.
              </p>
            </div>
            <div className="bg-cream p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-darkTaupe dark:text-darkTaupe-darker">
                Customize Your Event
              </h3>
              <p className="text-almostBlack">
                Tailor everything to match your event's theme and size
                perfectly.
              </p>
            </div>
            <div className="bg-cream p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-darkTaupe dark:text-darkTaupe-darker">
                Enjoy Your Celebration
              </h3>
              <p className="text-almostBlack">
                Sit back and watch your event come to life, hassle-free.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-dustyRose text-center">
          <h2 className="text-3xl font-bold text-cream dark:text-cream-darker mb-6">
            Featured Services
          </h2>
          <p className="text-softTaupe dark:text-softTaupe-darker mb-6">
            Discover the best of what your local community has to offer.
          </p>
          {/* Placeholder for dynamic content like a grid of services */}
        </section>

        <section className="py-20 px-4">
          <h2 className="text-3xl text-center font-bold text-dustyRose dark:text-dustyRose-darker mb-6">
            Hear From Our Happy Clients
          </h2>
          {/* Placeholder for testimonials, potentially a carousel or grid of testimonial cards */}
        </section>

        <section className="py-20 px-4 bg-oldGold text-center">
          <h2 className="text-3xl font-bold text-almostBlack mb-6">
            Ready to Plan Your Next Event?
          </h2>
          <p className="text-cream dark:text-cream-darker">
            Let Eventify take the hassle out of event planning. Start now and
            make memories.
          </p>
          <Link href="/get-started" passHref>
            <button className="mt-6 py-2 px-4 bg-cream text-darkTaupe dark:text-darkTaupe-darker rounded-full font-semibold">
              Get Started
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}
