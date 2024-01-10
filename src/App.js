import './App.css';
import { useState } from 'react';

function App() {
  const c = (cl) => document.querySelector(cl)

  const [saveKey, setsaveKey] = useState([])
         
  let keyOptions = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let keyOptionsSpecial = '@#$%&'
  let keyOptionsNumber = '0123456789'
  let key = ''


  //OPERADOR TERNÁRIO
  //1 > 0 ? console.log('1 é maior que 0') : console.log( '1 não é maior que 0' )

  function calcular() {
      key = ''

      for(let i = 10; i > 0; i --) {
          let keyGenerate = Math.floor(Math.random() * 52)
          key += keyOptions[keyGenerate]
      }

      //Gerar Número
      let keyGenerateNumber = Math.floor(Math.random() * 10)
      let keyGenerateNumber2 = Math.floor(Math.random() * 10)
      let key2 = key.replace(key[keyGenerateNumber], keyOptionsNumber[keyGenerateNumber2])

      //Gerar caractere especial
      let keyGenerate = Math.floor(Math.random() * 10)
      let keyGenerate2 = Math.floor(Math.random() * 5)
      let key3 = key2.replace(key2[keyGenerate], keyOptionsSpecial[keyGenerate2])

      c('.key-result').innerHTML = 'Carregando...'
      setTimeout(() => {
        setsaveKey( key3 )
      }, 2000)
  }

  return (
    <div className="App">
      <div className='key-container'>
        <div className='title-key'>Criador de Senha</div>
        <div className='generate-key' onClick={calcular}>Criar Senha</div>
        <div className='key-result'>{saveKey}</div>
      </div>
    </div>
  );
}

export default App;
