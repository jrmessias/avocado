import '../css/style.css'
import { getCEPData, getCEP } from "./fetchCEP.js";


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Qual seu CEP?</h1>
    <div>
        <input type="text" name="cep" id="cep_field" value="89874000">
        <button type="submit" name="btn_get_cep" id="cep_get">Buscar</button>
    </div>
    <h2 id="cep">-</h2>
  </div>
`

getCEPData(document.querySelector('#cep'), "89900000")

getCEP(document.querySelector('#cep_get'), document.querySelector('#cep_field'))
