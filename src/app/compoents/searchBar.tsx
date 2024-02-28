export default function SearchBar() {
    return (
      <div className="w-full"> {/* Ensures the div spans the full width */}
        <form className="flex justify-center my-4 w-full"> {/* Also make the form full width */}
          <input
            type="text"
            className="input border border-gray-400 p-2 rounded-l w-full" // Make input full width within its form container
            placeholder="Search..."
            readOnly
          />
          <button
            type="submit"
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
  
  
  