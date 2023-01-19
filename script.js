function toggleMode() {

    const html = document.documentElement
    
    
    html.classList.toggle('light')


     
    // pegar a tag img

    const img = document.querySelector('#profile img')

    //substituir a imagem

    if(html.classList.contains('light')) {
        //se tiver light mode
        img.setAttribute('src', 'images/Avatar2.png')
        img.setAttribute('alt', "Imagem de Perfil com óculos escuros")
    } else {
        //se tiver dark mode
        img.setAttribute('src', 'images/Avatar.png')
        img.setAttribute('alt', "Imagem de Perfil sem óculos escuros")
    }
  

  
}