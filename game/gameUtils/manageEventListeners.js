




export default function manageEventListeners(elementReferences, gamePageHandlers, context, addListener = true) {
  if (addListener) {
    for (const element in gamePageHandlers) {
      elementReferences[element].addEventListener('click', gamePageHandlers[element].bind(context));
    }
  } else {
    for (const element in gamePageHandlers) {
      elementReferences[element].removeEventListener('click', gamePageHandlers[element]);
    }
  }
}