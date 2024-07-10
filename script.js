function handleSubmit() {
    console.log("Submit button clicked"); // Debug log to verify button click

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedValues = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedValues.push(checkbox.value);
        }
    });

    console.log("Checked values:", checkedValues); // Debug log to verify checked values

    // Example: Perform actions based on specific combinations
    const actions = {
        "1,56": function () {
            window.location.href = "សម្ព័ន្ធអ៊ីដ្រូសែន១.html";
        },
        "1,2,56": function () {
            console.log("Action for Option 4, Option 5, and Option 6");
            alert("Action for Option 4, Option 5, and Option 6");
        },
        "1,2,3,4": function () {
            console.log(
                "Action for Option 1, Option 2, Option 3, and Option 4"
            );
            alert("Action for Option 1, Option 2, Option 3, and Option 4");
        },
        "2,3,4,5": function () {
            console.log(
                "Action for Option 2, Option 3, Option 4, and Option 5"
            );
            alert("Action for Option 2, Option 3, Option 4, and Option 5");
        },
        "1,2,3,4,5": function () {
            console.log(
                "Action for Option 1, Option 2, Option 3, Option 4, and Option 5"
            );
            alert(
                "Action for Option 1, Option 2, Option 3, Option 4, and Option 5"
            );
        },
        // Add more combinations as needed
    };

    // Generate the key based on checked values
    const key = checkedValues.sort().join(",");
    console.log("Generated key:", key); // Debug log to verify generated key

    // Execute the action if the combination exists
    if (actions[key]) {
        actions[key]();
    } else {
        console.log("No specific action for this combination");
        alert("No specific action for this combination");
    }
}