BratoljubKlaic.definitions = function (params) {

    var definitions = ko.observableArray([]);

    var fetchDefinitions = function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/definitions/"+params.id,
            crossDomain: true,
            success: function (data) {
                definitions(data);
            }
        });
    }

    fetchDefinitions();

    var rateDefinition = function () {
    }

    return {
        definitions: definitions,
        rateDefinition: rateDefinition
    };
};