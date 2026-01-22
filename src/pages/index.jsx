import React, { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Dynamically inject the original CSS and JS so the template works the same
    const headLink = document.createElement("link");
    headLink.rel = "stylesheet";
    headLink.href = "assets/css/main.css"; // keep original path & filename
    document.head.appendChild(headLink);

    const scriptSrcs = [
      "assets/js/jquery.min.js",
      "assets/js/browser.min.js",
      "assets/js/breakpoints.min.js",
      "assets/js/util.js",
      "assets/js/main.js",
    ];

    const scripts = scriptSrcs.map((src) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false; // preserve original load order
      document.body.appendChild(s);
      return s;
    });

    return () => {
      // cleanup
      if (headLink && headLink.parentNode) headLink.parentNode.removeChild(headLink);
      scripts.forEach((s) => {
        if (s && s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, []);

  return (
    <div id="wrapper">

      {/* Main */}
      <div id="main">
        <div className="inner">

          {/* Header */}
          <header id="header">
            <a href="index.html" className="logo"><strong>Editorial</strong> by HTML5 UP</a>
            <ul className="icons">
              <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
              <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
            </ul>
          </header>

          {/* Banner */}
          <section id="banner">
            <div className="content">
              <header>
                <h1>Hi, I’m Editorial<br />
                by HTML5 UP</h1>
                <p>A free and fully responsive site template</p>
              </header>
              <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
              <ul className="actions">
                <li><a href="#" className="button big">Learn More</a></li>
              </ul>
            </div>
            <span className="image object">
              <img src="images/pic10.jpg" alt="" />
            </span>
          </section>

          {/* Section */}
          <section>
            <header className="major">
              <h2>Erat lacinia</h2>
            </header>
            <div className="features">
              <article>
                <span className="icon fa-gem"></span>
                <div className="content">
                  <h3>Portitor ullamcorper</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-paper-plane"></span>
                <div className="content">
                  <h3>Sapien veroeros</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-rocket"></span>
                <div className="content">
                  <h3>Quam lorem ipsum</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
              <article>
                <span className="icon solid fa-signal"></span>
                <div className="content">
                  <h3>Sed magna finibus</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
            </div>
          </section>

          {/* Section */}
          <section>
            <header className="major">
              <h2>Ipsum sed dolor</h2>
            </header>
            <div className="posts">
              <article>
                <a href="#" className="image"><img src="images/pic01.jpg" alt="" /></a>
                <h3>Interdum aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic02.jpg" alt="" /></a>
                <h3>Nulla amet dolore</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic03.jpg" alt="" /></a>
                <h3>Tempus ullamcorper</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
                <h3>Sed etiam facilis</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic05.jpg" alt="" /></a>
                <h3>Feugiat lorem aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic06.jpg" alt="" /></a>
                <h3>Amet varius aliquam</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li><a href="#" className="button">More</a></li>
                </ul>
              </article>
            </div>
          </section>

        </div>
      </div>

      {/* Sidebar */}
      <div id="sidebar">
        <div className="inner">

          {/* Search */}
          <section id="search" className="alt">
            <form method="post" action="#">
              <input type="text" name="query" id="query" placeholder="Search" />
            </form>
          </section>

          {/* Menu */}
          <nav id="menu">
            <header className="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li><a href="/">Homepage</a></li>
              <li><a href="/generic">Generic</a></li>
              <li><a href="/elements">Elements</a></li>
              <li>
                <span className="opener">Submenu</span>
                <ul>
                  <li><a href="#">Lorem Dolor</a></li>
                  <li><a href="#">Ipsum Adipiscing</a></li>
                  <li><a href="#">Tempus Magna</a></li>
                  <li><a href="#">Feugiat Veroeros</a></li>
                </ul>
              </li>
              <li><a href="#">Etiam Dolore</a></li>
              <li><a href="#">Adipiscing</a></li>
              <li>
                <span className="opener">Another Submenu</span>
                <ul>
                  <li><a href="#">Lorem Dolor</a></li>
                  <li><a href="#">Ipsum Adipiscing</a></li>
                  <li><a href="#">Tempus Magna</a></li>
                  <li><a href="#">Feugiat Veroeros</a></li>
                </ul>
              </li>
              <li><a href="#">Maximus Erat</a></li>
              <li><a href="#">Sapien Mauris</a></li>
              <li><a href="#">Amet Lacinia</a></li>
            </ul>
          </nav>

          {/* Mini posts */}
          <section>
            <header className="major">
              <h2>Ante interdum</h2>
            </header>
            <div className="mini-posts">
              <article>
                <a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic09.jpg" alt="" /></a>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
              </article>
            </div>
            <ul className="actions">
              <li><a href="#" className="button">More</a></li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <header className="major">
              <h2>Get in touch</h2>
            </header>
            <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            <ul className="contact">
              <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
              <li className="icon solid fa-phone">(000) 000-0000</li>
              <li className="icon solid fa-home">1234 Somewhere Road #8254<br />
                Nashville, TN 00000-0000</li>
            </ul>
          </section>

          {/* Footer */}
          <footer id="footer">
            <p className="copyright">© Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
          </footer>

        </div>
      </div>

    </div>
  );
}
