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

        </div>
      </div>
    <div class="index">
      <div class="index_content">
        <div class="index_link">
          Why I'm doing this
        </div>
        <div class="index_link">
          Values I live by
        </div>
        <div class="index_link">
          How I make things
        </div>
        <div class="index_link">
          FAQ
        </div>
      </div>
    </div>
    </div>
  )
}

export default IndexPage
