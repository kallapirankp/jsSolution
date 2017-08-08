
var displayPage = (function () {

        var Pages = [];

        var addPage = (header, footer, body, adv) => {
            let page = {
                header: header,
                footer: footer,
                body: body,
                adv: adv
            }
            Pages.push(page);
        }

        var renderPage = (pageObj) => {

            document.body.innerHTML = "";

            placeNav();

            if(pageObj.header !== undefined){
                let head = document.createElement("header");
                let node = document.createTextNode(pageObj.header);
                head.appendChild(node);
                var element = document.getElementsByTagName("BODY")[0];
                element.appendChild(head);
            }

            if(pageObj.body !== undefined){
                let bodyElement = document.createElement("div");
                let node = document.createTextNode(pageObj.bodyElement);
                bodyElement.appendChild(node);
                var element = document.getElementsByTagName("BODY")[0];
                element.appendChild(bodyElement);
            }

            if(pageObj.adv !== undefined){
                let adv = document.createElement("div");
                let node = document.createTextNode(pageObj.adv);
                adv.appendChild(node);
                var element = document.getElementsByTagName("BODY")[0];
                element.appendChild(adv);
            }

            if(pageObj.footer !== undefined){
                let footer = document.createElement("footer");
                let node = document.createTextNode(pageObj.footer);
                footer.appendChild(node);
                var element = document.getElementsByTagName("BODY")[0];
                element.appendChild(footer);
            }
           
        }

        var placeNav = () => {
            var nav = document.createElement("NAV"),
                ul = document.createElement("UL");

            document.body.appendChild(nav);


            Pages.forEach((item, index) => {
                var li = document.createElement("LI"),
                    a = document.createElement("A");

                a.setAttribute('href', '#/page/' + index);
                var text = document.createTextNode("render" +index);
                a.appendChild(text);
                li.appendChild(a);
                nav.appendChild(li);
            });
        }


        return {
            addPage,
            renderPage,
            placeNav,
            Pages
        }

})();