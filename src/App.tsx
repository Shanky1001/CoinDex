import React,{useEffect} from 'react'

const App = () => {
  useEffect(() => {
		document.body.classList.remove('load');
	}, []);
  return (
    <div>app</div>
  )
}

export default App