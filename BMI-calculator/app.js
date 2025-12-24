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
        return
    }

}

let inciate = new BmiCalculator()
inciate.manager()

//BMi formula BMI = weigh / (height** 2)
// height must be in meters 