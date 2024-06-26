import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './components/main/Main';
import { Layout } from './components/layout/Layout';
import { FoodForm } from './components/foods/food-form/FoodForm';
import { NotFound } from './components/not-found/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<FoodForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
