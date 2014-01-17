$.menuBtn.addEventListener('click', function(e) {
   Ti.App.fireEvent('menuBtn');
});


function infoSupermercado() {
	var win = Alloy.createController('detalleSupermercado').getView();
	$.inicioScreen.add(win);
}