function paralax(event){
    console.log(event);
    this.querySelectorAll('.layer').forEach(element=>{
        //element.style.transform = `translateX(${event.clientX*  element.getAttribute('data-speed')/50}px)`;
        element.style.transform = `translate(${event.clientX*  element.getAttribute('data-speed')/50}px,
        ${event.clientY*  element.getAttribute('data-speed')/100}px)`;
    });
    this.querySelectorAll('.layer_cloud').forEach(element=>{
        element.style.transform = `translateY(${event.clientY*  element.getAttribute('data-speed')/900}px)`;
    });
    this.querySelectorAll('.layer_skyBlue').forEach(element=>{
        element.style.transform = `translateY(${event.clientY*  element.getAttribute('data-speed')/300}px)`;
    });
}

document.addEventListener('mousemove',paralax);