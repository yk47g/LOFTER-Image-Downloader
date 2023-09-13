// 创建上下文菜单项
chrome.contextMenus.create({
  id: "downloadLofterImage",
  title: "下载 LOFTER 原图",
  contexts: ["image"],
  documentUrlPatterns: ["*://www.lofter.com/*"],
});

// 使用onClicked事件来监听上下文菜单的点击
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "downloadLofterImage") {
    // 使用之前定义的id来检查点击的是否是我们的菜单项
    const url = info.srcUrl.split("?")[0];
    chrome.downloads.download({
      url: url,
      filename: url.split("/").pop(),
      saveAs: true,
    });
  }
});
