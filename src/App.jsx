
let marks=80;
const App = () => {
  return (
   
<div>
  {/* inline if else */}
  {marks>=33 ? <h1 style={{color:"green"}}>Pass</h1> : <h1 style={{color:"red"}}>Fail</h1>}
</div>
  );
};

export default App;