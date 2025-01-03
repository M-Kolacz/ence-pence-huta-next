import * as React from 'react'

import { cn } from '#app/utils/misc.tsx'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					[
						'file:bg-transparent',
						'flex',
						'h-10',
						'w-full',
						'rounded-md',
						'border',
						'border-input',
						'bg-background',
						'px-3',
						'py-2',
						'text-p3',
						'ring-offset-background',
						'file:border-0',
						'file:text-p3',
						'file:font-medium',
						'placeholder:text-muted-foreground',
						'focus-visible:outline-none',
						'focus-visible:ring-2',
						'focus-visible:ring-ring',
						'focus-visible:ring-offset-2',
						'disabled:cursor-not-allowed',
						'disabled:opacity-50',
					],
					className,
				)}
				ref={ref}
				{...props}
			/>
		)
	},
)
Input.displayName = 'Input'

export { Input }
