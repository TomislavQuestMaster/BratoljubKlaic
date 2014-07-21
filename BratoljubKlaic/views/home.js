BratoljubKlaic.home = function (params) {

    var word = ko.observable();
    var wordId = null;

    var getWord = function(){

        $.ajax({
            type: "GET",
            url: "http://localhost:8080/word",
            crossDomain: true,
            success: function (data) {
                word(data.value);
                wordId = data.id;
            }
        });
    }
    getWord();

    var startSession = function () {

        if (wordId == null) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/start",
            contentType: "application/json",
            data: JSON.stringify({
                scholarId: 1,
                wordId: wordId
            }),
            success: function (data) {
                BratoljubKlaic.app.navigate("define/" + data);
            },
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