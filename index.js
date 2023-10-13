window.addEventListener('scroll', function(){
    var nav = this.document.getElementById('nav');
    var scrolly = window.scrollY;

    if(scrolly > 250){
        nav.className = 'nav-color'
    }
    else{
        nav.className = 'nav-no-color'
    }
})