import './formulario-de-evento-estilos.css'
import { CampoDeFormulario } from "../CampoDeFormulario"
import { TituloFormulario } from "../TituloFormulario"
import { Label } from "../Label"
import { CampoDeEntrada } from "../CampoDeEntrada"
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'
export function FormularioDeEvento () {

  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor="nome">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada 
            type="text" 
            id='nome' 
            placeholder='Summer dev hits'
            name='nomeEvento'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
          Data do Evento
          </Label>
          <CampoDeEntrada 
            type="date" 
            id='dataEvento' 
            placeholder='Summer dev hits'
            name='dataEvento'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
          Data do Evento
          </Label>
          <ListaSuspensa
            type="date" 
            id='dataEvento' 
            placeholder='Summer dev hits'
            name='dataEvento'
          />
        </CampoDeFormulario>
      </div>
      <div className='acoes'>
        <Botao>
          Criar Evento
        </Botao>
      </div>


    </form>
  )
}