
const App = () => {
  let marks = 90;
  return (
    <div>
      {/* /* immediately invoked function expression */ }
      {(
        ()=>{
         
    if(marks>=80 && marks<=100){
      return <h1 style={{color:"green"}}>A+</h1>;
    }
    else if(marks>=70 && marks<80){
      return <h1 style={{color:"blue"}}>A</h1>;
    }
    else if(marks>=60 && marks<70){
      return <h1 style={{color:"yellow"}}>A-</h1>;
    }
    else if(marks>=50 && marks<60){
      return <h1 style={{color:"orange"}}>B</h1>;
    }
    else if(marks>=33 && marks<50){
      return <h1 style={{color:"red"}}>C</h1>;
    }
    else{
      return <h1 style={{color:"red"}}>Fail</h1>;
    }
  }
 )()}

 {/* new line */}
 {(
   ()=>{
    if(marks>=33 && marks<=100){
      return <h1 style={{color:"green"}}>Pass</h1>;
    }
    else{
      return <h1 style={{color:"red"}}>Fail</h1>;
    }
  }
 )()}

 
</div>

  );
};

export default App;
 

