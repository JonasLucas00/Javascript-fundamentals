class BmiCalculator {

    manager() {
        let form = document.querySelector('.cards-info-form');

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let height = document.querySelector('.user-height')
            let weigh = document.querySelector('.user-weigh')

            if (!height.value || !weigh.value) {
                alert('Please, fill in all the fields ')
                return
            }

            height = Number(height.value) / 100 // convert to meters
            weigh = Number(weigh.value)
            let bmiResult = this.calculate(height, weigh)
            this.insertResult(bmiResult)
            // console.log(height.value, weigh.value)
            console.log(bmiResult)
            return
        })
    }

    calculate(height, weigh) {
        let bmi = weigh / (height ** 2);
        console.log(bmi)
        bmi = bmi.toFixed(2)
        console.log(bmi)

        return bmi
    }

    insertResult(bmiResult) {
        let bmiResultDiv = document.querySelector('.bmi-result-div');
        bmiResultDiv.classList.add('bmi-resultCss');
        bmiResultDiv.textContent = `Your bmi is ${bmiResult}`
        this.addEmailInput(bmiResultDiv)
        return
    }

    addEmailInput(bmiResultDiv) {
        // let emailBmiDiv = document.querySelector('.email-bmi-div');
        let emailBmiDiv = document.createElement('div');
        emailBmiDiv.classList.add('email-bmi-div')
        let sendEmailBtn = document.createElement('button');
        let emailInput = document.createElement('input');
        let p = document.createElement('p');
        p.textContent = `Want to receive your result through email? Fill in bellow`
        sendEmailBtn.textContent = `Receive`
        emailBmiDiv.appendChild(p)
        emailBmiDiv.appendChild(emailInput)
        emailBmiDiv.appendChild(sendEmailBtn)
        bmiResultDiv.appendChild(emailBmiDiv)

        emailBmiDiv.addEventListener('click', (e) => {
            e.preventDefault()
            if (validator.isEmail(emailInput.value)) {
                return console.log('Valid email')
            }
            return

        })
    }

}

let inciate = new BmiCalculator()
inciate.manager()

//BMi formula BMI = weigh / (height** 2)
// height must be in meters 