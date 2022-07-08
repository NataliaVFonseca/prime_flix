import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

function Header(){
    return(
      <header>
         <Link  className= 'logo' to='/'> Prime FLix </Link>
         <Link  className= 'favoritos' to='/'> Meus filmes </Link>
      </header>
    )  
  }
  
  export default Header;