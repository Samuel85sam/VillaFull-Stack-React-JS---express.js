import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
function Comments() {
  return (
    <>    <h1>Livre d'or</h1>
      <div id="sidebar">
        <nav >
          <NavLink to="">livre d'or</NavLink>//!pourquoi ↑↑↑ reste selectionné (bleu)
          
          
          <NavLink to="./commentForm">votre avis</NavLink>
        </nav>
      </div>
      <div id="root"
      // className={
      //     navigation.state === "loading" ? "loading" : ""
      // }
      >
        <Outlet />
      </div>
    </>

  )
}

export default Comments