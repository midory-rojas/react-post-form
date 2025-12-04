
import { useState } from 'react'
import './App.css'


const initialFormData = {
  name: "",
  titolo: "",
  testo: "",
  checkbox: "",
}

function App() {

  const [formData, setFormData] = useState(initialFormData);

  function updateFormData(event) {
    const key = event.target.name;
    const newObject = {
      ...formData,
      [key]: event.target.value
    };
    setFormData(newObject);
  }

  return (
    <>
      <header>
        <h1>BLOG POST</h1>
      </header>
      <main>
        <div className='container'>
          <h2>Aggiungi un nuovo post</h2>
          <div className='row justify-content-between'>
            <div className='row'>
              <div className='col-12 col-8 mb-5'>
                <form className='row'>
                  <div className='col-6 mb-2'>
                    {/* Nome Autore del Post --- imput testo */}
                    <label htmlFor='nomeAutore'>Nome dell'autore</label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className='form-control'
                      value={formData.name}
                      onChange={updateFormData} />
                  </div>
                  {/* Titolo del Post --- imput testo */}
                  <div className='col-6 mb-2'>
                    <label htmlFor='Titolo'>Titolo del post</label>
                    <input
                      name="titolo"
                      id="titolo"
                      type="text"
                      className='form-control'
                      value={formData.titolo}
                      onChange={updateFormData} />
                  </div>
                  {/* Testo del Post --- imput testo*/}
                  <div className='col-12 mb-2'>
                    <label htmlFor='testo'>Testo del post</label>
                    <input
                      name="testo"
                      id="testo"
                      type="text"
                      className='form-control'
                      value={formData.testo}
                      onChange={updateFormData} />
                  </div>

                  {/* Checkbox per vedere si il post e pubblico  o bozza --- imput testo*/}
                  <div className='col-12 mb-2'>
                    <label htmlFor='pubblico'>Pubblico</label>
                    <input
                      name="checkbox"
                      id="pubblico"
                      type="radio"
                      value="pubblico"
                      checked={formData.checkbox === "pubblico"}
                      onChange={updateFormData}/>
                    <label htmlFor='bozza'>Bozza</label>
                    <input
                      name="checkbox"
                      id="bozza"
                      type="radio"
                      value="bozza"
                      checked={formData.checkbox === "bozza"}
                      onChange={updateFormData}/>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div className='card'>
              <div className='card-header'>{formData.titolo} {formData.name}</div>
              <div className='card-body'>{formData.testo}</div>
            </div>
          </div>
        </div>
      </main >

    </>
  )
}

export default App
