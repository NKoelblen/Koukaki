<?php
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css');
    wp_register_style('swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
    wp_enqueue_style('swiper-style');
}

add_action('wp_enqueue_scripts', 'theme_enqueue_scripts', 15);
function theme_enqueue_scripts()
{
    wp_register_script('swiper-script', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
    wp_enqueue_script('swiper-script');
    wp_register_script('characters', get_theme_file_uri('/assets/js/characters.js'), '', false, true);
    wp_enqueue_script('characters');
    wp_register_script('flowers', get_theme_file_uri('/assets/js/flowers.js'), '', false, true);
    wp_enqueue_script('flowers');
    wp_register_script('banner', get_theme_file_uri('/assets/js/banner.js'), '', false, true);
    wp_enqueue_script('banner');
    wp_register_script('menu', get_theme_file_uri('/assets/js/menu.js'), '', false, true);
    wp_enqueue_script('menu');
    wp_register_script('place', get_theme_file_uri('/assets/js/place.js'), '', false, true);
    wp_enqueue_script('place');
    wp_register_script('sections', get_theme_file_uri('/assets/js/sections.js'), '', false, true);
    wp_enqueue_script('sections');
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
