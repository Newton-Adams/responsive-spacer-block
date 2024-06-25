<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Generate unique id for aria-controls.
$unique_id = wp_unique_id( 'p-' );
$desktopHeight = isset($attributes['desktopHeight']) ? $attributes['desktopHeight'] : null;
$tabletHeight = isset($attributes['tabletHeight']) ? $attributes['tabletHeight'] : null;
$mobileHeight = isset($attributes['mobileHeight']) ? $attributes['mobileHeight'] : null;

?>

<div 
	<?php echo get_block_wrapper_attributes(); ?> 
	data-wp-interactive="responsive-spacer-block" 
	<?php 
	echo wp_interactivity_data_wp_context( 
		array( 
			'desktopHeight' => $desktopHeight, 
			'tabletHeight' => $tabletHeight, 
			'mobileHeight' => $mobileHeight, 
			'setHeight' => '',
		) 
	); 
	?>
	data-wp-init="callbacks.logWidth" 
	data-wp-on-window--resize="callbacks.logWidthResize" 
	data-wp-style--height="context.setHeight" >
</div>
