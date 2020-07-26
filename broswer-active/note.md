```
{
  "manifest_version": 2,
  "name": "demo",
  "version": "1.0.0",
  "description": "插件开发学习",
  "permissions": ["storage"],
  "background": {
    "scripts": ["js/background.js"],
    "persistent": false
  },
  // 浏览器右上角图标对应的脚本，有 browser_action，page_action 和 app 三者冲突，只能有一个
  // 默认菜单
  "page_action": {
    "default_popup": "popup.html",
    "default_icon": {
      "64": "img/ice.png",
      "32": "img/ice.ico"
    }
  },
  // 自定义菜单
  "browser_action": {
    "default_popup": "background.html",
    "default_icon": {
      "64": "img/ice.png",
      "32": "img/ice.ico"
    }
  }
  "icons": {
    "64": "img/ice.png",
    "32": "img/ice.ico"
  }
}
```