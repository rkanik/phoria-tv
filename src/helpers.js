export const miniId = (len = 6) => Math.random().toString(36).slice(len <= 10 ? -len : -10);
