window.BratoljubKlaic = window.BratoljubKlaic || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    BratoljubKlaic.app = new DevExpress.framework.html.HtmlApplication({
        namespace: BratoljubKlaic,
        layoutSet: DevExpress.framework.html.layoutSets[BratoljubKlaic.config.layoutSet],
        navigation: BratoljubKlaic.config.navigation
    });
    BratoljubKlaic.app.router.register(":view/:id", { view: "home", id: undefined });

    BratoljubKlaic.app.navigate();
});
