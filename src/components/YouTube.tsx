import * as React from "react"
import YouTubeIFrame from "react-youtube"

class YouTube extends React.Component<{}, {}> {
  state = {
    windowWidth: 1200
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  onReady = (event) => {
    event.target.pauseVideo()
  }

  render() {
    const { windowWidth } = this.state
    let width = "570"
    let height = "310"

    if (windowWidth < 570) {
      width = String(windowWidth - 30)
      height = String(((windowWidth - 30) / 4) * 3)
    } else if (windowWidth < 768) {
      width = "530"
      height = "270"
    }

    const opts = {
      height,
      width,
      playerVars: {
        controls: 1,
        rel: 0
      }
    }
    return (
      <YouTubeIFrame
        videoId='JGftIcp2SC0'
        onReady={this.onReady}
        opts={opts}
      />
    )
  }
}

export default YouTube
