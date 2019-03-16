import React,{Component} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

class About extends Component{
    render(){
        return (
            <div>
                <Header/>
                    <div className="container-fluid">
                        About Page
                    </div>
                <Footer/>
            </div>
        )
    }
}
export default About;