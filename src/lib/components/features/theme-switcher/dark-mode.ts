export function updateTheme(theme: 'light' | 'dark'): void {
  localStorage.setItem('theme', theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function initializeTheme(): void {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDarkScheme);
  updateTheme(isDarkMode ? 'dark' : 'light');
}
