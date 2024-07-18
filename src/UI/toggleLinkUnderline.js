
/**
 * Toggles the active state of header links based on the active link's href.
 * Toggles 'data-active' value. 
 * If link was clicked, 'data-active="true"' and link has underline.
 * If link was not clicked, 'data-active="false"' won't have an underline.
 * 
 * @param {HTMLAnchorElement[]} headerLinks - Array of anchor elements representing header links.
 * @param {string} activeLinkHref - The href of the currently active link.
 */
export default function toggleLinkUnderline(headerLinks, activeLinkHref) {
  headerLinks.forEach(link => {
    const href = link.href.substring(link.href.lastIndexOf('/'));

    if (href === activeLinkHref && link.dataset.active !== 'true') {
      link.dataset.active = 'true';

    } else if (href !== activeLinkHref && link.dataset.active == 'true') {
      link.dataset.active = 'false';
    }
  });
}