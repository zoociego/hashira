window.addEventListener('load', () =>{
    setTimeout(() => {
      let container = document.getElementById('container')
      let loading = document.getElementById('loading')
      console.log(container);
      container.removeChild(loading)
    }, 5500)
  })