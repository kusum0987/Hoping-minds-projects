const allMenuButton = document.getElementById('all-menu');
const breakfastMenuButton = document.getElementById('breakfastmenu');
const lunchMenuButton = document.getElementById('lunchmenu');
const dinnerMenuButton = document.getElementById('dinnermenu');
const DesertsMenuButton = document.getElementById('desertmenu');



const menuSections = document.querySelectorAll('.menu-section');



allMenuButton.addEventListener('click', () => {
    menuSections.forEach((section) => {
        section.style.display = 'block';
    });
});


// Add click event to "Breakfast" button

breakfastMenuButton.addEventListener('click', () => {
    menuSections.forEach(section => {
        section.style.display = 'none'; // Hide all sections by default
    });

    const filteredSections = Array.from(menuSections).filter(section => section.id === 'breakfast');
    filteredSections.forEach(section => {
        section.style.display = 'block';
 
         // Display only breakfast sections
    });
});
 
// // Add click event to "Breakfast" button
// breakfastMenuButton.addEventListener('click', () => {
//     menuSections.forEach((section) => {
//         if (section.id === 'breakfast') {
//             section.style.display = 'block';
//         } else {
//             section.style.display = 'none';
//         }
//     });
// });

// Add click event to "Lunch" button
lunchMenuButton.addEventListener('click', () => {
    menuSections.forEach(section => {
        section.style.display = 'none'; // Hide all sections by default
    });

    const filteredSections = Array.from(menuSections).filter(section => section.id =='lunch');
    filteredSections.forEach(section => {
        section.style.display = 'block'; // Display only breakfast sections
    });
});

// lunchMenuButton.addEventListener('click', () => {
//     menuSections.forEach((section) => {
//         if (section.id === 'lunch') {
//             section.style.display = 'block';
//         } else {
//             section.style.display = 'none';
//         }
//     });
// });

// Add click event to "Dinner" button
dinnerMenuButton.addEventListener('click', () => {
    menuSections.forEach(section => {
        section.style.display = 'none'; // Hide all sections by default
    });

    const filteredSections = Array.from(menuSections).filter(section => section.id =='dinner');
    filteredSections.forEach(section => {
        section.style.display = 'block'; // Display only breakfast sections
    });
});

// dinnerMenuButton.addEventListener('click', () => {
//     menuSections.forEach((section) => {
//         if (section.id === 'dinner') {
//             section.style.display = 'block';
//         } else {
//             section.style.display = 'none';
//         }
//     });
// });
// Add click event to "Dinner" button

DesertsMenuButton.addEventListener('click', () => {
    menuSections.forEach(section => {
        section.style.display = 'none'; // Hide all sections by default
    });

    const filteredSections = Array.from(menuSections).filter(section => section.id =='Deserts');
    filteredSections.forEach(section => {
        section.style.display = 'block'; // Display only breakfast sections
    });
});



// DesertsMenuButton.addEventListener('click', () => {
//     menuSections.forEach((section) => {
//         if (section.id === 'sweets') {
//             section.style.display = 'block';
//         } else {
//             section.style.display = 'none';
//         }
//     });
// });

// Hide all menu sections initially
menuSections.forEach((section) => {
    section.style.display = 'none';
});