import conversorFormulas from "./formula_conversoes.js";

const comprimento = ['Milímetro', 'Centímetro', 'Metro', 'Quilômetro', 'Pé', 'Polegada'];
const massa = ['Miligrama', 'Grama', 'Quilograma', 'Libra', 'Onça'];
const volume = ['Metro Cúbico', 'Litro', 'Mililitro', 'Galão', 'Quarto'];
const tempo = ['Segundo', 'Minuto', 'Hora', 'Dia', 'Semana'];

const attributesToSet = {
    'tabindex': '0',
    'role': 'button',
    'aria-checked': 'false',
}

const AllBtns = document.querySelectorAll('.js-btns');
const AllLis = document.querySelectorAll('li');
const divMedidas = document.querySelector('.medidas');
const unitsUls = document.querySelectorAll('.unidade ul');
const btnConvert = document.querySelector('.trocar');
const result = document.querySelector('.resultado')
const input = document.querySelector('input')

function openList(btn) {
    closeUls()

    const ul = btn.currentTarget.nextElementSibling;
    ul.style.display = 'block';

    btn.currentTarget.setAttribute('aria-expanded', 'true')
}

function closeUls() {
    AllBtns.forEach((btn) => {
        btn.nextElementSibling.style.display = 'none';
        btn.setAttribute('aria-expanded', 'false')
    })
}

function checkOpenUls(e) {
    if (!e.target.classList.contains('js-btns')) {
        closeUls()
    }
}

function changeMeasureContent(measure, unit1, unit2) {

    unitsUls.forEach((ul) => {
        ul.innerHTML = '';

        measure.map((unit) => {
            const newLi = document.createElement('li');
            newLi.innerText = unit;

            for (let attr of Object.entries(attributesToSet)) {
                newLi.setAttribute(attr[0], attr[1])
            }

            ul.appendChild(newLi);
            newLi.addEventListener('click', changeMeasure)
        })
    })

    unitsUls[0].previousElementSibling.innerText = unit1;
    unitsUls[1].previousElementSibling.innerText = unit2;
}

function checkMeasureContent(measureName) {

    if (measureName == 'Comprimento') {
        changeMeasureContent(comprimento, 'Centímetro', 'Metro')
    } else if (measureName == 'Massa') {
        changeMeasureContent(massa, 'Grama', 'Quilograma')
    } else if (measureName == 'Tempo') {
        changeMeasureContent(tempo, 'Segundo', 'Minuto')
    } else if (measureName == 'Volume') {
        changeMeasureContent(volume, 'Milimetro', 'Litro')
    }
}

function removeCheckedLis(list) {
    list.forEach((li) => {
        li.classList.remove('ativo');
        li.setAttribute('aria-checked', 'false')
    })
}

function addCheckedLi(li) {
    li.classList.add('ativo')
    li.setAttribute('aria-checked', 'true')
}

function changeMeasure(listItem) {

    const thisLi = listItem.currentTarget
    const theseLis = thisLi.parentElement.querySelectorAll('li')
    const btn = thisLi.parentElement.previousElementSibling;
    btn.innerHTML = thisLi.innerText
    if (btn.dataset.type === 'medidas') {
        btn.innerHTML += '<img src="./arrow-down-short.svg" alt="">';
    }

    removeCheckedLis(theseLis)
    addCheckedLi(thisLi)

    if (divMedidas.contains(thisLi)) {
        checkMeasureContent(btn.innerText);
    }

    convertMeasure()
}

async function convertMeasure() {
    const inputValue = parseFloat(document.querySelector('input').value);
    const fromMeasure = document.querySelector('#btn-from').innerText;
    const toMeasure = document.querySelector('#btn-to').innerText;

    if (fromMeasure === toMeasure) {
        result.innerText = inputValue;
    } else if (isNaN(inputValue)) {
        result.innerText = 'Por favor, digite um valor válido';
    } else {
        const conversionFactor = conversorFormulas[fromMeasure][toMeasure];
        const resultValue = conversionFactor * inputValue;
        result.innerText = formatResult(resultValue);
    }
}

function formatResult(value) {
    return Math.round(value * 1e8) / 1e8;
}

function changePosition() {
    const fromUnit = document.querySelector('#btn-from');
    const toUnit = document.querySelector('#btn-to');

    [fromUnit.innerText, toUnit.innerText] = [toUnit.innerText, fromUnit.innerText]

    convertMeasure()
}

AllBtns.forEach((btn) => {
    btn.addEventListener('click', openList);
})

AllLis.forEach((li) => {
    li.addEventListener('click', changeMeasure)
})

window.addEventListener('click', checkOpenUls);

input.addEventListener('input', convertMeasure);

btnConvert.addEventListener('click', changePosition)