import './App.css'
import { FormularioDeEvento } from "./componentes/FormularioDeEvento/index"

// no react, componentes são FUNÇÕES

// props é um OBJETO

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App