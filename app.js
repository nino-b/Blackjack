/* settings btn */
const optionsBtn = document.querySelector('.settings-btn');
const optionsDialogBox = document.querySelector('.settings-dialog-box');

optionsBtn.addEventListener('click', () => {
    optionsDialogBox.showModal()
});

/* close-settings-dialog */
const closeSettingsBtn = document.querySelector('.close-settings-dialog');

closeSettingsBtn.addEventListener('click', () => {
    optionsDialogBox.style.animation = 'close-dialog-box 200ms ease forwards;'
    setTimeout(() => {
        optionsDialogBox.close();
    }, 300);
});
