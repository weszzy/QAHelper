// Function to create HTML elements
function createElement(elementType, attributes = {}, textContent = '') {
    const element = document.createElement(elementType);
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

// Function to dynamically generate options for bug types
function generateBugTypes() {
    var bugTypes = [
        "UI", "Functionality", "Performance", "Security", "Compatibility",
        "Network", "Database", "Crash", "Memory", "Input", "Output", "Logic",
        "Configuration", "Localization", "Accessibility", "Documentation",
        "Installation", "Upgrade", "Integration", "Regression", "Usability",
        "Audio", "Video", "Animation", "Storage", "File", "Performance",
        "Authentication", "Authorization", "Concurrency", "API", "Third-party",
        "Memory leak", "Rendering", "Compatibility", "Mobile", "Desktop",
        "Cross-browser", "Input validation", "Data corruption",
        "Performance degradation"
    ];

    var selectElement = document.getElementById("bug-type");

    for (var i = 0; i < bugTypes.length; i++) {
        var option = document.createElement("option");
        option.value = bugTypes[i];
        option.text = bugTypes[i];
        selectElement.appendChild(option);
    }
}

// Function to dynamically generate options for bug severity
function generateBugSeverity() {
    var bugSeverities = ["Low", "Minor", "Major", "Critical"];
    var selectElement = document.getElementById("bug-severity");

    for (var i = 0; i < bugSeverities.length; i++) {
        var option = document.createElement("option");
        option.value = bugSeverities[i];
        option.text = bugSeverities[i];
        selectElement.appendChild(option);
    }
}

// Function to dynamically generate options for bug priority
function generateBugPriority() {
    var bugPriorities = ["Low", "Medium", "High"];
    var selectElement = document.getElementById("bug-priority");

    for (var i = 0; i < bugPriorities.length; i++) {
        var option = document.createElement("option");
        option.value = bugPriorities[i];
        option.text = bugPriorities[i];
        selectElement.appendChild(option);
    }
}

// Call the functions to generate options for bug types, bug severity, and bug priority
generateBugTypes();
generateBugSeverity();
generateBugPriority();

// Function to export bug reports based on the selected file format
function exportBugReports(fileFormat) {
    // Get form values
    var projectName = document.getElementById('project-name').value;
    var hoursSpent = document.getElementById('hours-spent').value;
    var bugType = document.getElementById('bug-type').value;
    var bugPriority = document.getElementById('bug-priority').value;
    var bugNotes = document.getElementById('bug-notes').value;

    // Create the bug report object
    var bugReport = {
        projectName: projectName,
        hoursSpent: hoursSpent,
        bugType: bugType,
        bugPriority: bugPriority,
        bugNotes: bugNotes
    };

    // Call the appropriate export function based on the selected file format
    if (fileFormat === 'txt') {
        exportBugReportsAsTXT(bugReport);
    }
}

// Function to export bug reports as a TXT file
function exportBugReportsAsTXT(bugReport) {
    var textContent = 'Bug Report\n\n';
    textContent += 'Project Name: ' + bugReport.projectName + '\n';
    textContent += 'Hours Spent: ' + bugReport.hoursSpent + '\n';
    textContent += 'Bug Type: ' + bugReport.bugType + '\n';
    textContent += 'Bug Priority: ' + bugReport.bugPriority + '\n';
    textContent += 'Bug Notes: ' + bugReport.bugNotes + '\n\n';

    // Create a new Blob with the text content
    var blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });

    // Initiate download using FileSaver.js
    saveAs(blob, 'bug_report.txt');
}

// Reset the form
document.getElementById('bug-report-form').reset();

// Function to toggle the theme
function toggleTheme() {
    var body = document.body;
    body.classList.toggle('dark-theme');

    // Save the user's theme preference
    var themePreference = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('themePreference', themePreference);
}

// Function to detect the user's theme preference
function detectUserTheme() {
    var body = document.body;
    var themePreference = localStorage.getItem('themePreference');

    // Check if the user has a theme preference
    if (themePreference === 'dark') {
        body.classList.add('dark-theme');
    } else if (themePreference === 'light') {
        body.classList.remove('dark-theme');
    } else {
        // If no theme preference is found, check the user's system preference
        var userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userPrefersDark) {
            body.classList.add('dark-theme');
        }
    }
}

// Detect the user's theme preference on page load
detectUserTheme();
