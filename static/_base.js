'use strict';

let search_pagination = document.getElementById('searchResults');
search_pagination.style.visibility = 'hidden';

let breaker = document.getElementById('breaker');
breaker.style.visibility = 'hidden';


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

                if(counter < 5 && clickCount === 1){
                    create_cardElements();

                    newCard.setAttribute("style", "width:20px; float:left; text-align:justify");
                    cardTitle.setAttribute("style", "font-weight:bold");
                    cardTitle.innerText = res_dataset[re];
                    cardText.innerText = res_dataset[re];
                }

                if (counter > 5){
                    console.log(counter, '=', res_dataset[re]);
                }
            }

            breaker.style.visibility = "visible";
            search_pagination.style.visibility = "visible";

            doc.disabled = true;
            document.getElementById("previous").className = "page-item disabled";
            document.getElementById("page1").className = "page-item disabled";
        });
   }

    function create_cardElements() {
        // Global variables exposed with window.[...]
       let new_card = document.createElement("div");
       new_card.className = "card card-header border-success mr-2";
       new_card.id = "new_card";
       parent_div.appendChild(new_card);
       window.newCard = new_card;


       let newcard_innerdiv = document.createElement("div");
       newcard_innerdiv.className = "card-body text-primary";
       new_card.appendChild(newcard_innerdiv);
       window.newcardInnerDiv = newcard_innerdiv;


       let card_title = document.createElement("h6");
       card_title.className ="card-title";
       newcard_innerdiv.appendChild(card_title);
       window.cardTitle = card_title;


       let card_text = document.createElement("p");
       card_text.className ="card-text text-success";
       newcard_innerdiv.appendChild(card_text);
       window.cardText = card_text;

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

