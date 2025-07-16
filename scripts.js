const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            let result = display.value
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/−/g, '-');
            display.value = eval(result);
        } else if (btn.id === "ac") {
            display.value = "";
        } else  {
            display.value += btn.innerText;
        }
    });
});
