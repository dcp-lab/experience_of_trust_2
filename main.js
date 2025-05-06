// Utility to save form results
function saveFormData(formId, key, nextPage) {
  const form = document.getElementById(formId);
  const data = {};
  new FormData(form).forEach((value, field) => data[field] = value);
  localStorage.setItem(key, JSON.stringify(data));
  window.location.href = nextPage;
}
