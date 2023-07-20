const dashResize = () => {
	
	const dashboard = document.querySelector('.dashboard');
	const dashItems = document.querySelectorAll('.dashboard p');
	
	let width = window.innerWidth;
	if (width < 768) {
		dashboard.style.setProperty('width', '2rem');
		dashboard.style.setProperty('align-items', 'center');
		dashItems.forEach(item => {
			item.style.setProperty('display', 'none');
		});
	}
	
	window.addEventListener('resize', (e) => {
		let width = window.innerWidth;
		if (width < 768) {
			dashboard.style.setProperty('width', '2rem');
			dashboard.style.setProperty('align-items', 'center');
			dashItems.forEach(item => {
				item.style.setProperty('display', 'none');
			});
		} else {
			dashboard.style.removeProperty('width', '2rem');
			dashboard.style.removeProperty('align-items', 'center');
			dashItems.forEach(item => {
				item.style.setProperty('display', 'block');
			});
		}
	});
	
}

export default dashResize;
