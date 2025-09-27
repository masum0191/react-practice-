

const App = () => {
  let status = false;
  return (
    <div>
      <h1>Login Status</h1>
      {
        status && <h2>Logged In</h2>
      }
    </div>
   
  );
};

export default App;

  


