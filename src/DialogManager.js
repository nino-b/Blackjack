
export default class DialogManager {
    constructor() {
        this.openDialogBtns = document.querySelectorAll('.dialog-btn');
        this.dialogBoxes = document.querySelectorAll('.dialog-box');
        this.closeDialogBtns = document.querySelectorAll('.close-dialog-btn')

        this.openDialogBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                this.dialogBoxes.forEach(element => {
        
                    if (element.dataset.id === (event.target.dataset.id || event.target.parentNode.dataset.id)) {
                        element.showModal();
                    }
                });
            });
        });
        this.dialogBoxes.forEach(dialog => {
            dialog.addEventListener('click', event => {
                if (event.target.classList.contains('dialog-box')) {
                    this.#closeDialogFromOutside(event.target, event);
                }
            });
        });
    }

    #closeDialogFromOutside(dialogBox, e) {
        const dialogDimensions = dialogBox.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            this.#closeDialogBox(dialogBox);
        } else if (e.target.classList.contains('close-dialog-btn')) {}
    }
    #closeDialogBox(dialogBox) {
        dialogBox.id = 'dialog-closing';
        setTimeout(() => {
            dialogBox.close();
            dialogBox.id = '';
        }, 200);
    }
}