import { useState, useEffect } from 'react'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Main } from './components/Main/Main'
import { Description } from './components/Description/Description'

import './App.css'

function App() {

  const fetchJobs = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const items = await data.json();
    //console.log(items);
    setJobs(items.slice(0, 30));
  };

  const [jobs, setJobs] = useState(["apple"]);
  useEffect(() => { fetchJobs() }, []);

  return (
    <>
      <Sidebar />
      <Main jobs={jobs} />
      <Description />
    </>
  )
}

export default App