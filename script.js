// Function to export bug reports based on the selected file format
function exportBugReports(fileFormat) {
    // Get form values
    var projectName = document.getElementById('project-name').value;
    var hoursSpent = document.getElementById('hours-spent').value;
    var bugType = document.getElementById('bug-type').value;
    var bugImportance = document.getElementById('bug-importance').value;
    var bugNotes = document.getElementById('bug-notes').value;

    // Create the bug report object
    var bugReport = {
        projectName: projectName,
        hoursSpent: hoursSpent,
        bugType: bugType,
        bugImportance: bugImportance,
        bugNotes: bugNotes
    };

    // Call the appropriate export function based on the selected file format
    if (fileFormat === 'pdf') {
        exportBugReportsAsPDF(bugReports);
    } else if (fileFormat === 'txt') {
        exportBugReportsAsTXT(bugReports);
    }
}

// Function to export bug reports as a PDF
function exportBugReportsAsPDF(bugReports) {
    // Define the document definition for pdfmake
    var docDefinition = {
        content: [
            { text: 'Bug Reports', style: 'header' },
            '\n',
            { text: 'Project Name: ' + bugReports.projectName, style: 'subheader' },
            '\n\n',
            { text: 'Bug Reports:', style: 'subheader' },
            '\n\n',
        ]
    };

    // Add bug reports to the PDF document
    bugReports.reports.forEach(function (report, index) {
        docDefinition.content.push(
            { text: 'Bug ' + (index + 1), style: 'bugHeader' },
            'Project Name: ' + report.projectName,
            'Hours Spent: ' + report.hoursSpent,
            'Bug Type: ' + report.bugType,
            'Bug Importance: ' + report.bugImportance,
            'Bug Notes: ' + report.bugNotes,
            '\n'
        );
    });

    // Generate the PDF and initiate download
    var pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.download('bug_reports.pdf');
}

// Function to export bug reports as a TXT file
function exportBugReportsAsTXT(bugReports) {
    var textContent = 'Bug Reports\n\n';
    textContent += 'Project Name: ' + bugReports.projectName + '\n\n';
    textContent += 'Bug Reports:\n\n';

    bugReports.reports.forEach(function (report, index) {
        textContent += 'Bug ' + (index + 1) + '\n';
        textContent += 'Project Name: ' + report.projectName + '\n';
        textContent += 'Hours Spent: ' + report.hoursSpent + '\n';
        textContent += 'Bug Type: ' + report.bugType + '\n';
        textContent += 'Bug Importance: ' + report.bugImportance + '\n';
        textContent += 'Bug Notes: ' + report.bugNotes + '\n\n';
    });

    // Create a new Blob with the text content
    var blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });

    // Initiate download using FileSaver.js
    saveAs(blob, 'bug_reports.txt');
}

// Log the bug report
console.log('Bug Report:', bugReport);

// Reset the form
document.getElementById('bug-report-form').reset();
});

var bugReports = {
    projectName: projectName,
    reports: [bugReport]
};

// Call the export functions to generate and download the files
exportBugReportsAsPDF(bugReports);
exportBugReportsAsTXT(bugReports);
});