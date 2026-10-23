import "./App.css";
import { Banner } from "./componentes/Banner";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento/index";
import { Tema } from "./componentes/Tema";
import { CardEvento } from "./componentes/CardEvento/indes";

// no react, componentes são FUNÇÕES

// props é um OBJETO

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "dev-ops",
    },
    {
      id: 4,
      nome: "inteligencia-artificial",
    },
    {
      id: 5,
      nome: "data-science",
    },
    {
      id: 6,
      nome: "claude",
    },
  ];

   const eventos = [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ]

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento />
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            <CardEvento evento={eventos[0]}/>
          </section>
        );
      })}
    </main>
  );
}

export default App;
