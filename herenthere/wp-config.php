<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'direct');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '{w1Ck?XM[)atgSy8vdB[U~{h&n7DqQjpZO%uNCtUvx^XcG>@FSn}%5o?-o{p_s3d');
define('SECURE_AUTH_KEY',  'd:777*V;G*&C$~`gsph0kJ|^,:~m&XCpaT<gjS-Oos~a++{ah*=z2[i-wH9iqjGr');
define('LOGGED_IN_KEY',    '/$ANl7jcQbi3KB~bk7@PV=F>Ai*VXX)i;5^U[Bn+wFl%;8Jo4jhJ|{=cD[=^g~`)');
define('NONCE_KEY',        '|ob+^i:Msex>r<JuBWeQ~O)YHp[e.,p<svm<QvO/->,cH*sI$bhmIW?7+S]Q2$&_');
define('AUTH_SALT',        'M8u#0|AoZK:l[|0Kr*y:IbXppjn9#(p{/Uu,+7@ /.MSeXOEb`Lzq{IiK$w_~HQE');
define('SECURE_AUTH_SALT', '!lSN0$_jQyr}4AzD*0NDql84aQCX/xD%|EFMWNYiLh/{cd~)e!A=E95hJS NT3sQ');
define('LOGGED_IN_SALT',   'O$M/,t-xuo}NtfZw^zH,De_!0(v;FF0G7J|sAs@C/k_{ Qq!c1OONjjbu+bV.+{@');
define('NONCE_SALT',       'x}t1($# {fajbnW|Lib:NDzs}Gz$ksrq}l1wrY1<[*2e4l?(8SthObCcC,4@E#e<');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
