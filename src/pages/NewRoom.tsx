import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas' />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt="" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder='Nome da Sala'
            />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar numa sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}