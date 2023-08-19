const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', '.histoire', 'dist', 'index.html');

// Todo review code... chat gpt wrote it.

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if <base> tag already exists
    if (!content.includes('<base')) {
        // Find the position of the </head> tag
        let headClosePos = content.indexOf('</head>');

        if (headClosePos !== -1) {
            // Insert <base href="/"> before </head>
            const baseElement = '<base href="/h11y-scl/">\n';
            content = content.slice(0, headClosePos) + baseElement + content.slice(headClosePos);

            fs.writeFileSync(filePath, content);
            console.log('Added <base> tag successfully.');
        } else {
            console.log('Failed to find </head> tag.');
        }
    } else {
        console.log('<base> tag already exists.');
    }
} else {
    console.log(`File ${filePath} does not exist.`);
}