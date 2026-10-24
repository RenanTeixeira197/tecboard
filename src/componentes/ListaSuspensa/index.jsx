import './lista-suspensa-estilos.css'


export function ListaSuspensa ({ itens, ...rest }) {
    return (
        <select {...rest} className='lista-suspensa-form' defaultValue="">
           <option value="" disabled>
                Selecione uma Opção
           </option>
           {itens.map(function (itens){
            return <option key={itens.id} value={itens.id}>
                {itens.nome}
            </option>
           })}
        </select>
    )
}