'use strict';

window.onload= function () {
    console.log(one);
    let result_div = document.getElementById("result_div");
    let parent_div = document.getElementById('all_dataset');

    show_all();

    function show_all() {
        let doc = document.getElementById('btn_all_dataset');
        let res_dataset = res;
        let clickCount = 0;
        // let all_data = {{ all_res.result.results|tojson|safe }};

        doc.addEventListener('click', function () {
            clickCount ++;
            for (let re = 0; re < res_dataset.length; re++ ){
                let counter = 0;
                counter = re;

                if(counter <= 5 && clickCount === 1){
                    create_cardElements();
                    newCard.setAttribute("style", "width:20px; float:left;");
                    cardImg.src = "logo_bmwi.jpg";
                    cardTitle.setAttribute("style", "font-weight:bold");
                    cardTitle.innerText = res_dataset[re];
                }

                if (counter > 5){
                    console.log(counter, '=', res_dataset[re])
                }
            }

            for(let i = 0; i < res_dataset.length / 1; i++){
                create_paginationElements();
                new_pageNavUL.className = "pagination justify-content-center";
                new_pageNavLI.className = "page-item";
                new_pageNavAnchor.className = "page-link";
                new_pageNavAnchor.href = "https://google.com";
                new_pageNavAnchor.innerText = i.toString();

            }

            doc.disabled = true;
        });
   }

   function create_cardElements() {
        // Global variables exposed with window.[...]
       let new_card = document.createElement("div");
       new_card.className = "card border-success mr-2";
       new_card.id = "new_card";
       parent_div.appendChild(new_card);
       window.newCard = new_card;

       let card_img = document.createElement("img");
       card_img.className = "card-img-top";
       new_card.appendChild(card_img);
       window.cardImg = card_img;

       let newcard_innerdiv = document.createElement("div");
       newcard_innerdiv.className = "card-body";
       new_card.appendChild(newcard_innerdiv);
       window.newcardInnerDiv = newcard_innerdiv;


       let card_title = document.createElement("h6");
       card_title.className ="card-title";
       newcard_innerdiv.appendChild(card_title);
       window.cardTitle = card_title;

       let card_text = document.createElement("p");
       card_text.className ="card-text";
       newcard_innerdiv.appendChild(card_text);
       window.cardText = card_text;
    }

   function create_paginationElements() {

        let breaker = document.createElement("br");
        let new_pageNav = document.createElement("nav");
        let new_pageNavUL = document.createElement("ul");
        let new_pageNavLI = document.createElement("li");
        let new_pageNavAnchor = document.createElement("a");

        result_div.appendChild(new_pageNav);
        new_pageNavUL.appendChild(new_pageNavLI);
        new_pageNavLI.appendChild(new_pageNavAnchor);

        $("new_pageNav").insertAfter("#parent_div");
        //result_div.insertBefore(parent_div, new_pageNav);


       window.breaker = breaker;
       window.new_pageNav = new_pageNav;
       window.new_pageNavUL = new_pageNavUL;
       window.new_pageNavLI = new_pageNavLI;
       window.new_pageNavAnchor = new_pageNavAnchor
   }
};

                /*{# Show everything from the Instance, tweeked to show only a minimum #}
               {# btn_all_data.addEventListener('click', function () {
                    for (let i = 0; i < all_data.length; i++ ){
                        if(all_data[i]['author'] !== null){
                            if(all_data[i]['organization']['description'] !== null)
                                all_data_p.innerHTML += "<li><a href='all_data[i].author'>"+ all_data[i].author + "</a>"+"<span>"+ all_data[i].organization.description +"</span></li>";
                            console.log(all_data[i]['author']);
                        } else{
                            console.log("No data available")
                        }
                    }*/

