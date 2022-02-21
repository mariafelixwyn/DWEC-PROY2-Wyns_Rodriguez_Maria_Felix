import Header from './header.js';
import Footer from './footer.js';

const Layout =({children}) =>{
    return(
      <div>
          <Header/>
          <body>{children}</body>
          <Footer/>
      </div>
    )
}

export default Layout;