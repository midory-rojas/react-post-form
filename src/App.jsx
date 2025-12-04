
import { useState } from 'react'
import './App.css'
import Card from './components/card';


const initialFormData = {
  name: "",
  titolo: "",
  testo: "",
  tipo: "",
}

function App() {

  const [formData, setFormData] = useState(initialFormData);
  const [posts, setPosts] = useState([]);

  function updateFormData(event) {
    const key = event.target.name;
    const newObject = {
      ...formData,
      [key]: event.target.value
    };
    setFormData(newObject);
  }

  function aggiungiPost(event) {
    event.preventDefault();
    setPosts((current) => [...current, formData]);
    setFormData(initialFormData);

  }

  return (
    <>
      <header className='text-center py-4 text-secondary-emphasis'>
        <h1>BLOG POST</h1>
      </header>
      <main>
        <div className='container'>
          <h2 className='text-secondary-emphasis py-2'>Aggiungi un nuovo post</h2>
          <div className='row justify-content-between'>
            <div className='row'>
              <div className='col-10 mb-5'>
                <form onSubmit={aggiungiPost} className='row'>
                  <div className='mb-2'>
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
                  <div className='col-12 mb-2'>
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

                  {/* Radio imput per vedere si il post e pubblico  o bozza --- imput testo*/}
                  <div className='col-12 mb-2'>
                    <label htmlFor='pubblico'>Pubblico</label>
                    <input
                      name="tipo"
                      id="pubblico"
                      type="radio"
                      value="pubblico"
                      checked={formData.tipo === "pubblico"}
                      onChange={updateFormData} />
                    <label htmlFor='bozza'>Bozza</label>
                    <input
                      name="tipo"
                      id="bozza"
                      type="radio"
                      value="bozza"
                      checked={formData.tipo === "bozza"}
                      onChange={updateFormData} />
                  </div>
                  <div className='col-12 mb-2'>
                    <button type="submit" className='btn btn-success'>Aggiunge</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-8'>
            {posts.map((post, index) => (
              <div key={index}>
                <Card autore={post} />
              </div>
            ))}
          </div>
        </div>
      </main >
    </>
  )
}

export default App
