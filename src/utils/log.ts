const projectName = import.meta.env.VITE_GLOB_APP_TITLE;

export function warn(message: string) {
  // eslint-disable-next-line no-console
  console.warn(`[${projectName} warn]:${message}`);
}

export function error(message: string) {
  throw new Error(`[${projectName} error]:${message}`);
}