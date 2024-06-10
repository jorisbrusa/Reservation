document.getElementById('reservation-form').addEventListener('submit', function (event) {
    event.preventDefault();
    displayConfirmation();
});

function changeNumber(field, delta) {
    const input = document.getElementById(field);
    let newValue = parseInt(input.value) + delta;
    newValue = Math.max(newValue, 0); // Ensure the value does not go below 0
    input.value = newValue;

    if (field === 'enfant') {
        updateEnfantFields(newValue);
    }
}

function updateEnfantFields(count) {
    const container = document.getElementById('age-enfants-container');
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const select = document.createElement('select');
        select.name = `age-enfant-${i + 1}`;
        select.className = 'age-enfant';
        for (let age = 0; age <= 17; age++) {
            const option = document.createElement('option');
            option.value = age;
            option.textContent = age;
            select.appendChild(option);
        }
        const label = document.createElement('label');
        label.textContent = `Âge enfant ${i + 1}: `;
        label.appendChild(select);
        container.appendChild(label);
    }
}

function resetForm() {
    document.getElementById('reservation-form').reset();
    document.getElementById('age-enfants-container').innerHTML = '';
}

function displayConfirmation() {
    document.getElementById('conf-adulte').textContent = document.getElementById('adulte').value;
    document.getElementById('conf-enfant').textContent = document.getElementById('enfant').value;
    document.getElementById('conf-chambre').textContent = document.getElementById('chambre').value;
    document.getElementById('conf-travail').textContent = document.getElementById('travail').checked ? 'Oui' : 'Non';
}
