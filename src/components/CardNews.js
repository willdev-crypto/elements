class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + this.getAttribute("autor");
        
        const linkTitle = document.createElement("h1");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = "assets/ragnar-2_cke.webp";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }
    styles() { 
        const style = document.createElement("style");
        style.textContent=`
        .card {
            width: 100%;
            border: 1px solid rgb(255, 141, 47);
            display: flex;
            flex-direction: row;
        }
       
       
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: left;
            padding-left: 10px;
        }
       
        .card__right {
            display: flex;
            justify-content: right;
        }
       
        .card__left,
        .card__right {
            border: 1px solid blue;
        }
         .card__left > h1 {
           margin-top: 15px;
           font-size: 55px;
       
         }
         .card__left > p{
           color: lightslategray;
         }
        `;
        return style;
    }
}
customElements.define("card-news", CardNews);