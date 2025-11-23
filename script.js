// script.js

// 1. 获取按钮元素
const toggleBtn = document.getElementById('theme-toggle');
const body = document.documentElement; // <html> 标签

// 2. 检查本地是否存过用户的选择
const savedTheme = localStorage.getItem('theme');

// 3. 核心逻辑：设置主题
function setTheme(theme) {
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        toggleBtn.innerHTML = "🌙 晚安"; // 按钮文字变月亮
        localStorage.setItem('theme', 'dark'); // 记住选择
    } else {
        body.removeAttribute('data-theme');
        toggleBtn.innerHTML = "☀️ 早安"; // 按钮文字变太阳
        localStorage.setItem('theme', 'light');
    }
}

// 4. 初始化：判断该用什么模式
if (savedTheme) {
    // 如果用户以前手动选过，就听用户的
    setTheme(savedTheme);
} else {
    // 如果用户没选过，就根据时间自动判断
    const hour = new Date().getHours();
    // 晚上 7 点 (19:00) 到 早上 6 点之间，自动变黑
    if (hour >= 19 || hour < 6) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// 5. 监听点击事件：自由切换
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        // 如果当前有 dark 属性，就切回 light，反之亦然
        if (body.hasAttribute('data-theme')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
}
