/* settings btn */
const optionsBtn = document.querySelector('.settings-btn');
const optionsDialogBox = document.querySelector('.settings-dialog-box');

optionsBtn.addEventListener('click', () => {
    optionsDialogBox.showModal()
});

/* sound / music checkbox */
/* const toggleSoundCheckbox = document.getElementById('.toggle-sound');
const soundOnIcon = document.getElementById('.sound-on');
const soundOffIcon = document.getElementById('.sound-off');

function toggleSound () {
    const isChecked = toggleSoundCheckbox.checked;

    soundOnIcon.classList.toggle('hidden', isChecked);
    soundOffIcon.classList.toggle('hidden', !isChecked);
}

toggleSoundCheckbox.addEventListener('change', toggleSound) */