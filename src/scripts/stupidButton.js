
let count = 0;
const btn = document.getElementById("stpBtn");
const txtArea = document.getElementById("btn-counter");

if (!btn) {
    console.error(`couln't find button`);
}
if (!txtArea) {
    console.error(`couldn't find text area`);
}

btn.addEventListener('click', ()=>{
    if (!txtArea) { return; }
    count += 1;
    txtArea.innerHTML = String(count);
});

