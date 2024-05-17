document.addEventListener("DOMContentLoaded", function() {
    twemoji.parse(document.body, {
        folder: 'svg',
        ext: '.svg',
        className: 'twemoji'
    });
});
