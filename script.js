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

    // Check if the user has a theme preference set
    if (themePreference === 'dark') {
        body.classList.add('dark-theme');
    } else if (themePreference === 'light') {
        body.classList.remove('dark-theme');
    } else {
        // If no preference is set, detect the user's system theme
        var userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userPrefersDark) {
            body.classList.add('dark-theme');
        }
    }
}

// Call the detectUserTheme function when the page loads
detectUserTheme();
