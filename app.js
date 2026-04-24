colorPicker.id = "cop";
colorInput.id = "editor";

colorPicker.addEventListener('input', () => {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;

  const range = sel.getRangeAt(0);
  if (range.collapsed) return;

  const span = document.createElement('span');
  span.style.color = colorPicker.value;

  const content = range.extractContents();
  span.appendChild(content);
  range.insertNode(span);

  sel.removeAllRanges();
});