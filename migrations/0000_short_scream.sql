CREATE TABLE "blog_posts" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"excerpt" text NOT NULL,
	"content" text NOT NULL,
	"author" text NOT NULL,
	"category" text NOT NULL,
	"published_at" timestamp DEFAULT now() NOT NULL,
	"image_url" text,
	CONSTRAINT "blog_posts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "email_subscribers" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"subscribed_at" timestamp DEFAULT now() NOT NULL,
	"discount_claimed" text DEFAULT '15OFF',
	CONSTRAINT "email_subscribers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
