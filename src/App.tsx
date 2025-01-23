import { Routes, Route, } from 'react-router-dom'
import './styles/theme.css';
import Layout from './components/Layout';
import Home from './components/Home';
import NotFound from './components/NotFound';
const App: React.FC = () => {
  return (

<Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
};

export default App;