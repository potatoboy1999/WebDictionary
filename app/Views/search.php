<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dictinary</title>
    <link rel="stylesheet" type="text/css" href="<?=base_url("assets/css/fonts.css")?>">
    <link rel="stylesheet" type="text/css" href="<?=base_url("assets/css/style.css")?>">
    <link rel="stylesheet" type="text/css" href="<?=base_url("assets/css/loading-spinner.css")?>">
    <link rel="stylesheet" href="<?=base_url("assets/boostrap/css/bootstrap.min.css")?>">
    <script src="<?=base_url("assets/jquery/jquery-3.7.1.min.js")?>"></script>
    <script src="<?=base_url("assets/boostrap/js/bootstrap.min.js")?>"></script>
    <script src="https://kit.fontawesome.com/7391f92453.js" crossorigin="anonymous"></script>
</head>
<body id="main">
    <audio id="phonetic-audio" src=""></audio>
    <div class="container">
        <div id="main-cont">
            <div id="search-cont">
                <form action="" id="search-form" autocomplete="off">
                    <input type="text" name="" id="searchword" class="form-control" placeholder="Search" id="">
                    <div class="w-100 line-bottom"></div>
                </form>
            </div>
            <div id="res-cont">
                <div id="loading" class="dic-content" style="display: none;">
                    <div>
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>
                <div id="no-res-cont" class="dic-content">
                    <div id="blank" class="no-res">
                        <img id="search_icon" src="<?=base_url("assets/images/Search_alt.png")?>" alt="">
                        <p>Type in a word<br>to start searching</p>
                    </div>
                    <div id="error" class="no-res error-res" style="display:none">
                        <p>
                            <i class="fa-solid fa-triangle-exclamation error-icon"></i>
                            <br>
                            <span id="error_msg">Error on search...</span>
                        </p>
                    </div>
                </div>
                <div id="res" class="dic-content" style="display: none;">
                    <div id="meanings">
                        <div class="word-cont" block="0">
                            <h2 class="word">...</h2>
                            <div class="phonetics">
                            </div>
                        </div>
                        <div class="def-cont" block="0">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="<?=base_url("assets/js/scripts.js")?>"></script>
</body>
</html>