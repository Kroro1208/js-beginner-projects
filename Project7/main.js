const testimonials = [
    {
        name: 'John Doe',
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: 'Golang is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!'
    },
    {
        name: 'Done K',
        photoUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: 'Golang has helped my team and I stay on the same page. Previously, we were all over the board. Using Golang has definitely saved us time and money.'
    },
    {
        name: 'King Nue',
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: 'React has helped my team and I stay on the same page. Previously, we were all over the board. Using React has definitely saved us time and money.'
    },
];

const imageEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');

let index = 0;
updateTestimonial();
function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[index];
    imageEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    index++
    if (index === testimonials.length) {
        index = 0;
    }
    setTimeout(updateTestimonial, 3000);
}