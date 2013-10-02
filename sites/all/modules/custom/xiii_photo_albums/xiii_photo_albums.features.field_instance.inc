<?php
/**
 * @file
 * xiii_photo_albums.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function xiii_photo_albums_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'node-photo_album-field_image'
  $field_instances['node-photo_album-field_image'] = array(
    'bundle' => 'photo_album',
    'deleted' => 0,
    'description' => 'The first image in this list will be the cover photo.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 1,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_image',
    'label' => 'Image',
    'required' => 1,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => 'uploads',
      'file_extensions' => 'png gif jpg jpeg',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '',
      'title_field' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'multiupload_imagefield_widget',
      'settings' => array(
        'preview_image_style' => 'thumbnail',
        'progress_indicator' => 'throbber',
      ),
      'type' => 'image_miw',
      'weight' => 33,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Image');
  t('The first image in this list will be the cover photo.');

  return $field_instances;
}
