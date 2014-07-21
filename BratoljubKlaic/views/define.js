BratoljubKlaic.define = function (params) {

    var meaning = ko.observable("");
    var defineMeaning = function () {

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/define",
            contentType: "application/json",
            data: JSON.stringify({
                definitionId: params.id,
                text: meaning()
            }),
            success: function (data) {
                BratoljubKlaic.app.navigate("definitions/" + data);
            },
            crossDomain: true,
            dataType: "text"
        });
    };


    return {
        meaning: meaning,
        defineMeaning: defineMeaning
    };
};