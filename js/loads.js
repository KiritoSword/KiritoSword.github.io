function noScroll(event) {
    event.preventDefault();
}

function lockScroll() {
    // スクロール禁止(SP)
    document.addEventListener('touchmove', noScroll, { passive: false });
    // スクロール禁止(PC)
    document.addEventListener('mousewheel', noScroll, { passive: false });
}

function unlockScroll() {
    // スクロール禁止を解除(SP)
    document.removeEventListener('touchmove', noScroll, { passive: false });
    // スクロール禁止を解除(PC)
    document.removeEventListener('mousewheel', noScroll, { passive: false });
}

window.scrollTo(0, 0);
lockScroll();
setTimeout(function() {
    unlockScroll();
}, 3000);
