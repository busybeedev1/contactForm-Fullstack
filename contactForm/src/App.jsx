import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import ContactForm from './components/ContactForm.jsx';
import FormHeader from './components/FormHeader.jsx';

import AllUSerData from './Pages/AllUSerData.jsx';

function App() {

  // Home Page Component
  const Home = () => {
    return (
      <div className='form-body'>
        <section className='data-section'>

          <FormHeader />

          <ContactForm />

        </section>
      </div>
    )
  }

  return (

    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Users Page */}
        <Route path="/users" element={<AllUSerData />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App;