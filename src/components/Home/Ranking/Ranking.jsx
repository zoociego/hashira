import './Ranking.css'

const Ranking = () => {
    return(
        <div className='Rank-Container'>
            <div className='Rank-ChildContainer'>
                <div className='Rank-Section first-place'>
                    <p className='Rank-Name'>Gumayushi</p>     
                </div>
            </div>
            <div className='Rank-ChildContainer'>
                <div className='Rank-Section second-place'>
                    <p className='Rank-Name'>Faker</p> 
                </div>
            </div>
            <div className='Rank-ChildContainer'>
                <div className='Rank-Section third-place'>
                    <p className='Rank-Name'>Yutapon</p> 
                </div>
            </div>
        </div>
    )
}

export default Ranking;