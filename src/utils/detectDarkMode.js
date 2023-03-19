const detectedDarkMode = () => {
  if (
    window.matchMedia &&
    window.matchMedia('prefers-color-scheme: dark').mathces
  ) {
    return false;
  }

  return true;
};

export default detectedDarkMode;

// Відслідковує за змінами теми на самому пристрої (наприклад на тлф увімкнена або викнена darkMode тема, враховуючи це буде вішати таку ж саму темку/світлу тему на сайті)
