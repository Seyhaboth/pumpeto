// Redirecting webpages according to the checkboxes combinations.
function handleRedirection() {
    // Create a unique key based on the checked checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let key = "";
    checkboxes.forEach((checkbox) => {
        key += checkbox.checked ? "1" : "0";
    });

    // Define the mapping of checkbox combinations to URLs
    const urlMap = {
        '1000': 'page1.html',
        '0100': 'page2.html',
        '0010': 'page3.html',
        '0001': 'page4.html',
        '1100': 'page5.html',
        '1010': 'page6.html',
        '1001': 'page7.html',
        '0110': 'page8.html',
        '0101': 'page9.html',
        '0011': 'page10.html',
        '1110': 'page11.html',
        '1101': 'page12.html',
        '1011': 'page13.html',
        '0111': 'page14.html',
        '1111': 'page15.html',
        // Add more combinations as needed
    };

    // Redirect to the corresponding URL
    const url = urlMap[key];
    if (url) {
        window.location.href = url;
    } else {
        alert(
            "tver kloun eng tv, nhom ot ton tver ah lomhat ng te send mk tam telegram nhom mk nhom tver hz nhom add jol website, ng , you idiot tnak ti 12 hz men jes tver ey te, leave the fucking website, go cry"
        );
    }
}