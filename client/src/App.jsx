import { Route } from 'react-router';
import Home from './components/Home';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  );
}

export default App;
