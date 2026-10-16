// Lower priority number comes first. Does not change the original array.
export function sortByPriority(list) {
  return [...list].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
}

// Items with empty required fields (e.g. role: '') are still being filled in.
// In development (npm run dev) they show with "To be added".
// In production (the live site) they are hidden.
export function readyItems(list, requiredFields) {
  if (import.meta.env.DEV) return list;
  return list.filter((item) => requiredFields.every((f) => item[f]));
}