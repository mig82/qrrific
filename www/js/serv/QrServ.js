angular.module('qrrific').factory('QrServ', [function(){
	
	if(!_items){
		var _items = [];
	}
	

	var _opts = {
		// render method: 'canvas', 'image' or 'div'
		render: 'canvas',

		// version range somewhere in 1 .. 40
		minVersion: 1,
		maxVersion: 40,

		// error correction level: 'L', 'M', 'Q' or 'H'
		ecLevel: 'L',

		// offset in pixel if drawn onto existing canvas
		left: 0,
		top: 0,

		// size in pixel
		size: 300,

		// code color or image element
		fill: '#000',

		// background color or image element, null for transparent background
		background: null,

		// content
		text: 'no text',

		// corner radius relative to module width: 0.0 .. 0.5
		radius: 0,

		// quiet zone in modules
		quiet: 0,

		// modes
		// 0: normal
		// 1: label strip
		// 2: label box
		// 3: image strip
		// 4: image box
		mode: 0,

		mSize: 0.1,
		mPosX: 0.5,
		mPosY: 0.5,

		label: 'QRooler',
		fontname: 'sans',
		fontcolor: '#34BE69',

		image: null
	}
	
	return {
		setItems: function (items){
			_items = items;
			console.log("Set %s items", _items.length);
		},
		getItems: function(){
			return _items;
		},
		getOpts: function(){
			return _opts;
		}
	};
}])