import * as React from "react"
import Layout from "../layouts"
import PlayIcon from "Images/play.svg"
import FooterImg from "Images/footer.png"
import RealSVG from "Images/real.svg"
import IconSVG from "Images/icon.svg"
import HeroImg from "Images/hero-img.svg"
import Nav from "Components/Nav"
import ClientSlider from "Components/ClientSlider"
import YouTube from "Components/YouTube"

export default class IndexPage extends React.Component<{}, {}> {
  public render() {
    return (
      <Layout>
        <Nav />
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-start">
                <label>Advancing Real Estate Into The 21st Century</label>
                <h1>The Real Estate Blockchain Initiative</h1>
                <a className="btn-blue" href="#">Learn More</a>
              </div>
              <div className="col-12 col-md-7">
                <img src={HeroImg} alt=""/>
              </div>
              <ClientSlider />
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-5 d-flex flex-column justify-content-center align-items-start">
                <h2>About RBI</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="col-12 col-xl-6 offset-xl-1 d-flex align-items-center justify-content-center">
                <div className="video-bg d-flex justify-content-center align-items-center">
                  <YouTube />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="h1">Blockchain<br/>Applications</h2>
              </div>
              <div className="col-12 col-md-4 app-holder">
                <div className="inner text-center">
                  <img src={IconSVG} alt=""/>
                  <h3>Property<br/> management</h3>
                  <p>Real estate property transfers can be registered on a public blockchain ledger, leveraging auditability for external stakeholders and lowering bureaucracy times and costs.</p>
                </div>
              </div>
              <div className="col-12 col-md-4 app-holder">
                <div className="inner text-center">
                  <img src={IconSVG} alt=""/>
                  <h3>Home automation<br/> services</h3>
                  <p>Smart contract technologies coupled with shared transactions ledgers could automate service provision both in the context of home automation and post-occupancy management.</p>
                </div>
              </div>
              <div className="col-12 col-md-4 app-holder">
                <div className="inner text-center">
                  <img src={IconSVG} alt=""/>
                  <h3>Home<br/> sharing</h3>
                  <p>Among decentralized applications built on top of blockchain infrastructures, automatic home sharing services represent an interesting evolution of current centralized homestay networks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="real-estate" style={{ backgroundImage: `url(${RealSVG})` }}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-5">
                <h2 className="h1">Main areas of interest in the Real Estate</h2>
                <p>Digital asset & Risk Management: decentralized information layers enable interoperable management for trading and post trading activities, which are typically related to financial assets lifecycle. In particular, Smart Bond maps a meaningful scenario in terms of process automation and dematerialization opportunities.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="footer" style={{ backgroundImage: `url(${FooterImg})` }}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <h2 className="h1">Lorem ipusm dolor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="col-12 col-md-6 offset-md-1">
                <div className="form-holder">
                  <form>
                    <div className="row">
                      <div className="col-12 text-center">
                        <h2>Lorem Ipsum Dolor</h2>
                      </div>
                      <div className="col-12 form-group">
                        <label>Name</label>
                        <input type="text" name="name" required className="form-control" />
                      </div>
                      <div className="col-12 form-group">
                        <label>Email</label>
                        <input type="email" name="email" required className="form-control" />
                      </div>
                      <div className="col-12 form-group">
                        <label>Industry segment</label>
                        <input type="text" name="industry" required className="form-control" />
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn-blue big">Tell me more</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 copy-text">
                <p>Copyright 2018, RBI</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
