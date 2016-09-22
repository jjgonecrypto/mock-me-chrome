const el = document.createElement('script')
el.src = chrome.extension.getURL('lib/index.js')
document.body.appendChild(el)
