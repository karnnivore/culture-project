import * as React from "react"

// markup
const IndexPage = () => {
  return (
    <div>
      <div class="outernav">
        <div class="outernav-top">
          <a href="https://nickchinsen.com" class="nick-chinsen">
            <div class="outernav-img">
              <img class="manual" src="/nickchinsen.svg" alt="manual"/>
            </div>
          </a>
          <div class="outernav-tr">
            <ul class="outernav-weather">
              <li class="outernav-weather-item">
                NYC 
                <span class="temp">
                  28
                  °F
                </span>
              </li>
              <li class="outernav-weather-item">
                | London 
                <span class="temp">
                  10
                  °C
                </span>
              </li>
              <li class="outernav-weather-item">
                | Toronto 
                <span class="temp">
                  -4
                  °C
                </span>
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
    <div class="index">
      <div class="index_content">
        <div class="index_link">
          <a href="/culture/why" data-section='01'>
            Why I'm doing this
            <span class="hoverFill a1 outer" data-fill="Why I'm doing this" data-section="01">
              <span class="inner">Why I'm doing this</span>
            </span>
          </a>
        </div>
        <div class="index_link" >
          <a href="/culture/why" data-section='02'>
            Values I live by
            <span class="hoverFill a1 outer" data-fill="Values I live by" data-section="02">
              <span class="inner">Values I live by</span>
            </span>
          </a>
        </div>
        <div class="index_link">
          <a href="/culture/why" data-section='03'>
            How I make things
            <span class="hoverFill a1 outer" data-fill="How I make things" data-section="03">
              <span class="inner">How I make things</span>
            </span>
          </a>
        </div>
        <div class="index_link">
          <a href="/culture/why" data-section='04'>
            FAQ
            <span class="hoverFill a1 outer" data-fill="FAQ" data-section="04">
              <span class="inner">FAQ</span>
            </span>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default IndexPage
