<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dictinary</title>
    <link rel="stylesheet" type="text/css" href="<?=base_url("assets/css/fonts.css")?>">
    <link rel="stylesheet" type="text/css" href="<?=base_url("assets/css/style.css")?>">
    <link rel="stylesheet" href="<?=base_url("assets/boostrap/css/bootstrap.min.css")?>">
    <script src="<?=base_url("assets/boostrap/js/bootstrap.min.js")?>"></script>
</head>
<body id="main">
    <div class="container">
        <div id="main-cont">
            <div id="search-cont">
                <form action="" id="search-form">
                    <input type="text" name="" id="searchword" class="form-control" placeholder="Search" id="">
                    <div class="w-100 line-bottom"></div>
                </form>
            </div>
            <div id="res-cont">
                <div id="no-res-cont" style="display: none;">
                    <div id="no-res">
                        <img id="search_icon" src="<?=base_url("assets/images/Search_alt.png")?>" alt="">
                        <p>Type in a word<br>to start searching</p>
                    </div>
                </div>
                <div id="res">
                    <div id="word-cont">
                        <h2 id="word">Dog</h2>
                        <div id="phonetics">
                            <div class="phonetic">/dɑɡ/</div>
                            <div class="phonetic pointer">/dɒɡ/</div>
                            <div class="phonetic pointer">/dɔɡ/</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="card">
                                <div class="card-body">
                                    <p class="def-type">Noun</p>
                                    <ul>
                                        <li>
                                            <p>A mammal, Canis familiaris or Canis lupus familiaris, that has been domesticated for thousands of years, of highly variable appearance due to human breeding.</p>
                                            <p class="def-example">“The dog barked all night long.”</p>
                                        </li>
                                        <li>
                                            <p>Any member of the Family Canidae, including domestic dogs, wolves, coyotes, jackals, foxes, and their relatives (extant and extinct); canid.</p>
                                        </li>
                                        <li>
                                            <p>A male dog, wolf or fox, as opposed to a bitch or vixen.</p>
                                        </li>
                                        <li>
                                            <p>A dull, unattractive girl or woman.</p>
                                            <p class="def-example">“She’s a real dog.”</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="sidecard card">
                                <div class="card-body">
                                    <p class="def-type">Synonym</p>
                                    <ul>
                                        <li>Canis canis</li>
                                        <li>Canis domesticus</li>
                                        <li>Canis familiaris</li>
                                        <li>Canine</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mt-3 sidecard card">
                                <div class="card-body">
                                    <p class="def-type">Antonyms</p>
                                    <ul>
                                        <li>...</li>
                                        <li>...</li>
                                        <li>...</li>
                                        <li>...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4 w-100 line-bottom-dark"></div>
                </div>
            </div>
        </div>
        
    </div>

    
</body>
</html>