/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

store( 'responsive-spacer-block', {
	callbacks: {
        logWidth() {
			const context = getContext();

			if (window.innerWidth > 1024) {
				context.setHeight = context.desktopHeight+'px';
			}
			else if (window.innerWidth > 768) {
				context.setHeight = context.tabletHeight ? context.tabletHeight+'px' : context.desktopHeight+'px';
			}
			else {
				context.setHeight = context.mobileHeight ? context.mobileHeight+'px' : context.tabletHeight ? context.tabletHeight+'px' : context.desktopHeight+'px';
			}
        }, 
		logWidthResize() {
			const context = getContext();

			if (window.innerWidth > 1024) {
				context.setHeight = context.desktopHeight+'px';
			}
			else if (window.innerWidth > 782) {
				context.setHeight = context.tabletHeight ? context.tabletHeight+'px' : context.desktopHeight+'px';
			}
			else {
				context.setHeight = context.mobileHeight ? context.mobileHeight+'px' : context.tabletHeight ? context.tabletHeight+'px' : context.desktopHeight+'px';
			}

		},

    },
} );
