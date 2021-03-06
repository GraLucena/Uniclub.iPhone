function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "miCuentaScreen";
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
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    var __alloyId46 = [];
    __alloyId46.push($.__views.list);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#e4e4e4",
        showCancel: "false",
        width: Ti.UI.FILL,
        height: "43",
        top: "0",
        hintText: "Palabra Clave"
    });
    $.__views.list.add($.__views.search);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.categoria = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "100px",
        backgroundColor: "#f6923a",
        id: "categoria"
    });
    $.__views.list.add($.__views.categoria);
    $.__views.label = Ti.UI.createLabel({
        left: "40px",
        color: "white",
        font: {
            font: "Helvetica",
            fontSize: "14pt"
        },
        text: "Mi Cuenta",
        id: "label"
    });
    $.__views.categoria.add($.__views.label);
    $.__views.misPuntos = Ti.UI.createImageView({
        width: "169px",
        height: "80px",
        right: "140px",
        image: "/misPuntosImg.png",
        id: "misPuntos"
    });
    $.__views.categoria.add($.__views.misPuntos);
    $.__views.labelPuntos = Ti.UI.createLabel({
        right: "35px",
        color: "ee5041",
        top: "19",
        font: {
            font: "Helvetica",
            fontSize: "16pt"
        },
        text: "15.000",
        id: "labelPuntos"
    });
    $.__views.categoria.add($.__views.labelPuntos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelMisDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "999999",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Mis Datos",
        id: "labelMisDatos"
    });
    $.__views.list.add($.__views.labelMisDatos);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Código Tarjeta:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        id: "__alloyId47"
    });
    $.__views.list.add($.__views.__alloyId47);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Nombre y Apellido:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        id: "__alloyId48"
    });
    $.__views.list.add($.__views.__alloyId48);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Estado de Cliente:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        id: "__alloyId49"
    });
    $.__views.list.add($.__views.__alloyId49);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Tipo de Cliente:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        id: "__alloyId50"
    });
    $.__views.list.add($.__views.__alloyId50);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Cédula de Identidad:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        id: "__alloyId51"
    });
    $.__views.list.add($.__views.__alloyId51);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Fecha de Nacimiento:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        id: "__alloyId52"
    });
    $.__views.list.add($.__views.__alloyId52);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Lugar de Nacimiento:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        id: "__alloyId53"
    });
    $.__views.list.add($.__views.__alloyId53);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Sexo:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        id: "__alloyId54"
    });
    $.__views.list.add($.__views.__alloyId54);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Nacionalidad:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        id: "__alloyId55"
    });
    $.__views.list.add($.__views.__alloyId55);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Estado Civil:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        id: "__alloyId56"
    });
    $.__views.list.add($.__views.__alloyId56);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Grado de Instrucción:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        id: "__alloyId57"
    });
    $.__views.list.add($.__views.__alloyId57);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Profesión:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        id: "__alloyId58"
    });
    $.__views.list.add($.__views.__alloyId58);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        selectionStyle: "NONE",
        separatorColor: "e4e4e4",
        id: "list"
    });
    __alloyId46.push($.__views.list);
    $.__views.labelDatos = Ti.UI.createLabel({
        left: "40px",
        height: "50",
        color: "black",
        font: {
            font: "Helvetica",
            fontSize: "12pt"
        },
        text: "Hijos:",
        id: "labelDatos"
    });
    $.__views.list.add($.__views.labelDatos);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        id: "__alloyId59"
    });
    $.__views.list.add($.__views.__alloyId59);
    $.__views.__alloyId45 = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        backgroundColor: "white",
        top: "131px",
        separatorColor: "e4e4e4",
        data: __alloyId46,
        id: "__alloyId45"
    });
    $.__views.inicioScreen.add($.__views.__alloyId45);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {
        Ti.App.fireEvent("menuBtn");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;