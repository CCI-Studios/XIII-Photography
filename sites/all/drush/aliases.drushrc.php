<?php

$aliases['dev'] = array(
	'uri'=> 'dev.xiiiphotography.ca',
	'root' => '/home/xiii/subdomains/dev/public_html',
	'remote-host'=> 'host.lambtonshield.com',
	'remote-user'=> 'xiii',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files'
	)
);

$aliases['live'] = array(
	'uri'=> 'xiiiphotography.ca',
	'root' => '/home/xiii/subdomains/live/public_html',
	'remote-host'=> 'host.lambtonshield.com',
	'remote-user'=> 'xiii',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files'
	)
);
