let myState = {
	pdf: null,
	currentPage: 1,
	zoom: 1
}

pdfjsLib.getDocument('New_Horizons.pdf').then((pdf) => {
	myState.pdf = pdf;
	render();

});

function render() {
	myState.pdf.getPage(myState.currentPage).then((page) => {
		let canvas = document.getElementById("pdf-renderer");
		let ctx = canvas.getContext('2d');

		let viewport = page.getViewport(myState.zoom);

		canvas.width = viewport.width;
		canvas.height = viewport.height;

		page.render({
			canvasContext: ctx,
			viewport: viewport
		});
	});
}
