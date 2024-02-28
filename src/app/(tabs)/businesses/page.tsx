import Header from "@/app/compoents/header";
import SearchBar from "@/app/compoents/searchBar";
  
  export default function Business() {
    return (
      <>
        <Header />
        <SearchBar/>
        <div style={{ backgroundColor: 'black', color: 'white' }}>Business page</div>
      </>
    );
  }  