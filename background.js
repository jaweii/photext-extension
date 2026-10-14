const BASE = "https://photext.ai";
const Q = "?utm_source=extension&utm_medium=context_menu";
const ITEMS = [
  ["edit", "Edit text with PhoText", "/"],
  ["remove", "Remove text with PhoText", "/image_remove_text/"],
  ["translate", "Translate image text with PhoText", "/ImageTranslator/"],
  ["font", "Find font with PhoText", "/FontFinder/"]
];
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    for (const [id, title] of ITEMS) chrome.contextMenus.create({ id, title, contexts: ["image"] });
  });
});
chrome.contextMenus.onClicked.addListener((info) => {
  const it = ITEMS.find((i) => i[0] === info.menuItemId);
  if (it) chrome.tabs.create({ url: BASE + it[2] + Q });
});
