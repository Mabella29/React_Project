import CustomerList from "./CustomerList"
import CustomerSummary from "./CustomerSummary"
import Header from "./Header"
import NavBar from "./NavBar"

function App() {

  return (
    <>
      <NavBar />
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 px-4">
        <CustomerSummary title="Total Customers" value={470} percentage={3.9} increase={true} />
        <CustomerSummary title="Team Plan" value={17} percentage={9.9} increase={true} />
        <CustomerSummary title="Basic Plan" value={63} percentage={3.9} increase={true} />
        <CustomerSummary title="Pelanggan Berhenti" value={4} percentage={2.9} increase={false} />
      </section>
      
      <CustomerList />
    
    </>
  )
}

export default App
