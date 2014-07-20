BratoljubKlaic.home = function (params) {

    var word = ko.observable();

    var getWord = function(){

        $.ajax({
            type: "GET",
            url: "http://localhost:8080/word",
            crossDomain: true,
            success: function (data) {
                word(data);
            }
        });
    }
    getWord();

    var startSession = function () {

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/start",
            contentType: "application/json",
            data: JSON.stringify({
                user: 'tomo',
                word: word()
            }),
            crossDomain: true,
            dataType: "json"
        });
    }

    return {

        word: word,
        getWord: getWord,
        startSession: startSession
    };
};