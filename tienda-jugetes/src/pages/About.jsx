import NavBar from "../components/NavBar";
import "../styles/about.css";


export default function HomePage () {
  const imgUrl = "img/github.png";

    return (
      <div className='home-container'>
        <NavBar />
        <h1>Sobre nosotros</h1>
        <p> Este es el sitio de la tienda de juguetes</p>
        <p> Con este proyecto damos inicio al Trabajo Final de la asignatura Optatica Curso de React </p>
        <br />
        <h2>Autor: Adiel Alejandro Groero Govea </h2>
        <br />
          <div className="github">
          <h3> 
            Repositorio de Github
            </h3>
            <img src={imgUrl} alt="github"  width={20} height={20} />
            
            <a href="https://github.com/adelgroero" target="_blank">
              tienda-jugetes-react
            </a>
          </div>
      </div>
    )
  }