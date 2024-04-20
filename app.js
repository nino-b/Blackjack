/** */
//import Router from "./src/Router.js";
//
//window.addEventListener('DOMContentLoaded', async () => {
//    /* loadData(); */
//    app.router.init();/* <-- Not Correct !!! */
//})
'use strict';

import DialogManager from "./src/DialogManager.js";
const openDialogBtns = document.querySelectorAll('.dialog-btn');
const dialogBoxes = document.querySelectorAll('.dialog-box');
const closeDialogBtns = document.querySelectorAll('.close-dialog-btn');

const datasetCloseAction = 'close-dialog';
const closingAnimation = 'dialog-closing';

new DialogManager({openDialogBtns, dialogBoxes, closeDialogBtns}, {datasetCloseAction, closingAnimation});
