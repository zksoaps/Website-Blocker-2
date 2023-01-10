chrome.runtime.onMessage.addListener(function(obj, sender, response) {
    if (location.href != "https://www.google.com") {
        const { block, url, whitelist, blacklist, t, id, x } = obj;
        console.log("block: " + block);
        console.log("url: " + url);
        console.log("whitelist: " + whitelist);
        console.log("blacklist: " + blacklist);
        console.log("t: " + t);
        console.log("id: " + id);
        console.log("x: " + x);

        if (block) {
            // location.replace("file://C:/Users/aarup/OneDrive/Desktop/WebDev/Extension/assets/Unproductive-Page-main/index.html");
            // location.replace("https://www.google.com");
            // console.log('program is running');
            // document.childNodes.forEach((node) => {
            //     document.removeChild(node);
            // });
            if (document.body.innerHTML != 
                    `<div class="message">
                        <h1 class="L">STOP!!!</h1>
                        <p class="M">You're not being productive.</p>
                        <p class="XL">>:(</p>
                    </div>`) {
                console.log("skdoaksdoksaod");
                document.head.innerHTML =  
                    `<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>You're not being productive >:(</title>
                    <style>
                    html, body {
                        display: flex;
                        width: 100%;
                        height: 100%;
                        background-color: red;
                        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .message{
                        width: fit-content;
                        height: fit-content;
                    }
                    
                    .L {
                        font-weight: 900;
                        color: #ffffff;
                        font-size: 72px;
                    }
                    
                    .M, .XL {
                        font-weight: 500;
                        color: #d1d1d1;
                        font-size: 62px;
                    }
                    
                    .L, .M, .XL {
                        margin: 0;
                        width: fit-content;
                        height: fit-content;
                    }
                    </style>`;
                document.body.innerHTML =  
                    `<div class="message">
                        <h1 class="L">STOP!!!</h1>
                        <p class="M">You're not being productive.</p>
                        <p class="XL">>:(</p>
                        <p>You really need to get off ${location.href}</p>
                    </div>`;
            }
        }
    }
});
// btn1 = document.querySelector("#btn-1");
// btn2 = document.querySelector("#btn-2");
// container = document.querySelector(".container");
// btn1.addEventListener("click", () => {
    
// })

