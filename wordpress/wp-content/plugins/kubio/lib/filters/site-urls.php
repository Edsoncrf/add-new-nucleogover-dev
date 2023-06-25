<?php

use IlluminateAgnostic\Str\Support\Arr;

function kubio_get_site_urls() {

	$urls = apply_filters(
		'kubio/kubio_go_link_paths',
		array(
			'features'      => 'features',
			'upgrade'       => 'upgrade',
			'try'           => 'try-demo',
			'editor_try'    => 'try-online',
			'documentation' => 'documentation',
			'contact'       => 'contact',
		)
	);

	foreach ( $urls as $key => $path ) {
		$urls[ $key ] = 'https://kubiobuilder.com/go/' . trim( $path, '/' );
	}

	return array(
		'homepage_url'      => 'https://kubiobuilder.com',
		'features_url'      => $urls['features'],
		'upgrade_url'       => add_query_arg(
			array(
				'utm_theme'      => get_template(),
				'utm_childtheme' => get_stylesheet(),
			),
			$urls['upgrade']
		),
		'try_url'           => add_query_arg(
			array(
				'utm_theme'      => get_template(),
				'utm_childtheme' => get_stylesheet(),
			),
			$urls['try']
		),
		'editor_try_online' => apply_filters(
			'kubio/editor-try-online/url',
			add_query_arg(
				array(
					'utm_theme'      => get_template(),
					'utm_childtheme' => get_stylesheet(),
				),
				$urls['editor_try']
			)
		),
		'documentation_url' => add_query_arg(
			array(
				'utm_theme'      => get_template(),
				'utm_childtheme' => get_stylesheet(),
			),
			$urls['documentation']
		),
		'contact_url'       => add_query_arg(
			array(
				'utm_theme'      => get_template(),
				'utm_childtheme' => get_stylesheet(),
			),
			$urls['contact']
		),
		'facebook_url'      => 'https://www.facebook.com/kubiobuilder',
	);
}


function kubio_get_site_url_for( $key, $utms = array() ) {
	$urls = kubio_get_site_urls();
	$url  = Arr::get(
		$urls,
		$key,
		Arr::get( $urls, "{$key}_url", 'https://kubiobuilder.com' )
	);

	$utms = array_merge(
		array(
			'medium' => 'wp',
		),
		$utms
	);

	if ( ! empty( $utms ) ) {
		$formatted_utms = array();
		foreach ( array_keys( $utms ) as $key ) {
			$formatted_utms[ "utm_{$key}" ] = $utms[ $key ];
		}
		$url = add_query_arg( $formatted_utms, $url );
	}

	return $url;

}

function kubio_try_demo_url( $template_slug ) {
	list($url,$args) = explode( '?', kubio_get_site_url_for( 'try_url' ) );

	$url = untrailingslashit( $url ) . "/{$template_slug}";

	if ( $args ) {
		$url = "{$url}?{$args}";
	}

	return $url;
}
