import { cva, type VariantProps } from 'class-variance-authority'

export const variations = [
	'default',
	'destructive',
	'outline',
	'secondary',
	'ghost',
	'link',
] as const
export type Variations = (typeof variations)[number]
const variant = {
	default: ['bg-primary', 'text-primary-foreground', 'hover:bg-primary/90'],
	destructive: [
		'bg-destructive',
		'text-destructive-foreground',
		'hover:bg-destructive/90',
	],
	outline: [
		'border',
		'border-input',
		'bg-background',
		'text-secondary-foreground',
		'hover:bg-accent',
		'hover:text-accent-foreground',
	],
	secondary: [
		'bg-secondary',
		'text-secondary-foreground',
		'hover:bg-secondary/80',
	],
	ghost: ['hover:bg-accent', 'hover:text-accent-foreground'],
	link: ['text-primary', 'underline-offset-4', 'hover:underline'],
}

export const sizes = ['sm', 'default', 'lg', 'icon'] as const
export type Sizes = (typeof sizes)[number]
const size = {
	default: ['h-10', 'px-4', 'py-2'],
	sm: ['h-9', 'rounded-md', 'px-3'],
	lg: ['h-11', 'rounded-md', 'px-8'],
	icon: ['h-10', 'w-10'],
}

export const variants = cva(
	[
		'inline-flex',
		'items-center',
		'justify-center',
		'whitespace-nowrap',
		'rounded-md',
		'text-b2',
		'font-medium',
		'ring-offset-background',
		'transition-colors',
		'focus-visible:outline-none',
		'focus-visible:ring-2',
		'focus-visible:ring-ring',
		'focus-visible:ring-offset-2',
		'disabled:pointer-events-none',
		'disabled:opacity-50',
	],
	{
		variants: {
			variant,
			size,
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export type ButtonVariants = VariantProps<typeof variants>
