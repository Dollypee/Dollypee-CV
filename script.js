// const formControls = (() => {
//     //function to show contact form
//     const showContact = () => {
//         form.classList.remove('hide-contact');
//     };
//     //function to close contact form
//     const closeContact = () => {
//         form.classList.add('hide-contact');
//         email.value = '';
//         name.value = '';
//         message.value = '';
//     };
//     // assign functions to elements to trigger actions
//     const showContactBtn = document.querySelector('.contact-open-btn').addEventListener('click', showContact);
//     const closeContactBtn = document.querySelector('#close-btn');
//     closeContactBtn.addEventListener('click', closeContact);
//     const contact = document.querySelector('#contact-form'); 
//     const name = document.querySelector('#name'); 
//     const email = document.querySelector('#email'); 
//     const message = document.querySelector('#message'); 
// })();












const modalControls = (() => {
    //function to open modal
const openModal = () => {
    modal.classList.remove('hide-modal');
};
//function to close modal
const closeModal = () => {
    modal.classList.add('hide-modal');
    email.value = '';
    name.value = '';
    message.value = '';
    };
    
//grab elements and asssign functions on action trigger
const openModalBtn = document.querySelector('.contact-modal-open-btn').addEventListener('click', openModal);
    const closeModalBtn = document.querySelector('#close-btn');
    closeModalBtn.addEventListener('click', closeModal);
    const modal = document.querySelector('#modal-with-form'); 
    const name = document.querySelector('#name'); 
    const email = document.querySelector('#email'); 
    const message = document.querySelector('#message'); 
})();