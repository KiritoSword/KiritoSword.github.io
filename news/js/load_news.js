function setTitle(title) {
    var meta = document.getElementsByTagName("head")[0];
    var obj_meta1 = document.createElement("title");
    var text1 = document.createTextNode(title);
    obj_meta1.appendChild(text1);
    meta.appendChild(obj_meta1);
}

function addMetaTag(key1, value1, key2, value2) {
    var meta = document.getElementsByTagName("head")[0];
    var obj_meta1 = document.createElement("meta");
    obj_meta1.setAttribute(key1, value1);
    obj_meta1.setAttribute(key2, value2);
    meta.appendChild(obj_meta1);
}

var queryString = window.location.search;
if (queryString) {
    var urlParams = new URLSearchParams(window.location.search);
    var page = Number(urlParams.get("pages")) - 1;
        $.getJSON("../news.json", function(data) {
                var json = data[page]
                var title = document.getElementById("content-title");

                var obj_h1 = document.createElement("h1");
                var text1 = document.createTextNode(json.title);
                obj_h1.appendChild(text1);
                title.appendChild(obj_h1);

                var obj_h2 = document.createElement("h2");
                var text2 = document.createTextNode(json.date);
                obj_h2.appendChild(text2);
                title.appendChild(obj_h2);

                var content = document.getElementById("content");

                var obj_img = document.createElement("img");
                obj_img.src = "../" + json.image;
                content.appendChild(obj_img);

                var obj_p = document.createElement("p");
                var text3 = document.createTextNode(json.desc);
                obj_p.appendChild(text3);
                content.appendChild(obj_p);

                var div = document.createElement("div");
                div.classList.add("desc");
                div.id = "desc";
                var obj_a2 = document.createElement("a");
                obj_a2.target = "blank";
                obj_a2.href = "https://twitter.com/share?url=" + location.href + "&text=" + json.title + "&via=KiritoSwordGG"
                var img = document.createElement("img");
                img.src = "../../assets/twitter.png"
                obj_a2.appendChild(img);
                div.appendChild(obj_a2);
                content.appendChild(div);

                var obj_404 = document.getElementById("404");
                obj_404.remove();
            });
}