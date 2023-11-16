var curr_block = 0;
$(document).ready(function(){

    $("#searchword").on("change", function(ev){
        var word = $(this).val();
        if(word.trim() != ""){
            searchWord(word);
        }else{
            switchContent("no-res-cont");
            $("#blank").hide();
            $("#error").show();
            $("#error_msg").html("Please enter a valid word!");
        }
    });

    $("#search-form").on("submit", function(ev){
        ev.preventDefault();
    });

    $(document).on("click",".phonetic", function(ev){
        var audiosrc = $(this).attr("src");
        if(audiosrc != ""){
            $("#phonetic-audio").attr("src", audiosrc);
            document.getElementById("phonetic-audio").play();
        }
    });
});
var test = null
function searchWord(word){
    var endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en/"+encodeURIComponent(word);
    $.ajax({
        url: endpoint,
        method: 'GET',
        beforeSend: function(){
            //show loading
            switchContent("loading");
            curr_block = 0;
        },
        success:function(res){
            test = res;
            jsonRes = res;
            if(jsonRes.title !== undefined && 
                jsonRes.title == "No Definitions Found"){
                // show no results
                console.log("no results");
            }else{
                var blocks = "";
                var header = false;
                for (let y = 0; y < jsonRes.length; y++) {
                    const definitionBlock = jsonRes[y];
                    var block = "";
                    var phonetics = "";
                    var phonetics_list = [];
                    if(definitionBlock.phonetics.length > 0){
                        for (let i = 0; i < definitionBlock.phonetics.length; i++) {
                            const phonetic = definitionBlock.phonetics[i];
                            if(phonetic.text !== undefined && 
                                phonetics_list.find(text => text == phonetic.text) === undefined
                            ){
                                phonetics_list.push(phonetic.text);
                                phonetics += "<div class='phonetic "+(phonetic.audio != ""?"pointer":"")+"' src='"+phonetic.audio+"'>"+
                                    phonetic.text+
                                    (phonetic.audio != ""?` <i class="fa-solid fa-volume-high"></i>`:"")+
                                "</div>";
                            }
                        }
                    }
                    // avoid multiple headers
                    if(!header){
                        block += 
                        "<div class='word-cont' block='"+y+"'>"+
                            "<h2 class='word'>"+capitalizeFirstLetter(word)+"</h2>"+
                            "<div class='phonetics'>"+phonetics+"</div>"+
                        "</div>";
                        header = true;
                    }
                    if(y>0){
                        block += "<div class='my-4 w-100 line-bottom-dark sep-block-"+y+"'></div>";
                    }
                    block += 
                    "<div class='def-cont' block='"+y+"' style='"+(y>0?"display:none;":"")+"'>";

                    var meanings = "";
                    for (let i = 0; i < definitionBlock.meanings.length; i++) {
                        const meaning = definitionBlock.meanings[i];
                        var definition = "";
                        var type = meaning.partOfSpeech;
                        var definitions = meaning.definitions;
                        var synonyms = meaning.synonyms;
                        var antonyms = meaning.antonyms;
    
                        if(i>0){
                            meanings += "<div class='my-4 w-100 line-bottom-dark'></div>";
                        }
    
                        var definition_list = "";
                        // list of definitions
                        for (let x = 0; x < definitions.length; x++) {
                            const def = definitions[x];
                            definition_list +=
                            "<li>"+
                                "<p>"+def.definition+"</p>";
                            if(def.example !== undefined &&
                                def.example != ""){
                                definition_list += "<p class='def-example'>\""+def.example+"\"</p>";
                            }
                            definition_list +="</li>";
                        }
    
                        definition += 
                            "<div class='row'>"+
                                "<div class='col-lg-8'>"+
                                    "<div class='my-3 card'>"+
                                        "<div class='card-body'>"+
                                            "<p class='def-type'>"+capitalizeFirstLetter(type)+"</p>"+
                                            "<ol>"+definition_list+"</ol>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                        if(synonyms.length > 0 || antonyms.length > 0){
                            definition +=
                                "<div class='col-lg-4'>";
                            if(synonyms.length > 0){
                                var synonyms_list = "";
                                for (let x = 0; x < synonyms.length; x++) {
                                    synonyms_list += "<li><p>"+capitalizeFirstLetter(synonyms[x])+"</p></li>";
                                }
                                definition +=                            
                                    "<div class='my-3 sidecard card'>"+
                                        "<div class='card-body'>"+
                                            "<p class='def-type'>Synonyms</p>"+
                                            "<ol>"+synonyms_list+"</ol>"+
                                        "</div>"+
                                    "</div>";
                            }
                            if(antonyms.length > 0){
                                var antonyms_list = "";
                                for (let x = 0; x < antonyms.length; x++) {
                                    antonyms_list += "<li><p>"+capitalizeFirstLetter(antonyms[x])+"</p></li>";
                                }
                                definition +=                            
                                    "<div class='my-3 sidecard card'>"+
                                        "<div class='card-body'>"+
                                            "<p class='def-type'>Antonyms</p>"+
                                            "<ol>"+antonyms_list+"</ol>"+
                                        "</div>"+
                                    "</div>";
                            }
                            definition +=
                                "</div>";
                        }
                        
    
                        definition += 
                            "</div>"; // close row
                        
                        meanings += definition;
                        
                    }
                    block += meanings;
                    
                    block += 
                    "</div>";

                    blocks += block;
                }
                $("#meanings").html(blocks);
                switchContent("res");
            }
        },
        error: function(errorRes, textStatus, errorThrown){
            var jsonRes = errorRes.responseJSON;
            var text = "Error on search...";
            if(jsonRes !== undefined &&
                jsonRes.title !== undefined && 
                jsonRes.title == "No Definitions Found"){
                text = "No Definitions Found";
            }

            switchContent("no-res-cont");
            $("#blank").hide();
            $("#error").show();
            $("#error_msg").html(text);
        }
    });
}

function switchContent(content){
    $(".dic-content").hide();
    $(`#${content}`).show();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}