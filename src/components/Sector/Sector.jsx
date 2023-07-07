import './styles.css'

export function Sector() {
  return (
    <>
      <div className='default-container'>
        <header className="header">
          <h1>Estructura</h1>
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
      </div>
      
    </>
  )
}
