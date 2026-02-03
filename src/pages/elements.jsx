import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";

export default function Elements() {
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
              <h1>Elements</h1>
            </header>

            <h2 id="content">Sample Content</h2>
            <p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc.</p>

            <hr className="major" />

            <h2 id="elements">Elements</h2>

            <h3>Text</h3>
            <p>This is <b>bold</b>, <strong>strong</strong>, <i>italic</i>, <em>emphasized</em>, <u>underlined</u> and <code>code</code>.</p>

            <h3>Lists</h3>
            <ul>
              <li>Dolor etiam magna etiam.</li>
              <li>Sagittis lorem eleifend.</li>
              <li>Felis dolore viverra.</li>
            </ul>

            <h3>Buttons</h3>
            <ul className="actions">
              <li><a href="#" className="button primary">Primary</a></li>
              <li><a href="#" className="button">Default</a></li>
            </ul>

            <h3>Form</h3>
            <form method="post" action="#">
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="col-12">
                  <textarea placeholder="Enter your message" rows="6"></textarea>
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li><input type="submit" value="Send Message" className="primary" /></li>
                    <li><input type="reset" value="Reset" /></li>
                  </ul>
                </div>
              </div>
            </form>

            <h3>Images</h3>
            <span className="image fit"><img src="images/pic11.jpg" alt="" /></span>

            <h3>Box</h3>
            <div className="box">
              <p>Felis sagittis eget tempus primis in faucibus vestibulum.</p>
            </div>

            <h3>Preformatted</h3>
            <pre><code>{`i = 0;
while (!deck.isInOrder()) {
  deck.shuffle();
  i++;
}`}</code></pre>
          </section>

        </div>
      </div>

      <Sidebar />
    </div>
  );
}
