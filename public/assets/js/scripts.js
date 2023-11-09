$(document).ready(function(){
    console.log("ready!");

    $("#searchword").on("change", function(ev){
        var word = $(this).val();
        console.log("search word...",word);
        searchWord(word);
    });
});
var test = null
function searchWord(word){
    var endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en/"+encodeURIComponent(word);
    $.ajax({
        url: endpoint,
        method: 'GET',
        beforeSend: function(){},
        success:function(res){
            test = res;
            jsonRes = res;
            if(jsonRes.title !== undefined && 
                jsonRes.title == "No Definitions Found"){
                // show no results
                console.log("no results");
            }else{
                var blocks = "";
                for (let y = 0; y < jsonRes.length; y++) {
                    const definitionBlock = jsonRes[y];
                    console.log(definitionBlock);
                    var block = "";
                    var phonetics = "";
                    if(definitionBlock.phonetics.length > 0){
                        for (let i = 0; i < definitionBlock.phonetics.length; i++) {
                            const phonetic = definitionBlock.phonetics[i];
                            phonetics += "<div class='phonetic "+(phonetic.audio != ""?"pointer":"")+"'>"+phonetic.text+"</div>";
                        }
                    }
                    block += 
                    "<div class='word-cont' block='"+y+"'>"+
                        "<h2 class='word'>"+capitalizeFirstLetter(word)+"</h2>"+
                        "<div class='phonetics'>"+phonetics+"</div>"+
                    "</div>"+
                    "<div class='def-cont' block='"+y+"'>";

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
                                definition_list += "<p class='def-example'>"+def.example+"</p>";
                            }
                            definition_list +="</li>";
                        }
    
                        definition += 
                            "<div class='row'>"+
                                "<div class='col-8'>"+
                                    "<div class='card'>"+
                                        "<div class='card-body'>"+
                                            "<p class='def-type'>"+type+"</p>"+
                                            "<ul>"+definition_list+"</ul>"+
                                        "</div>"+
                                    "</div>"+
                                "</div>";
                        if(synonyms.length > 0 || antonyms.length > 0){
                            definition +=
                                "<div class='col-4'>";
                            if(synonyms.length > 0){
                                var synonyms_list = "";
                                for (let x = 0; x < synonyms.length; x++) {
                                    synonyms_list += "<li><p>"+synonyms[x]+"</p></li>";
                                }
                                definition +=                            
                                    "<div class='mb-3 sidecard card'>"+
                                        "<div class='card-body'>"+
                                            "<p class='def-type'>Synonyms</p>"+
                                            "<ul>"+synonyms_list+"</ul>"+
                                        "</div>"+
                                    "</div>";
                            }
                            if(antonyms.length > 0){
                                var antonyms_list = "";
                                for (let x = 0; x < antonyms.length; x++) {
                                    antonyms_list += "<li><p>"+antonyms[x]+"</p></li>";
                                }
                                definition +=                            
                                    "<div class='mb-3 sidecard card'>"+
                                        "<div class='card-body'>"+
                                            "<p class='def-type'>Antonyms</p>"+
                                            "<ul>"+antonyms_list+"</ul>"+
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
                    console.log("meanigs...",meanings);
                    block += meanings;
                    
                    block += 
                    "</div>";

                    blocks += block;
                }
                $("#meanings").html(blocks);
                $("#res").show();
            }
        },
        error: function(err){
            console.log("error on search");
        }
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}