<?php
/**
 * Plugin Name: Greater Belhaven Community Improvement District
 * Author: Creative Distillery
 * Author URI: https://creativedistillery.com
 * Version: 1.0.0
 */

// Include ACF
// Define path and URL to the ACF plugin.
define( 'MY_ACF_PATH', plugin_dir_path( __FILE__ ) . '/includes/acf/' );
define( 'MY_ACF_URL', plugin_dir_url( __FILE__ ) . '/includes/acf/' );

// Include the ACF plugin.
include_once( MY_ACF_PATH . 'acf.php' );

// Customize the url setting to fix incorrect asset URLs.
add_filter('acf/settings/url', 'my_acf_settings_url');
function my_acf_settings_url( $url ) {
	return MY_ACF_URL;
}

// (Optional) Hide the ACF admin menu item.
// add_filter('acf/settings/show_admin', 'my_acf_settings_show_admin');
function my_acf_settings_show_admin( $show_admin ) {
	return false;
}

if (function_exists('acf_add_options_page')) {
	acf_add_options_page(array(
		'page_title' => 'CID Settings',
		'position' => 53.3
	));
}

include_once( plugin_dir_path( __FILE__) . '/add_template.php' );

function get_options() {
	$options = get_fields( 'options' );
	return $options;
}
add_action( 'rest_api_init', function () {
	register_rest_route( 'cid', '/options', array(
		'methods' => 'GET',
	  'callback' => 'get_options',
	) );
});