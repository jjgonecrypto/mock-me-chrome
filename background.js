// testing state
chrome.storage.sync.get('___test123', response => {
    console.log('returned ', response)

    chrome.storage.sync.set({ '___test123': 123 })
})


window.indexedDB.open('test')
