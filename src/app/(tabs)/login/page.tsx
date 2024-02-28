import Header from "@/app/compoents/header";
import SearchBar from "@/app/compoents/searchBar";
  
  export default function Login() {
    return (
      <>
        <Header />
        <SearchBar/>
        <div style={{ backgroundColor: 'black', color: 'white' }}>Login page</div>
      </>
    );
  }  