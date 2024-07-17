import { Injectable } from '@angular/core';

/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
@Injectable({ providedIn: 'root' })
export class StyleManager {
    /**
     * Set the stylesheet with the specified key.
     */
    setStyle(key: string, href: string) {
        this.getLinkElementForKey(key).setAttribute('href', href);
    }

    /**
     * Remove the stylesheet with the specified key.
     */
    removeStyle(key: string) {
        const existingLinkElement = this.getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }

    protected getLinkElementForKey(key: string) {
        return (
            this.getExistingLinkElementByKey(key) ||
            this.createLinkElementWithKey(key)
        );
    }

    protected getExistingLinkElementByKey(key: string) {
        return document.head.querySelector(
            `link[rel="stylesheet"].${this.getClassNameForKey(key)}`
        );
    }

    protected createLinkElementWithKey(key: string) {
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.classList.add(this.getClassNameForKey(key));
        document.head.appendChild(linkEl);
        return linkEl;
    }

    protected getClassNameForKey(key: string) {
        return `style-manager-${key}`;
    }
}
