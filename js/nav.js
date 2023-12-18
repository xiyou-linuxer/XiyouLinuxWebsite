let nav = {
  name: "西邮 Linux 兴趣小组",
  description: "",
  list: [],
  ele: document.getElementsByClassName("navlist"),
}

nav.list[0] = [{
  name: "项目", icon: "fa-solid fa-flask", item: [
    { text: "小组群博", desc: "博客文章精选", icon: "fa-solid fa-blog", link: "https://blog.xiyoulinux.com/" },
    { text: "Plan", desc: "培养计划", icon: "fa-solid fa-list-check", link: "https://github.com/xiyou-linuxer/Plan" },
    { text: "Favorites", desc: "计算机科学收藏夹", icon: "fa-solid fa-bookmark", link: "https://github.com/xiyou-linuxer/Favorites" },

  ]
}, {
  name: "社交平台", icon: "fa-solid fa-circle-nodes", item: [
    { text: "Github", icon: "fa-brands fa-github", link: "https://blog.xiyoulinux.com/" },
    { text: "网上论坛", icon: "fa-brands fa-google", link: "https://groups.google.com/g/xiyoulinux" },
    { text: "公众号", icon: "fa-brands fa-weixin", js: "dialog.showQR(this.textContent)" },
    { text: "哔哩哔哩", icon: "fa-brands fa-bilibili", link: "https://space.bilibili.com/432976868/" },
    { text: "微博", icon: "fa-brands fa-weibo", link: "https://www.weibo.com/n/西邮Linux兴趣小组" },
  ]
},]

nav.list[1] = [{
  name: "友情链接", icon: "fa-solid fa-link", item: [
    // { text: "移动应用开发实验室", link: "https://mobile.xupt.edu.cn/" },
    // { text: "移动应用开发实验室", link: "http://http://222.24.63.109/" },
    // { text: "移动应用开发实验室", link: "https://xiyoumobile.com/" },
    { text: "西柚导航", desc: "第三方西邮网址导航", icon: "fa-solid fa-compass", link: "https://cooo.site/" },
  ]
},]

nav.list.forEach((list, i) => {
  nav.ele[i].innerHTML = list.map(group => `
    <div class="card">
    <div class="between">
    <h4><i class="${group.icon} fa-space"></i>${group.name}</h4>
    ${group.desc ? `<p class="dim">${group.desc}</p>` : ``}
    </div>
    <div class="list">
    ${group.item.map(item => `
      <a data-sub="${item.desc || ""}"
      ${item.js ? `onclick="${item.js}"` : `href="${item.link}"`}
    >${item.icon ? `<i class="${item.icon} fa-space"></i>` : ``}${item.text}</a>
    `).join(`\n`)}
    </div>
    </div>`).join(`\n`)
})
