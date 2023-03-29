var enterEventCount = 1;
window.onload = function () {
    const mouse_target = document.getElementById("mouseTarget");

    mouse_target.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = '#303030';
            e.target.innerText = `${enterEventCount}`
            setTimeout(() => {
                e.target.style.backgroundColor = '#442f2f';
            }, 2000);
            enterEventCount++;
        }
    );
}