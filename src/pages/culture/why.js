import * as React from "react";
import "./why.css"

const Why = () => {
    return(
        <div>
        <div class="outernav">
        <div class="outernav-top">
          <a href="https://nickchinsen.com" class="nick-chinsen">
            <div class="outernav-img">
              <img class="manual" src="/nickchinsen.svg" alt="manual"/>
            </div>
          </a>
          <div class="outernav-tr">
            <ul class="outernav-chapters">
              <li class="outernav-item">
                <a aria-current="page" class="outernav-active" href="culture/why">
                    <span data-fill="01" class="nav_HoverFill nav_HoverFillActive">
                        01
                    </span>
                    <p>Why I'm doing this</p>
                </a>
              </li>
              <li class="outernav-item">
                <a aria-current="page" href="culture/why">
                    <span data-fill="02" class="nav_HoverFill">
                        02
                    </span>
                    <p>Values I Live By</p>
                </a>
              </li>
              <li class="outernav-item">
                <a aria-current="page" href="culture/why">
                    <span data-fill="03" class="nav_HoverFill">
                        03
                    </span>
                    <p>How I make Things</p>
                </a>
              </li>
              <li class="outernav-item">
                <a aria-current="page" href="culture/why">
                    <span data-fill="04" class="nav_HoverFill">
                        04
                    </span>
                    <p>faq</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="outernav-bottom">
          <div class="outernav-bl">
            <a href="https://www.nickchinsen.com">nickchinsen.com</a>
          </div>
          <div class="outernav-br">
            <ul class="outernav-share">
              <li class="outernav-share-item">
                <a href="mailto:nicholaschinsen@gmail.com">
                  <img src="/mail.svg" alt="mail"/>
                </a>
              </li>
              <li class="outernav-share-item">
                <a href="https://linkedin.com/in/nick-chinsen">
                  <img src="/linkedin.svg" alt="linkedin"/>
                </a>
              </li>
              <li class="outernav-share-item">
                <a href="https://github.com/karnnivore">
                  <img src="/github.svg" alt="github" class="git"/>
                </a>
              </li>
              <li class="outernav-share-item-text">
                Learn more
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div class="doingPage">
            <section class="introSection">
                <h1 class="section_head" data-section="01">Why I'm doing this</h1>
            </section>
            <section class="section">
                <div>
                    <h3>
                        I want to help democratize wealth by developing the finanical tools of the rich for everyone
                    </h3>
                    <p>
                        I love the steps Wealthsimple are taking towards bringing everyone a little bit closer to financial freedom.
                    </p>
                    <p>
                        My goal is to be a part of providing that ability to everyone, via my development skills. The power
                        to control ones financial destiny, doing the work you love, providing for loved ones, and investing
                        in your community, are all things I truly believe in.
                    </p>
                    <p>
                        I would like to develop simple, sophisticated, and affordable finanical products.
                        And do my part in making financial freedom a little closer for everyone.

                    </p>
                </div>
            </section>
            <section class="section section--bg">
                <div>
                    <h1>Everyone</h1>
                </div>
            </section>
            <section class="section">
                <div>
                    <h3>Let Everyone in</h3>
                    <p>
                        Being part of a change is something I strive to do everyday. And providing
                        the tools of the wealthy to everyone is something I would love to be a part of.
                    </p>
                    <p>
                        Technology truly is blind, and that's beautiful. If you can dream it you just 
                        have to sit down and start building it.
                    </p>
                    <p>
                        Less barriers empowers everyone, and is the first step towards financial freedom for everyone.
                    </p>
                </div>
            </section>
            <section class="section section--bg">
                <div>
                    <h1>Technology is Blind</h1>
                </div>
            </section>
            <section class="section">
                <div>
                    <h3>Talk like a Human</h3>
                    <p>
                        When explaining financial products to clients, I really like the thought of explaining it like "a well-informed friend"  
                        and I do it in every interaction. Financial jargon just jumbles up the process.
                    </p>
                    <p>
                        I do my best to try and help everyone understand their finances in an easier way.
                    </p>
                </div>
            </section>
            <section class="section section-bg">

            </section>
            <section class="section">
                <div>
                    <h3>Make it transparent</h3>
                </div>
            </section>
            <section class="section section-end">
                <div>
                    <h2>Next Chapter</h2>
                    <h1>Values I live by</h1>
                </div>
            </section>
        </div>
        </div>
    )
}

export default Why;