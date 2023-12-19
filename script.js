const acc = document.getElementsByClassName('accordion');


//Navigate the questions and hide/show answers using keyboard navigation alone

let focusIndex = 0;
acc[focusIndex].focus();

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') switchAccordionFocus(-1);
    if (e.key === 'ArrowDown') switchAccordionFocus(1);
});

function switchAccordionFocus(increase) {
    focusIndex += increase;
    if (focusIndex < 0) focusIndex = accItens.length - 1;
    if (focusIndex > accItens.length - 1) focusIndex = 0;

    acc[focusIndex].focus();
}



for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        toggleAccordion(this);
    });

}
//Hide/Show the answer to a question when the question is clicked
function toggleAccordion(element) {
    let panel = element.nextElementSibling;
    let icon = element.lastElementChild;

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        icon.classList.toggle('active');
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        icon.classList.toggle('active');
    }
    let panels = document.getElementsByClassName('panel');
    let j;
    for (j = 0; j < panels.length; j++) {
        if (panels[j] !== panel) {
            panels[j].style.maxHeight = null;
            let button = panels[j].previousElementSibling;
            let icon = button.lastElementChild;
            console.log(icon);
            icon.classList.remove("active");



        }
    }
}