export const COMING_SOON_PASSWORD = "hatsoff";
export const COMING_SOON_KEY = "hatsoff-coming-soon-unlocked";
export const LAUNCH_DATE = new Date("2026-09-14T10:00:00+05:30");

export function isLaunchLive() {
  if (typeof window === "undefined") {
    return false;
  }

  return Date.now() >= LAUNCH_DATE.getTime();
}

export function isSiteUnlocked() {
  if (typeof window === "undefined") {
    return false;
  }

  return localStorage.getItem(COMING_SOON_KEY) === "true" || isLaunchLive();
}

export function getTimeRemaining(targetDate = LAUNCH_DATE) {
  const diff = Math.max(targetDate.getTime() - Date.now(), 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isLive: diff === 0 };
}
