window.onload = function () {
    
    const dialog1 = document.querySelector('#dialog1')
    const cancel1 = document.querySelector('#cancel1')
    const show1 = document.querySelector('#show1')

    show1.addEventListener('click', () => dialog1.showModal())
    cancel1.addEventListener('click', () => dialog1.close())

    const dialog2 = document.querySelector('#dialog2')
    const cancel2 = document.querySelector('#cancel2')
    const show2 = document.querySelector('#show2')

    show2.addEventListener('click', () => dialog2.showModal())
    cancel2.addEventListener('click', () => dialog2.close())
}   

