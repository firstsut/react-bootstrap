import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = ()=>{
    return (
        <div>
            <Header/>
                <div className="container-fluid text-center">
                    <h1 style={{fontSize:"80pt"}}><strong>404</strong></h1>
                    <h2><strong>Not Found</strong></h2>
                    <p>ไม่พบหน้าที่คุณค้นหา, หน้าที่คุณค้นหาไม่มีอยู่อีกต่อไปหรือย้ายไปยัง Server อื่น</p>  
                </div>              
            <Footer/>
        </div>
    )
}

export default NotFound;