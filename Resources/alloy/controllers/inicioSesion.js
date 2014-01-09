function Controller() {
    function inicie() {
        var win = Alloy.createController("menu").getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inicioSesion";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.inicioSesion = Ti.UI.createWindow({
        backgroundColor: "9C213F",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "inicioSesion"
    });
    $.__views.inicioSesion && $.addTopLevelView($.__views.inicioSesion);
    $.__views.__alloyId22 = Ti.UI.createView({
        id: "__alloyId22"
    });
    $.__views.inicioSesion.add($.__views.__alloyId22);
    $.__views.uniclubImg = Ti.UI.createImageView({
        top: 110,
        width: "538px",
        height: "259px",
        image: "/uniclubIcon.png",
        id: "uniclubImg"
    });
    $.__views.__alloyId22.add($.__views.uniclubImg);
    inicie ? $.__views.uniclubImg.addEventListener("click", inicie) : __defers["$.__views.uniclubImg!click!inicie"] = true;
    $.__views.__alloyId23 = Ti.UI.createTextArea({
        backgroundColor: "white",
        width: "518px",
        height: "0.5cm",
        borderRadius: "3cm",
        top: "245",
        hintText: "Cédula",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTextArea({
        backgroundColor: "white",
        width: "518px",
        height: "0.5cm",
        borderRadius: "3cm",
        top: "277",
        hintText: "Contraseña",
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#white",
        font: "Helvetica",
        top: "325",
        text: "Olvidó Su Contraseña?",
        id: "__alloyId25"
    });
    $.__views.__alloyId22.add($.__views.__alloyId25);
    $.__views.inicioSesionImg = Ti.UI.createImageView({
        top: 365,
        width: "223px",
        height: "56px",
        image: "/inicioSesionIcon.png",
        id: "inicioSesionImg"
    });
    $.__views.__alloyId22.add($.__views.inicioSesionImg);
    inicie ? $.__views.inicioSesionImg.addEventListener("click", inicie) : __defers["$.__views.inicioSesionImg!click!inicie"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.uniclubImg!click!inicie"] && $.__views.uniclubImg.addEventListener("click", inicie);
    __defers["$.__views.inicioSesionImg!click!inicie"] && $.__views.inicioSesionImg.addEventListener("click", inicie);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;