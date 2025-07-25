const cuteAlert = ({url: e, type: t, title: n, message: s, img: o, buttonText: a="OK", confirmText: c="OK", vibrate: r=[], playSound: l=null, cancelText: i="Cancel", closeStyle: d}) => new Promise((e => {
    const u = document.querySelector(".alert-wrapper");
    u && u.remove();
    const m = document.querySelector("body")
      , v = document.getElementsByTagName("script");
    let b = "";
    for (let e of v)
        e.src.includes("cute-alert.js") && (b = e.src.substring(0, e.src.lastIndexOf("/")));
    let g = `\n    <button class="alert-button ${t}-bg ${t}-btn">${a}</button>\n    `;
    if ("question" === t && (g = `\n      <div class="question-buttons">\n        <button class="confirm-button ${t}-bg ${t}-btn">${c}</button>\n        <button class="cancel-button error-bg error-btn">${i}</button>\n      </div>\n      `),
    r.length > 0 && navigator.vibrate(r),
    null !== l) {
        new Audio(l).play()
    }
    const y = `\n    <div class="alert-wrapper">\n      <div class="alert-frame">\n        ${o === undefined ? '<div class="alert-header ' + t + '-bg">' : '<div class="alert-header-base">'}\n          <span class="alert-close ${"circle" === d ? "alert-close-circle" : "alert-close-default"}">X</span>\n          ${o === undefined ? '<img class="alert-img" src="' + b + "/img/" + t + '.svg" />' : '<div class="custom-img-wrapper">' + o + "</div>"}\n        </div>\n        <div class="alert-body">\n          <span class="alert-title">${n}</span>\n          <span class="alert-message">${s}</span>\n          ${g}\n        </div>\n      </div>\n    </div>\n    `;
    m.insertAdjacentHTML("afterend", y);
    const p = document.querySelector(".alert-wrapper")
      , $ = document.querySelector(".alert-frame")
      , f = document.querySelector(".alert-close");
    if ("question" === t) {
        const t = document.querySelector(".confirm-button")
          , n = document.querySelector(".cancel-button");
        t.addEventListener("click", ( () => {
            p.remove(),
            e("confirm")
        }
        )),
        n.addEventListener("click", ( () => {
            p.remove(),
            e()
        }
        ))
    } else {
        document.querySelector(".alert-button").addEventListener("click", ( () => {
            p.remove(),
            e("ok")
        }
        ))
    }
    f.addEventListener("click", ( () => {
        p.remove(),
        e("close")
    }
    )),
    $.addEventListener("click", (e => {
        e.stopPropagation()
    }
    ))
}
))
  , cuteToast = ({type: e, title: t, message: n, timer: s=5e3, vibrate: o=[], playSound: a=null}) => new Promise((c => {
    const r = document.querySelector("body")
      , l = document.getElementsByTagName("script");
    let i = "";
    for (let e of l)
        e.src.includes("cute-alert.js") && (i = e.src.substring(0, e.src.lastIndexOf("/")));
    let d = document.querySelector(".toast-container");
    d || (r.insertAdjacentHTML("afterend", '<div class="toast-container"></div>'),
    d = document.querySelector(".toast-container"));
    const u = id()
      , m = `\n    <div class="toast-content ${e}-bg" id="${u}-toast-content">\n      <div>\n        <div class="toast-frame">\n          <div class="toast-body">\n            <img class="toast-body-img" src="${i}/img/${e}.svg" />'\n            <div class="toast-body-content">\n              <span class="toast-title">${t}</span>\n              <span class="toast-message">${n}</span>\n            </div>\n            <div class="toast-close" id="${u}-toast-close">X</div>\n          </div>\n        </div>\n        <div class="toast-timer ${e}-timer"  style="animation: timer${s}ms linear;>\n      </div>\n    </div>\n    `
      , v = document.querySelectorAll(".toast-content");
    v.length ? v[0].insertAdjacentHTML("beforebegin", m) : d.innerHTML = m;
    const b = document.getElementById(`${u}-toast-content`);
    if (o.length > 0 && navigator.vibrate(o),
    null !== a) {
        new Audio(a).play()
    }
    setTimeout(( () => {
        b.remove(),
        c()
    }
    ), s);
    document.getElementById(`${u}-toast-close`).addEventListener("click", ( () => {
        b.remove(),
        c()
    }
    ))
}
))
  , id = () => "_" + Math.random().toString(36).substr(2, 9);
