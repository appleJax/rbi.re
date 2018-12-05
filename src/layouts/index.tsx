import * as React from "react"
import Helmet from "react-helmet"
import "bootstrap/dist/css/bootstrap.min.css"
import "Styles/slick/slick.css"
import "Styles/slick/slick-theme.css"
// import "Styles/rbi.min.css"
import "Styles/rbi.less"
import "jquery/dist/jquery.min"

const MainLayout: React.SFC = ({ children }) => (
  <>
    <Helmet
      title="RBI"
      meta={[
        { charset: "UTF-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }
      ]}
      link={[
        {
          rel: "stylesheet",
          href: "//use.fontawesome.com/releases/v5.3.1/css/all.css",
          integrity: "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
          crossorigin: "anonymous"
        },
        {
          rel: "stylesheet",
          href: "//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        },
        {
          rel: "stylesheet",
          href: "//fonts.googleapis.com/css?family=Rubik:400,500,700"
        },
        {
          rel: "stylesheet",
          href: "//fonts.googleapis.com/css?family=Montserrat:300,400,500,700"
        }
      ]}
    />
    {children}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous" />
    
  </>
)

export default MainLayout
