const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click',()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click',()=>{
    container.classList.remove("active");
});



function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display ='flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display ='none';
}

function navigateTo(event, sectionId) {
    event.preventDefault(); // Prevent the default link behavior
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    hideSidebar(); // Optionally hide the sidebar after navigation
}