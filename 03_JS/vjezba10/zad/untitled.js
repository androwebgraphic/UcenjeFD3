let form = document.querySelector('form');
let btn = document.querySelector('#Create');
let tabContainer = document.querySelector('.tableContainer');
let note = document.querySelector('#Note');

btn.addEventListener('click', (e) => {
	e.preventDefault();
	
	// 1. ISPRAVAK: Dohvati vrijednost unutar klika
	let task = document.getElementById('task').value;

	switch (task) {
		case '1':
			let A = document.querySelector('#inA').value;
			let B = document.querySelector('#inB').value;

			A = Number(A);
			B = Number(B);

			if (isNaN(A) || isNaN(B) || A === "" || B === '') {
				note.innerHTML = 'Unos mora biti broj';
				return;
			} else if (A <= 0 || A > 50 || B <= 0 || B > 50) {
				note.innerHTML = 'Broj mora biti pozitivan, ne smije biti veći od 50';
				return;
			}

			let matrix = [];
			for (let i = 0; i < A; i++) {
				matrix.push(new Array(B).fill(0));
			}

			let top = 0, left = 0, bottom = A - 1, right = B - 1;
			let size = A * B;
			let counter = 1;

			while (counter <= size) {
				for (let i = left; i <= right && counter <= size; i++) { matrix[top][i] = counter; counter++; }
				top++;
				for (let i = top; i <= bottom && counter <= size; i++) { matrix[i][right] = counter; counter++; }
				right--;
				for (let i = right; i >= left && counter <= size; i--) { matrix[bottom][i] = counter; counter++; }
				bottom--;
				for (let i = bottom; i >= top && counter <= size; i--) { matrix[i][left] = counter; counter++; }
				left++;
			}

			let tableHTML = '<table>';
			for (let i = 0; i < A; i++) {
				tableHTML += '<tr>';
				for (let j = 0; j < B; j++) { tableHTML += `<td>${matrix[i][j]}</td>`; }
				tableHTML += '</tr>';
			}
			tableHTML += '</table>';

			// 2. ISPRAVAK: Dodavanje forme na ispravan način
			tableHTML += `
				<div class="reset-form" style="margin-top: 20px;">
					<p style="color:orange;">Želite li kreirati novu tablicu?</p>
					<button id="btn-yes">Da</button>
					<button id="btn-no">Ne</button>
				</div>
			`;

			tabContainer.innerHTML = tableHTML;

			document.querySelector('#btn-yes').addEventListener('click', () => {
				tabContainer.innerHTML = '';
				document.querySelector('#inA').value = '';
				document.querySelector('#inB').value = '';
				btn.disabled = false;
			});

			document.querySelector('#btn-no').addEventListener('click', () => {
				document.querySelector('.reset-form').remove();
				btn.disabled = false;
			});
			break;
			
	 
		break;
	  
	  case '2' :console.log('odabra zad 2')
		
		break;
	  
		 default:
			note.innerHTML = 'Zadatak nije pronađen';
	}
});