import React, {FunctionComponent} from "react";

const App: FunctionComponent = () => {
  const name: string = "World";

  return (
    <h1>Hello {name}</h1>
  );
}

export default App;