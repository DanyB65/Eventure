import Header from "@/app/compoents/header";
import SearchBar from "@/app/compoents/searchBar";
  
  export default function Profile() {
    return (
      <>
        <Header />
        <SearchBar/>
        <div style={{ backgroundColor: 'black', color: 'white' }}>Profile page</div>
      </>
    );
  }  