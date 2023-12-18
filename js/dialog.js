let dialog = {
    ele: document.getElementById("dialog"),
    title: document.getElementById("dialogTitle"),
    content: document.getElementById("dialogContent"),
}

dialog.msgs = {
    联系方式: { content: "" },
}

dialog.showMsg = (name) => {
    let item = dialog.msgs[name]
    dialog.title.innerHTML = `<i class="${item.icon || "fa-solid fa-comment-dots"} fa-space"></i>${name}`
    dialog.content.innerHTML = item.content
    dialog.show()
}

dialog.QRs = {
    公众号: { code: "http://weixin.qq.com/r/sHX8_PfEcT8NKbObbyA0" },
}

dialog.phone = link => {
    open(link, "_blank", 'height=720px,width=360px,left=720px')
}

dialog.showQR = name => {
    let item = dialog.QRs[name]
    console.log(name, dialog.QRs, item)
    dialog.title.innerHTML = `<i class="${item.icon || "fa-solid fa-qrcode"} fa-space"></i>${name}`
    dialog.content.innerHTML = `<strong><a onclick="dialog.phone('${item.code}')">点击打开</a></strong>或者扫描下方二维码。`
    new QRCode(dialog.content, item.code)
    dialog.show()
}

dialog.show = () => {
    dialog.ele.classList.remove("hidden")
}

dialog.close = () => {
    dialog.ele.classList.add("hidden")
    dialog.title.innerHTML = ""
    dialog.content.innerHTML = ""
}
