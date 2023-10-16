import {} from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Nav() {
  //Hooks - usenavigate
  const navigate =useNavigate();

//criando a funcao do logout
const handleLogout = async ()=>{

  sessionStorage.removeItem('userData');
  sessionStorage.removeItem('senhaData');
  alert('saindo da sessao')
  navigate('/');
 
}

  return (
    <>
      <header>
        <h2>Projeto</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
         
            <li>
              <Link to="conteudo">Conteudo</Link>
            </li>
            <li>
              <Link to="/cadastrar/produto">Cadastrar Produto</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>    

            <button onClick={handleLogout}>Logout</button>    
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
