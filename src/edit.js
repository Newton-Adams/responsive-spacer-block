/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {Element} Element to render.
 */

import { PanelBody, RangeControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {

	const blockProps = useBlockProps();
    
    const { desktopHeight, tabletHeight, mobileHeight } = attributes;

	return (
        <>
            <InspectorControls>
                <PanelBody title={ __('Spacer Settings', 'my-responsive-spacer-block') }>
                    <RangeControl
                        label={ __('Desktop Height (px)', 'my-responsive-spacer-block') }
                        value={ desktopHeight }
                        onChange={ ( value ) => setAttributes( { desktopHeight: value } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label={ __('Tablet Height (px)', 'my-responsive-spacer-block') }
                        value={ tabletHeight }
                        onChange={ ( value ) => setAttributes( { tabletHeight: value } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                    <RangeControl
                        label={ __('Mobile Height (px)', 'my-responsive-spacer-block') }
                        value={ mobileHeight }
                        onChange={ ( value ) => setAttributes( { mobileHeight: value } ) }
                        min={ 0 }
                        max={ 500 }
                    />
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps } style={{ height: desktopHeight }}></div>

        </>
    );
}