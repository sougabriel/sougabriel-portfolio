import { inject, Injectable, RendererFactory2 } from '@angular/core';

/**
 * Injectable class for managing stylesheets. Stylesheets are loaded into
 * the head element and they can be removed or changed later.
 */
@Injectable({ providedIn: 'root' })
export class StyleManager {
    protected readonly renderer = inject(RendererFactory2);
    protected readonly render = this.renderer.createRenderer(null, null);

    /**
     * Set the stylesheet with the specified key.
     */
    setStyle(key: string, href: string) {
        const el = this.getLinkElementForKey(key);
        el.setAttribute('href', href);
    }

    /**
     * Remove the stylesheet with the specified key.
     */
    removeStyle(key: string) {
        const existingLinkElement = this.getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            this.render.removeChild(document.head, existingLinkElement);
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
            `link[rel="stylesheet"].${key}`
        );
    }

    protected createLinkElementWithKey(key: string) {
        const linkEl = this.render.createElement('link');
        this.render.setAttribute(linkEl, 'rel', 'stylesheet')
        this.render.addClass(linkEl, `${key}`);
        this.render.appendChild(document.head, linkEl);
        return linkEl;
    }
}
