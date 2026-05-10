import React from 'react';
import ContactForm from './components/ContactForm.jsx';
import FormHeader from './components/FormHeader.jsx';
import ParagraphText from './components/paragraphText.jsx';
import './App.css';

function App() {
  return (
    <div className='form-body'>
      <section className='data-section'>
        <FormHeader />
        <ContactForm />
      </section>
    </div>
  )
}

export default App
