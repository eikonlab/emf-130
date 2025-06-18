const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith("de")) {
  window.location.href = "index-de.html";
}
