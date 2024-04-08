<script>
        class FormValidator {
            constructor (logginForm) {
                this.form = document.getElementById(logginForm)};
                this.form.addEventListener('submit', (event) => this.validate(event));
            }

            validate(event) {
                event.preventDefault();
                const formData = this.getFormData();
                if (!this.validateFormData(formData)) {
                    alert('Please fill in all fields correctly.');
                    return;
                }
                alert('Form submitted successfully!');
                this.form.reset();
            }

            getFormData() {
                const formData = {};
                const formElements = this.form.elements;
                for (let i = 0; i < formElements.length; i++) {
                    const element = formElements[i];
                    if (element.type !== 'submit') {
                        formData[element.name] = element.value;
                    }
                }
                return formData;
            }

            validateFormData(formData) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData.email)) {
                    return false;
                }
                return true;
            }
        }

        const formValidator = new FormValidator('loginForm');
    </script>
</body>
</html>