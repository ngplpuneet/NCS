import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { HomePage } from './HomePage';
import Navbar from './_components/navbar'
import BreadCrumb from './_components/breadcrumb'
import Footer from './_components/footer'

class App extends React.Component {    

    render() {
        return (
          <div className="d-flex flex-column">
            <div>
              <Navbar />
              <BreadCrumb />
            </div>
            <div className="jumbotron bg-white">
                <div className="container">
                    <div className="col">                        
                        <Router>
                            <div>
                                <Route exact path="/" component={HomePage}/>                                
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
            <Footer />
          </div>
        );
    }
}

function mapStateToProps(state) {
  return {}
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 