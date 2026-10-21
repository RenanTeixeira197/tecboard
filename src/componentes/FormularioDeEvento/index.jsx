import './formulario-de-evento-estilos.css'
import { CampoDeFormulario } from "../CampoDeFormulario"
import { TituloFormulario } from "../TituloFormulario"
import { Label } from "../Label"
import { CampoDeEntrada } from "../CampoDeEntrada"
export function FormularioDeEvento () {

  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
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
    </form>
  )
}