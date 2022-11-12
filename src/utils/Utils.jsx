import theme from '../assets/theme.mp3'
import logo from '../assets/probando.png'
import logo2 from '../assets/probando2.png'
import volume from '../assets/volume.png'
import mute from '../assets/mute.png'

// Utils for Navbar

const logoHover = () => {
  const img = document.getElementById('img')
  img.setAttribute('src', logo2)
}
const normalLogo = () => {
  const img = document.getElementById('img')
  img.setAttribute('src', logo)
}

const volumeChanger = () => {
  const audio = document.getElementById('theme')
  const volumeValue = document.getElementById('volume')
  const volumeSrc = volumeValue.getAttribute('src')
  if (volumeSrc === volume) {
    volumeValue.setAttribute('src', mute)
    audio.volume = 0
  } else {
    volumeValue.setAttribute('src', volume)
    audio.play()
    audio.volume = 1
    audio.setAttribute('loop', '')
  }
}

// Utils for LoadDisplay

const Utils = {
  theme,
  logo,
  volume,
  mute,
  logoHover,
  normalLogo,
  volumeChanger
}

export default Utils
