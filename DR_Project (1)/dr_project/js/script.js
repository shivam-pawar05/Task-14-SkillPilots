// Restore checklist: tick steps and track progress
const boxes = document.querySelectorAll('#steps input');
const doneEl = document.getElementById('done');
function update() {
  let n = 0;
  boxes.forEach(b => {
    b.closest('li').classList.toggle('done', b.checked);
    if (b.checked) n++;
  });
  doneEl.textContent = n;
}
boxes.forEach(b => b.addEventListener('change', update));
document.getElementById('reset').addEventListener('click', () => {
  boxes.forEach(b => (b.checked = false));
  update();
});

// Drill findings: add rows to the table
const form = document.getElementById('findingForm');
const body = document.querySelector('#findings tbody');
form.addEventListener('submit', e => {
  e.preventDefault();
  const empty = body.querySelector('.empty');
  if (empty) empty.remove();
  const data = new FormData(form);
  const tr = document.createElement('tr');
  [body.children.length + 1, data.get('finding'), data.get('action'), data.get('owner')].forEach(v => {
    const td = document.createElement('td');
    td.textContent = v;
    tr.appendChild(td);
  });
  body.appendChild(tr);
  form.reset();
});
