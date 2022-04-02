<?php
/*
Plugin name: Odds Calculator The best
Author: Elena Christensen
Version: 10.0
Description: after installing the calculator button will reveal itself on all pages of your WordPress site. No need ani settings.
*/

function calculator_scripts()
{
	wp_register_style('fonts', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap', false, null);
   wp_enqueue_style('fonts');

   wp_register_script('calculator-plugin', plugin_dir_url(__FILE__) . 'dist/bundle.js', [], 1, true);
   wp_enqueue_script('calculator-plugin');
}

add_action('wp_enqueue_scripts', 'calculator_scripts');
