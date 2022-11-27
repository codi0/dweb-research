(function() {

	function scrollable(selector) {

		var el = document.querySelector(selector);
		var pos = { top: 0, left: 0, x: 0, y: 0 };

		var mouseDownHandler = function(e) {
			pos = {
				left: el.scrollLeft,
				top: el.scrollTop,
				x: e.clientX,
				y: e.clientY,
			};
			el.addEventListener('mousemove', mouseMoveHandler);
			el.addEventListener('mouseup', mouseUpHandler);
			el.style.cursor = 'grabbing';
			el.style.userSelect = 'none';
		};

		var mouseMoveHandler = function(e) {
			var dx = e.clientX - pos.x;
			var dy = e.clientY - pos.y;
			el.scrollTop = pos.top - dy;
			el.scrollLeft = pos.left - dx;
		};

		var mouseUpHandler = function(e) {
			el.removeEventListener('mousemove', mouseMoveHandler);
			el.removeEventListener('mouseup', mouseUpHandler);
			el.style.cursor = 'grab';
			el.style.removeProperty('user-select');
		};

		if(el) {
			el.style.cursor = 'grab';
			el.addEventListener('mousedown', mouseDownHandler);
		}

	}
	
	scrollable('.varcol-container');

})();