import React, { useEffect } from "react";

export default function Generic() {
  useEffect(() => {
    const headLink = document.createElement("link");
    headLink.rel = "stylesheet";
    headLink.href = "assets/css/main.css";
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
      s.async = false;
      document.body.appendChild(s);
      return s;
    });

    return () => {
      if (headLink.parentNode) headLink.parentNode.removeChild(headLink);
      scripts.forEach((s) => s.parentNode && s.parentNode.removeChild(s));
    };
  }, []);

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">

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

          <section>
            <header className="main">
              <h1>Generic</h1>
            </header>

            <span className="image main"><img src="images/pic11.jpg" alt="" /></span>

            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis.</p>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.</p>

            <hr className="major" />

            <h2>Interdum sed dapibus</h2>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <hr className="major" />

            <h2>Magna etiam veroeros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

            <hr className="major" />

            <h2>Lorem aliquam bibendum</h2>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>

        </div>
      </div>

      <div id="sidebar">
        <div className="inner">

          <section id="search" className="alt">
            <form method="post" action="#">
              <input type="text" name="query" id="query" placeholder="Search" />
            </form>
          </section>

          <nav id="menu">
            <header className="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li><a href="/">Homepage</a></li>
              <li><a href="/generic">Generic</a></li>
              <li><a href="/elements">Elements</a></li>
            </ul>
          </nav>

          <section>
            <header className="major">
              <h2>Get in touch</h2>
            </header>
            <ul className="contact">
              <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
              <li className="icon solid fa-phone">(000) 000-0000</li>
              <li className="icon solid fa-home">1234 Somewhere Road #8254<br />Nashville, TN</li>
            </ul>
          </section>

          <footer id="footer">
            <p className="copyright">© Untitled. All rights reserved.</p>
          </footer>

        </div>
      </div>
    </div>
  );
}
