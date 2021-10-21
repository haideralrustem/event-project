import React from 'react'

function Home() {
    return (
        <div>
            
            <div class='home-background-img'>

                <h1 class='home-title crimson-font'>Welcome To EVEntor</h1>
                <h2 class='home-subtitle crimson-font'>Find events near you!!</h2>

                <div>
                    <h3 class="crimson-font">Start by entering your in the box below ... </h3>
                    <div>
                        <form>
                            <input type='text' class='home-search-box'  
                                id='home-search-box'></input>
                            <button class="home-search-button crimson-font">Find Events</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home
