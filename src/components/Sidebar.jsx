import { useState } from "react";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="inner">

        {/* Search */}
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Buscar..." />
          </form>
        </section>

        {/* Menu */}
        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/university">Universidad</a></li>
            <li><a href="/elements">Elements</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar