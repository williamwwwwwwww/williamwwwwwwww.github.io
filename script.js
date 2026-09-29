(() => {
  const root = document.documentElement;
  const languageButton = document.getElementById("language-toggle");
  const themeButton = document.getElementById("theme-toggle");
  const themeLabel = themeButton.querySelector("[data-zh]");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const savedLanguage = localStorage.getItem("portfolio-language");
  let language = savedLanguage === "en" ? "en" : "zh";

  function setTheme(theme) {
    root.dataset.theme = theme;
    themeLabel.textContent = theme === "dark"
      ? (language === "zh" ? "淺色" : "Light")
      : (language === "zh" ? "深色" : "Dark");
    themeButton.setAttribute("aria-label", theme === "dark"
      ? (language === "zh" ? "切換為淺色主題" : "Switch to light theme")
      : (language === "zh" ? "切換為深色主題" : "Switch to dark theme"));
    localStorage.setItem("portfolio-theme", theme);
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    root.lang = language === "zh" ? "zh-Hant" : "en";
    document.querySelectorAll("[data-zh][data-en]").forEach((element) => {
      if (element !== themeLabel) element.textContent = element.dataset[language];
    });
    languageButton.textContent = language === "zh" ? "EN" : "中文";
    languageButton.setAttribute("aria-label", language === "zh" ? "切換為英文" : "Switch to Chinese");
    document.title = language === "zh" ? "william — AI 學習筆記" : "william — AI Learning Notes";
    setTheme(root.dataset.theme || "light");
    localStorage.setItem("portfolio-language", language);
  }

  setTheme(savedTheme === "dark" ? "dark" : "light");
  setLanguage(language);
  themeButton.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
  languageButton.addEventListener("click", () => {
    setLanguage(language === "zh" ? "en" : "zh");
  });
})();
