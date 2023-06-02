// Function to inject CSS into the page
function injectCSS(file) {
    const link = document.createElement('link');
    link.href = chrome.runtime.getURL(file);
    link.rel = 'stylesheet';
    console.log(link)
    document.head.appendChild(link);
}

// Call the injectCSS function with the CSS file
injectCSS('styles.css');