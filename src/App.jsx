import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';


export function App() {
  

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post   
          author="Patrick Ventura" 
          content="Deus capacita seus melhores guerreiros para as batalhas mais difíceis" 
      />
       <Post   
          author="João Ventura" 
          content="Portanto, amem o Senhor, nosso Deus, com todo o coração, com toda a alma e com todas as forças.
          " 
      />
        </main>
      </div>
    

    </div>
  )
  }

