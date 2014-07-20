BratoljubKlaic.sessions = function (params) {

    var sessions = ko.observableArray([]);

    var fetchSessions = function () {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/sessions",
                crossDomain: true,
                success: function (data) {
                    sessions(data);
                }
            });
    }

    fetchSessions();

    return {
        sessions: sessions
    };
};