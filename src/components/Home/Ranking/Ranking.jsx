import './Ranking.css'
import React from 'react'
import avatar from '../../../assets/avatar.png'
import iconRank from '../../../assets/iconRank.png'

const Ranking = () => {
  return (
        <div className='Rank-Container'>
            <div className='Rank-ChildContainer'>
                <div
                    className='first-Rank-bg'
                ></div>
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
                <div
                    className='second-Rank-bg'
                ></div>
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
                <div
                    className='third-Rank-bg'
                ></div>
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
