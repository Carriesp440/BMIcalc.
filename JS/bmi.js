const personIcon = document.querySelector('.bi-person-bounding-box');
const maleIcon = document.querySelector('.bi-gender-male');
const femaleIcon = document.querySelector('.bi-gender-female');


const Age = document.getElementById('Age');
const weight = document.getElementById('weight');
const height = document.getElementById('height');

const male = document.querySelector('.male');
const female = document.querySelector('.female');

const calculate = document.getElementById('calculate');
const BMI = document.getElementById('bmi');
const Status = document.getElementById('status');

const advice = document.getElementById('advice');
const reset = document.getElementById('reset');

male.addEventListener('click', () => {
    maleIcon.style.display = 'block';
    femaleIcon.style.display = 'none';
    personIcon.style.display = 'none';

    male.style.backgroundColor= 'teal';
    female.style.backgroundColor= 'gray';
    female.style.color = 'black';

})

female.addEventListener('click', () => {

    femaleIcon.style.display = 'block';
    maleIcon.style.display = 'none';
    personIcon.style.display = 'none';

    female.style.backgroundColor= 'teal';
    male.style.backgroundColor= 'gray';
    male.style.color = 'black';
})

const emptyError = () => {
    return('please input values');
}

const NaNError = () => {
    return('please input values');
}
const testcalc = () => {
    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value);

    if (weightValue === ''|| heightValue === '') {
        emptyError();
    }

    if (isNaN(weightValue) || isNaN(heightValue)){
        NaNError();
    }

    if (weightValue && heightValue) {
        const heightMeters = heightValue / 100;

        const calcBMI = weightValue / (heightMeters * heightMeters);

    }

}

calculate.addEventListener('click', testcalc());


