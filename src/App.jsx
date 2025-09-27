import Hero from "./component/Hero";

const App = () => {
  const ClickBtn=()=>{
    alert("click me")
  }
  return (
    <div>
      <Hero  childbtn={ClickBtn} />
    </div>
   
  );
};

export default App;

  


