const colorPicker = document.getElementById('colorPicker') as HTMLInputElement;

colorPicker.addEventListener('input', () => {
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);

  if (range.collapsed) return;

  const span = document.createElement('span');
  span.style.color = colorPicker.value;

  range.surroundContents(span);
});