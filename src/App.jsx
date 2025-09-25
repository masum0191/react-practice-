
const App = () => {
  let city = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  return (
    <div>
      <h1>City List</h1>
      <ol>
        {
          city.map((item,i)=>{
            return <li key={i.toString}>{item}</li>
          })
        }
      </ol>
    </div>

  );
};

export default App;
 

