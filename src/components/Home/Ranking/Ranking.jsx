import './Ranking.css'
import React from 'react'
import avatar from '../../../assets/avatar.png'
import iconRank from '../../../assets/iconRank.png'

const Ranking = () => {
  return (
        <div className='Rank-Container'>
            <div className='Rank-ChildContainer'>
                <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210720/2021072015230536749.jpg"
                        alt="backgroud-Ranking"
                        className='Rank-bg'
                />
                <img src={iconRank}
                    alt='iconRank'
                    className='Icon-Rank'
                />
                <img src={avatar}
                    alt='avatarRanking'
                    className='Rank-Avatar'
                />
                <div className='Rank-ChildContainer2 Rank-ChildContainer2-Underline'>
                    SOY EL UNO
                </div>
            </div>
            <div className='Rank-ChildContainer'>
                <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210720/2021072015230536749.jpg"
                        alt="backgroud-Ranking"
                        className='Rank-bg'
                />
                <img src={iconRank}
                    alt='iconRank'
                    className='Icon-Rank'
                />
                <img src={avatar}
                    alt='avatarRanking'
                    className='Rank-Avatar'
                />
                <div className='Rank-ChildContainer2 Rank-ChildContainer2-Underline'>
                    SOY EL DOS
                </div>
            </div>
            <div className='Rank-ChildContainer'>
                <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210720/2021072015230536749.jpg"
                        alt="backgroud-Ranking"
                        className='Rank-bg'
                />
                <img src={iconRank}
                    alt='iconRank'
                    className='Icon-Rank'
                />
                <img src={avatar}
                    alt='avatarRanking'
                    className='Rank-Avatar'
                />
                <div className='Rank-ChildContainer2 Rank-ChildContainer2-Underline'>
                    SOY EL TRES
                </div>
            </div>
        </div>
  )
}

export default Ranking
