(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById("theme-toggle");
  const languageButton = document.getElementById("language-toggle");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const savedLanguage = localStorage.getItem("portfolio-language");
  let language = savedLanguage === "en" ? "en" : "zh";

  function setTheme(theme) {
    root.dataset.theme = theme;
    themeButton.textContent = theme === "dark" ? (language === "zh" ? "淺色" : "Light") : (language === "zh" ? "深色" : "Dark");
    themeButton.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    localStorage.setItem("portfolio-theme", theme);
  }
  function setLanguage(nextLanguage) {
    language = nextLanguage;
    root.lang = language === "zh" ? "zh-Hant" : "en";
    document.querySelectorAll("[data-zh][data-en]").forEach((element) => {
      element.textContent = element.dataset[language];
    });
    languageButton.textContent = language === "zh" ? "EN" : "中文";
    languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切換為中文");
    document.title = language === "zh" ? "William | 商業管理學習紀錄" : "William | Business Administration";
    setTheme(root.dataset.theme || "light");
    localStorage.setItem("portfolio-language", language);
  }
  setTheme(savedTheme === "dark" ? "dark" : "light");
  setLanguage(language);
  themeButton.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
  languageButton.addEventListener("click", () => setLanguage(language === "zh" ? "en" : "zh"));
})();
