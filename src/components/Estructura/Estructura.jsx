import './styles.css'

export function Estructura() {
  return (
    <>
      <header className="header">
        <h1 className='header-estrutura'>Estructura</h1>
      </header>
      <div>
        <p>1. ¿Qué tipo de procedimento sigue su empresa?</p>
      </div>
      <div>
        <div>
          <input type="radio" id="apertura" name="drone" value="apertura"
            checked />
          <label htmlFor="apertura">Apertura</label>
        </div>
        <div>
          <input type="radio" id="transformacion" name="drone" value="transformacion" />
          <label htmlFor="transformacion">Transformación</label>
        </div>
      </div>
    </>
  )
}
