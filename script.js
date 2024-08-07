function toggleDropdown(element) {
    // Close all dropdowns
    document.querySelectorAll('.dropdown').forEach(function (dropdown) {
        dropdown.classList.remove('show');
    });

    // Toggle the clicked dropdown
    element.parentElement.classList.toggle('show');
}

// Close dropdown if clicked outside
window.onclick = function (event) {
    if (!event.target.matches('button')) {
        document.querySelectorAll('.dropdown').forEach(function (dropdown) {
            dropdown.classList.remove('show');
        });
    }
}