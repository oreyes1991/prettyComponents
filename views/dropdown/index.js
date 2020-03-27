function changeFunc (e) {
    alert('click on ' + e.innerHTML);
}
function placement(e, ...params) {
    console.log(params)
    const el = params[1]; // dropdown
    el.setAttribute('placement', e.innerHTML);
}