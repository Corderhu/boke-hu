// 初始化主题颜色
let theme = window.localStorage.getItem('data-theme')
if (theme) {
    theme = JSON.parse(theme)
    // console.log()
    window.document.documentElement.setAttribute("data-theme", theme.theme);
    if (theme.theme == 'byMyself') {
        const dom = document.documentElement;
        dom.style.setProperty('--bgc', theme.value.bgc);
        dom.style.setProperty('--txc', theme.value.color);
        dom.style.setProperty('--txa', theme.value.a);
    }
} else {
    window.document.documentElement.setAttribute("data-theme", 'light');
}
