CREATE TABLE `posts` (
	`id` varchar(36) NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`excerpt` text NOT NULL,
	`content` text NOT NULL,
	`cover_image_url` text NOT NULL,
	`published` boolean DEFAULT false,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
