<?php
return [
    'paths' => ['api/*', 'oauth/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'], // or your frontend domain
    'allowed_headers' => ['*'],
    'supports_credentials' => false, // Passport doesn't need cookies
];
