import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import '../style/Portfolio.css'


function Portfolio() {
  return (
    <div>
        <Header />
        <div className='bodymenu'>
            <Sidebar />
            <div className='portfolio-mainbar'>
                <div className='section-one'>
                    <div className='section-one-left'>
                        <h1>Hi Blitz</h1>
                        <small>Nothing to see here!</small>

                    </div>
                    <div className='section-one-right'>
                        <div>
                            <div style={{position:'relative'}}>
                                <img src="./img/Ellipse 25.png" style={{position:'relative', width: '80%'}}/>
                                <img src="./img/Vectorsign.png" style={{position:'absolute', bottom:'28%', left:'35%', width:'28%'}}/>
                            </div>
                            <small>Send</small>
                        </div>
                        <div>
                            <div style={{position:'relative'}}>
                                <img src="./img/Ellipse 25.png" style={{position:'relative', width: '80%'}}/>
                                <img src="./img/Vectorsign(1).png" style={{position:'absolute', bottom:'28%', left:'35%', width:'28%'}}/>
                            </div>
                            <small>Receive</small>
                        </div>
                        <div>
                            <div style={{position:'relative'}}>
                                <img src="./img/Ellipse 25.png" style={{position:'relative', width: '80%'}}/>
                                <img src="./img/Vectorsign(2).png" style={{position:'absolute', bottom:'28%', left:'35%', width:'28%'}}/>
                            </div>
                            <small>Swap</small>
                        </div>
                        <div>
                            <div style={{position:'relative'}}>
                                <img src="./img/Ellipse 25.png" style={{position:'relative', width: '80%'}}/>
                                <img src="./img/Vectorsign(3).png" style={{position:'absolute', bottom:'28%', left:'35%', width:'28%'}}/>
                            </div>
                            <small>Buy</small>
                        </div>
                        <div>
                            <div style={{position:'relative'}}>
                                <img src="./img/Ellipse 25.png" style={{position:'relative', width: '60%'}}/>
                                <img src="./img/Vectorsign(4).png" style={{position:'absolute', bottom:'30%', left:'40%', width:'22%'}}/>
                            </div>
                            <small>Withdraw</small>
                        </div>
                        
                    </div>

                </div>
                <div className='section-two'>
                    <div className='portfolio-left'>
                        
                    </div>
                    <div className='portfolio-right'>
                        <div className='total-portfolio'>
                            <small>
                                Total Portfolio
                            </small>
                            <h2>$0.00</h2>
                        </div>
                        <div className='assets'>
                            <p>Assets</p>
                            <small>No tokens found in this wallet</small>
                        </div>

                    </div>

                </div>
                <div className='section-three'>
                    <div className='token-div'>
                        <div className='available-token'>
                            <img src='./img/Vectorcoin.png'/>
                            <h6>Available Tokens</h6>
                        </div>
                        <small>$0.00</small>

                    </div>
                    <div className='token-div'>
                        <div className='available-token'>
                            <img src='./img/Vectorcoin(1).png'/>
                            <h6>Loaned Tokens</h6>
                        </div>
                        <small>$0.00</small>

                    </div>
                    <div className='token-div'>
                        <div className='available-token'>
                            <img src='./img/Vectorcoin(2).png' style={{width:'7%'}}/>
                            <h6>Staked Tokens</h6>
                        </div>
                        <small>$0.00</small>

                    </div>
                    

                </div>
                <div>

                </div>
            </div>
        </div>
            

    </div>
  )
}

export default Portfolio
