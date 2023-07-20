const buttonResize = () => {
	const buttons = document.querySelectorAll(".button-wrapper button");
	
	let width = window.innerWidth;
	if (width < 768) {
			buttons.forEach(button => {
				button.classList.remove('button');
				button.classList.add('mini-button');
				switch(button.textContent) {
					case 'New':
						button.innerHTML = '<span class="material-symbols-outlined">add</span>';
						break;
					case 'Upload':
						button.innerHTML = '<span class="material-symbols-outlined">upload</span>';
						break;
					case 'Share':
						button.innerHTML = '<span class="material-symbols-outlined">share</span>'
				}
			});
		}
	
	window.addEventListener('resize', (e) => {
		let width = window.innerWidth;
		if (width < 768) {
			buttons.forEach(button => {
				button.classList.remove('button');
				button.classList.add('mini-button');
				switch(button.textContent) {
					case 'New':
						button.innerHTML = '<span class="material-symbols-outlined">add</span>';
						break;
					case 'Upload':
						button.innerHTML = '<span class="material-symbols-outlined">upload</span>';
						break;
					case 'Share':
						button.innerHTML = '<span class="material-symbols-outlined">share</span>'
				}
			});
		} else {
			buttons.forEach(button => {
				button.classList.add('button');
				button.classList.remove('mini-button');
				switch(button.innerHTML) {
					case '<span class="material-symbols-outlined">add</span>':
						button.innerHTML = 'New';
						break;
					case '<span class="material-symbols-outlined">upload</span>':
						button.innerHTML = 'Upload';
						break;
					case '<span class="material-symbols-outlined">share</span>':
						button.innerHTML = 'Share'
				}
			});
		}
	});

}

export default buttonResize;
