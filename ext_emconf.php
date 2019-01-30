<?php

/**
 * Extension Manager/Repository config file for ext "grobenhof".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Grobenhof',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.5.99',
            'rte_ckeditor' => '8.7.0-9.5.99',
            'bootstrap_package' => '10.0.0-10.0.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'RWorx\\Grobenhof\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Johannes Regner',
    'author_email' => 'johannes@r-worx.de',
    'author_company' => 'r-worx',
    'version' => '1.0.0',
];
