import { Header } from './components/Header'
import { MainTab } from './components/MainTab/MainTab'
import './global.css'

export default function App() {
  return (
    <>
      <Header />
      <div className='main-container'>
        <MainTab />
      </div>
      
    </>
  )
}

