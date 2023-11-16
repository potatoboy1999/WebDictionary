# Web Dictionary - a CodeIgniter 4 Web Application

## Requirements

- PHP 8.0.28 or higher
- PHP extensions: 
    - [intl](http://php.net/manual/en/intl.requirements.php)
    - [mbstring](http://php.net/manual/en/mbstring.installation.php)
    - zip
- [Composer](https://getcomposer.org/download/)

Some extensions might be already downloaded with your PHP version. Make sure they are not commented on the `php.ini` file (located on your PHP installation root folder).

Make sure both `php` and `composer` commands can be run from the command line.

## Installation

Clone or download the project on your desired directory.

On your command line, redirect to the project root and run
`composer install`

## Setup

On the project, rename `env` to `.env` and uncomment or set the following settings:
- `CI_ENVIRONMENT = production`
- `app.baseURL = 'http://localhost:8080/'` (or whichever Port the local server will run in)

## Launch

On your command line, redirect to the project root and run
`php spark serve`
this will start the localhost server on an available Port.

Finally, open a browser and search for the localhost address (http://localhost:8080/ by default)