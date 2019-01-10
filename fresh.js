(function () {
    console.log('程序已加载！');
    console.log('每2分钟刷新一次。');
    setInterval(function () {
        var elGetExp = document.getElementsByClassName('elGetExp');
        if (elGetExp && elGetExp[0]) {
            console.log('刷新!');
            elGetExp[0].click();
        } else {
            console.log('未到时间！');
        }
        // $('.ui-button.ui-button-small.elGetExp')
    }, 120000);
})();