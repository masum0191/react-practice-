import Hero from "./component/Hero";

const App = () => {
  const handleSubmit = (event)=>{
    event.preventDefault();
    alert("Form Submitted");

  }
  
  return (
    <div>
     <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default App;

  


