document.getElementById("bugReportForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the form values
    var projectName = document.getElementById("projectName").value;
    var hoursSpent = document.getElementById("hoursSpent").value;
    var bugTypes = Array.from(document.getElementById("bugTypes").selectedOptions).map(option => option.value);
    var bugImportance = document.getElementById("bugImportance").value;
    var bugNotes = document.getElementById("bugNotes").value;
    var bugScreenshot = document.getElementById("bugScreenshot").files[0];

    // You can perform additional validation or processing here before submitting the bug report

    // Log the bug report data
    console.log("Project Name: " + projectName);
    console.log("Hours Spent: " + hoursSpent);
    console.log("Bug Types: " + bugTypes.join(", "));
    console.log("Bug Importance: " + bugImportance);
    console.log("Notes: " + bugNotes);
    console.log("Screenshot: ", bugScreenshot);

    // You can send the bug report data to a server using AJAX or perform any other necessary actions
    // For simplicity, we are only logging the data here

    // Reset the form
    document.getElementById("bugReportForm").reset();
});
