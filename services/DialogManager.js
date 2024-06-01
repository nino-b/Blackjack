import { dialogConfig } from "../data/domStore.js";

const moduleName = 'DialogManager';


/**
 * Class representing a manager for dialog boxes.
 * @class
 * 
 * @param {Object} elements - An object containing elements for dialog interaction.
 * @param {HTMLElement[]} elements.openDialogBtns - Buttons that trigger opening of dialog boxes.
 * @param {HTMLElement[]} elements.dialogBoxes - The dialog boxes that are to be managed.
 * @param {HTMLElement[]} elements.closeDialogBtns - Buttons that trigger closing of dialog boxes.
 * 
 * @param {Object} config - An object containing configuration options for dialog boxes.
 * @param {string} config.datasetCloseAction - The data attribute identifier for dialog's close buttons.
 * @param {string} config.closingAnimation - The name of the closing animation for dialog boxes.
 * 
 * @example
 * Create a new DialogManager with buttons and dialog boxes elements
 * const dialogManager = new DialogManager({
 *     openDialogBtns: document.querySelectorAll('.open-dialog-btn'),
 *     dialogBoxes: document.querySelectorAll('.dialog'),
 *     closeDialogBtns: document.querySelectorAll('.close-dialog-btn')
 * }, {
 *     datasetCloseAction: 'close-dialog',
 *     closingAnimation: 'dialog-closing'
 * });
 */
export default class DialogManager {
    constructor({openDialogBtns, dialogBoxes, closeDialogBtns, datasetCloseAction, closingAnimation}) {
        this.openDialogBtns = openDialogBtns;
        this.dialogBoxes = dialogBoxes;
        this.closeDialogBtns = closeDialogBtns;

        this.datasetCloseAction = datasetCloseAction;
        this.closingAnimation = closingAnimation;

        this.openDialog();
        this.closeDialog();
    }
    /** 
     * Attaches 'click' event listeners to each 'open dialog' button.
     * When a button is clicked, it searches for a dialog box with a matching data-id attribute
     * and opens it using the showModal() method. If no matching dialog box is found,
     * a warning is logged to the console.  
     * This method performs the following actions:
     * 1. Iterates over all 'open dialog' buttons.
     * 2. Adds a click event listener to each button.
     * 3. On click, iterates over all dialog boxes to find a match based on the data-id attribute.
     * 4. If a matching dialog box is found, it is opened with showModal(). 
     * The for .. of loop is used because we can return from this loop and not execute warning.
     * 5. If no match is found, logs a warning with the module name indicating the dialog box was not found.
    */
    openDialog() {
        this.openDialogBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                for (const dialogBox of this.dialogBoxes) {
                    if (dialogBox.dataset.id === (event.target.dataset.id /* || event.target.parentNode.dataset.id */)) {
                        dialogBox.showModal();
                        return;
                    } 
                }
                console.warn(`Module: ${moduleName}. Method: openDialog. Problem with opening a dialog box: Dialog box was not found`);;
            });
        });
    }

    /**  
     * Attaches click event listeners to each dialog box to handle closing.
     * When a click event occurs, it checks if the click is outside the bounds of the dialog box
     * or if the clicked element has a data attribute indicating it should close the dialog (this.datasetCloseAction = 'close-dialog' button).
     * If either condition is met, it calls the private `#closeDialogBox` method to close the dialog.
     * 
     * The method performs following steps:
     * 1. Iterates over NodeList of dialog boxes.
     * 2. Attaches a 'click' event listener to each dialog box.
     * 3. On 'click', calculates closest dialog's position relative to the viewport.
     * 4. Chcks if the 'click' was outside the dialog box's boundaries or clicked element is designated to close the dialog (this.datasetCloseAction = 'close-dialog' button).
     * 5. If either condition is true, invokes the `#closeDialogBox` method with the target element.
    */
    closeDialog() {
        this.dialogBoxes.forEach(dialog => {
            dialog.addEventListener('click', event => {
                const dialogDimensions = event.target.closest('dialog').getBoundingClientRect();
                if (
                    event.clientX < dialogDimensions.left ||
                    event.clientX > dialogDimensions.right ||
                    event.clientY < dialogDimensions.top ||
                    event.clientY > dialogDimensions.bottom || 
                    event.target.dataset.actionType === this.datasetCloseAction
                ) {
                    this.#closeDialogBox(event.target);
                }
            });
        });
    }
    

    /** 
     * Closes the dialog box that contains the specified element.
     * If the target element is not an HTMLElement or the dialog box is not found, a warning is logged to the console 
     * and the function exits early.
     * Otherwise, the dialog box is identified, marked with a temporary ID, and then closed after a brief delay.
     * 
     * @param {HTMLElement} targetEl - The dialog box element or its close button.
     * 
     * @private
     * The method performs following steps:
     * 1. Checks whether the argument is an instance of HTMLElement.
     * 2. Identifies the target element as a dialog box or the parent of the close button (dialog box).
     * 3. Adds a temporary ID to trigger the closing animation.
     * 4. Sets a timeout to close the dialog box after the animation finishes.
     * 5. Closes the dialog box after the animation is complete.
     * 6. Removes temporary ID to enable animations for future closings.
     * @note 
     * The timeout duration is proportional of the animation length (2:1 ratio). If you change one of those values, adjust another one accordingly.
    */
    #closeDialogBox(targetEl) {
        if (!(targetEl instanceof HTMLElement)) {
            console.warn(`Module: ${moduleName}. Method: #closeDialogBox. Problem with closing dialog box: Dialog box or its close button was not found or was not an HTMLElement.`);
            return;
        }
        let dialogBox = null;
        if (targetEl.parentNode.tagName === 'DIALOG') {
            dialogBox = targetEl.parentNode;
        } else {
            dialogBox = targetEl
        }
        dialogBox.id = this.closingAnimation;
        setTimeout(() => {
            console.log('Closing')
            dialogBox.close();
            dialogBox.id = '';
        }, 200);
    }
}

const dialogManager = new DialogManager(dialogConfig);

export { dialogManager };