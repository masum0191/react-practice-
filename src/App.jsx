

const App = () => {
  const status = false;
  return (
    <div>
      <h1>Login Status</h1>
      {(() => {
        switch (status) {
          case true:
            return <button>Logout</button>;
          case false:
            return <button>Login</button>;
          default:
            return null;
        }
      })()}

      {(() => {
        if (status) {
          return <button>Logout</button>;
        } else {
          return <button>Login</button>;
        }
      })()}

    </div>

  );
};

export default App;

  


