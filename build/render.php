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
$desktop_height = isset($attributes['desktopHeight']) ? $attributes['desktopHeight'] : 0;
$tablet_height  = isset($attributes['tabletHeight']) ? $attributes['tabletHeight'] : null;
$mobile_height  = isset($attributes['mobileHeight']) ? $attributes['mobileHeight'] : null;

$inline_styles = sprintf(
    '--desktop-height: %dpx;%s%s',
    $desktop_height,
    $tablet_height !== null ? " --tablet-height: {$tablet_height}px;" : '',
    $mobile_height !== null ? " --mobile-height: {$mobile_height}px;" : ''
);

$wrapper_attributes = get_block_wrapper_attributes(
  array(
    'class' => 'responsive-spacer',
    'style' => esc_attr($inline_styles),
  )
);
?>

<div <?php echo $wrapper_attributes; ?>></div>
