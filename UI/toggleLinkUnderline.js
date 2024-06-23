
/**
 * Toggles 'data-active' value. 
 * If link was clicked, 'data-active="true"' and link has underline.
 * If link was not clicked, 'data-active="false"' won't have an underline.
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