function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "precioScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.inicioScreen = Ti.UI.createView({
        backgroundColor: "#bebcbc",
        height: "100%",
        width: "100%",
        id: "inicioScreen"
    });
    $.__views.inicioScreen && $.addTopLevelView($.__views.inicioScreen);
    $.__views.main = Ti.UI.createView({
        width: Ti.UI.FILL,
        backgroundColor: "#9C213F",
        height: "130px",
        top: "0",
        id: "main"
    });
    $.__views.inicioScreen.add($.__views.main);
    $.__views.menuBtn = Ti.UI.createImageView({
        left: 7,
        top: 25,
        width: "65px",
        height: "65px",
        image: "/menuIcon.png",
        id: "menuBtn"
    });
    $.__views.main.add($.__views.menuBtn);
    $.__views.logoImg = Ti.UI.createImageView({
        top: 17,
        right: 130,
        image: "/unicasaIcon.png",
        id: "logoImg"
    });
    $.__views.main.add($.__views.logoImg);
    $.__views.carritoBtn = Ti.UI.createImageView({
        top: 25,
        right: 7,
        width: "65px",
        height: "65px",
        image: "/carritoIcon.png",
        id: "carritoBtn"
    });
    $.__views.main.add($.__views.carritoBtn);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#e4e4e4",
        showCancel: "false",
        width: Ti.UI.FILL,
        height: "43",
        top: "65",
        hintText: "Palabra Clave"
    });
    $.__views.inicioScreen.add($.__views.search);
    $.__views.palabraClave = Ti.UI.createImageView({
        image: "/palabraClaveBtn.png",
        width: "510px",
        height: "104px",
        id: "palabraClave"
    });
    $.__views.inicioScreen.add($.__views.palabraClave);
    $.__views.codigoBarra = Ti.UI.createImageView({
        image: "/codigoBarraBtn.png",
        width: "510px",
        height: "104px",
        top: "280",
        id: "codigoBarra"
    });
    $.__views.inicioScreen.add($.__views.codigoBarra);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    var scanditsdk = require("com.mirasense.scanditsdk");
    ("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && (Titanium.UI.iPhone.statusBarHidden = true);
    var picker;
    var window = Titanium.UI.createWindow({
        title: "Scandit SDK",
        navBarHidden: true
    });
    var openScanner = function() {
        picker = scanditsdk.createView({
            width: "100%",
            height: "100%"
        });
        picker.init("I3t/Go2qEeOCFqhCZaL59sFCdmahtkwacKUSdaeYSrU", 0);
        picker.showSearchBar(true);
        picker.showToolBar(true);
        picker.setSuccessCallback(function(e) {
            alert("success (" + e.symbology + "): " + e.barcode);
        });
        picker.setCancelCallback(function() {
            closeScanner();
        });
        window.add(picker);
        window.addEventListener("open", function() {
            "iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname ? picker.setOrientation(Ti.UI.orientation) : picker.setOrientation(window.orientation);
            picker.setSize(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight);
            picker.startScanning();
        });
        window.open();
    };
    var closeScanner = function() {
        if (null != picker) {
            picker.stopScanning();
            window.remove(picker);
        }
        window.close();
    };
    Ti.Gesture.addEventListener("orientationchange", function(e) {
        window.orientationModes = [ Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT, Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT ];
        if (null != picker) {
            picker.setOrientation(e.orientation);
            picker.setSize(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight);
        }
    });
    var button = Titanium.UI.createButton({
        width: 200,
        height: 80,
        title: "start scanner"
    });
    button.addEventListener("click", function() {
        openScanner();
    });
    var rootWindow = Titanium.UI.createWindow({
        backgroundColor: "#000"
    });
    rootWindow.add(button);
    rootWindow.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;