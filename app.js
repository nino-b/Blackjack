/* Close Dialog Box */
function closeDialogBox(dialogBox) {
    dialogBox.id = 'dialog-closing';
    setTimeout(() => {
        dialogBox.close();
        dialogBox.id = '';
    }, 200);
}

/* Open Settings Box */
const settingsBtn = document.querySelector('.settings-btn');
const settingsDialogBox = document.querySelector('.settings-dialog-box');

settingsBtn.addEventListener('click', () => {
    settingsDialogBox.showModal()
});

/* Close Settings Dialog */
const closeSettingsDialog = document.querySelector('.close-settings-dialog-btn');
closeSettingsDialog.addEventListener('click', () => {
    closeDialogBox(settingsDialogBox);
})



/* Open Rules Dialog Box */
const rulesBtn = document.querySelector('.rules-btn');
const rulesDialogBox = document.querySelector('.rules-dialog-box');

rulesBtn.addEventListener('click', () => {
    rulesDialogBox.showModal();
})

/* Close Rules Dialog Box */

const closeRulesDialog = document.querySelector('.close-rules-dialog-btn');
closeRulesDialog.addEventListener('click', () => {
    closeDialogBox(rulesDialogBox)
})