import Hero from "./component/Hero";

const App = () => {
  const heroData={
    name:"John Doe",
    imgUrl:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    designation:"Software Engineer",
    company:"Tech Solutions Inc.",
    experience:5,
    salary:75000,
    email:"john.doe@example.com"
  }
  return (
    <div>
      <Hero item={heroData} />
    </div>
   
  );
};

export default App;

  


