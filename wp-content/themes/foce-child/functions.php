<?php
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('sections-style', get_stylesheet_directory_uri() . '/assets/sass/sections.css');
    wp_enqueue_style('swiper-css', get_stylesheet_directory_uri() . '/assets/swiper/swiper-bundle.min.css', array());
}

add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');
function theme_enqueue_scripts()
{
    wp_register_script('sections', get_theme_file_uri('/assets/js/sections.js'), '', false, true);
    wp_enqueue_script('sections');
    wp_register_script('swiper-js', get_stylesheet_directory_uri() . '/assets/swiper/swiper-bundle.min.js', array(), '11.5.0', true);
    wp_enqueue_script('swiper-js');
}

// Get customizer options form parent theme
if (get_stylesheet() !== get_template()) {
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
        update_option('theme_mods_' . get_template(), $value);
        return $old_value; // prevent update to child theme mods
    }, 10, 2);
    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
        return get_option('theme_mods_' . get_template(), $default);
    });
}
