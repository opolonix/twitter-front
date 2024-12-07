const tg = window.Telegram.WebApp;
const wv = window.Telegram.WebView;
const log = console.log;

tg.headerColor = "#1f0505";
tg.bottomBarColor = "#161616";

if (history.length != 0) {
    tg.BackButton.show();
    BackButton.onClick(() => {
        history.back();
    });
}