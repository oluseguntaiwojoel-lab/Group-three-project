const navMenu = document.getElementById('navMenu');
const iconToggle = document.getElementById('navToggle')
const icon = iconToggle.querySelector('i')
    
iconToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
    icon.classList.toggle('fa-bars')
    icon.classList.toggle('fa-times')
})

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

// Cart functionality
const cartBtns = document.querySelectorAll('.actions button');
let cartCount = 0;

cartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        cartCount++;
        alert(`Item added to cart! You have ${cartCount} items in your cart.`);
    });
});

// Product Filtering Functionality
const filterBtns = document.querySelectorAll('.filters button');
const productCards = document.querySelectorAll('.grid .card');

if (filterBtns.length > 0 && productCards.length > 0) {
    const vegetables = ['tomato', 'pepper', 'cucumber', 'potato'];
    const fruits = ['pineapple', 'strawberry', 'plantain', 'apple', 'banana'];

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterType = btn.innerText.toLowerCase();

            productCards.forEach(card => {
                const title = card.querySelector('h3').innerText.toLowerCase();
                
                if (filterType === 'fresh' || filterType === 'all') {
                    card.style.display = 'block';
                } else if (filterType === 'vegetable') {
                    const isVeg = vegetables.some(v => title.includes(v));
                    card.style.display = isVeg ? 'block' : 'none';
                } else if (filterType === 'fruits' || filterType === 'fruit') {
                    const isFruit = fruits.some(f => title.includes(f));
                    card.style.display = isFruit ? 'block' : 'none';
                } else {
                    card.style.display = 'block';
                }
            });
        });
    });
}

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    backToTop.style.display = 'none';

    window.addEventListener('scroll', () => {
        if(window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}