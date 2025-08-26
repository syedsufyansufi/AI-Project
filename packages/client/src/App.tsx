import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [massage, setMassage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMassage(data.massage));
  }, []);
  return (
    <>
      <p>{massage}</p>
    </>
  );
}

export default App;
