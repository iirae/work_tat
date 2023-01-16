
document.addEventListener('DOMContentLoaded', function() {
    const setScreenSize = () => {
        let vh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // resize
    window.addEventListener('resize', () => {
        // default
        setScreenSize();
    });

    const init = () => {
        // default
        setScreenSize();
    };

    init();
    
});