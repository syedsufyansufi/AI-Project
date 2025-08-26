import { useEffect, useState } from 'react';

import './App.css';
import { Button } from './components/ui/button';

function App() {
   const [massage, setMassage] = useState('');

   useEffect(() => {
      fetch('/api/hello')
         .then((res) => res.json())
         .then((data) => setMassage(data.massage));
   }, []);
   return (
      <div className="p-4 flex items-center gap-2 flex-col">
         <p className="font-bold text-3xl">{massage}</p>
         <Button variant="outline">Click Me!</Button>
      </div>
   );
}

export default App;
