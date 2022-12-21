window.onload = () => {
	show_password_btn = document.querySelector('#show-password');
	password_field = document.querySelector('input[name=\'password\']');

	show_password_btn.addEventListener('click', () => {
		if (password_field.type == 'password') {
			password_field.type = 'text';
		} else {
			password_field.type = 'password';
		}
	})
}