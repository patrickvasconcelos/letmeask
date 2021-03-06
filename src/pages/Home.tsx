import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'
// import { useHistory } from 'react-router-dom'
import { auth, firebase } from '../services/firebase'
export function Home() {
  // const history = useHistory();

  function handleCreateRoom() {

    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(results => {
      console.log(results);
    });
    // history.push('/rooms/new')
  }

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
          <button onClick={handleCreateRoom} className='create-room'>
            <img src={googleIconImg} alt="" />
            Crie sua conta com o Google
          </button>
          <div className='separator'>ou entre em uma salas</div>
          <form>
            <input
              type="text"
              placeholder='Digite o código da sala'
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}