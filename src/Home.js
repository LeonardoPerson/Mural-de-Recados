import React from 'react'
import NewComment from './NewComment'
import Comments from './Comments'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
    return(        
        <div className='grid-container'> 
            {/*header---------------------------*/}
            <header className='header'>           
                <Header />    
            </header>    
            {/*main---------------------------*/}
            <main className='main'>   
                <Comments />  
                <NewComment />
            </main>   
            {/*footer---------------------------*/}
            <footer className='footer'>         
                <Footer /> 
            </footer>       
        </div>
    )
}

export default Home