import React from 'react'

function Home() {
    return (
        <div>
            
            <div class='home-background-img'>

                <div className='home-welcome-title-wrap'>
                    <h1 class='home-title crimson-font'>Welcome To EVEntor</h1>
                    <h2 class='home-subtitle crimson-font'>Find events near you!!</h2>
                </div>
                

                <div className='home-search-wrap'>
                    <h3 className="home-search-subtitle crimson-font">Start by entering your in the box below ... </h3>
                    <div>
                        <form>
                            <div className='home-input-button-wrap'>
                                <input type='text' class='home-search-box'  
                                    id='home-search-box'></input>
                                <button class="home-search-button crimson-font">Find Events</button>
                            </div>

                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home
