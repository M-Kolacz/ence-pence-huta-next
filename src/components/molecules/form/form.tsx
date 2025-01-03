"use client";
import { ComponentProps, useId } from "react";
import { Input, Textarea, Label, Button } from "#app/components/atoms";
import { useFormStatus } from "react-dom";
import { cn } from "#app/utils/misc";

export type ListOfErrors = Array<string | null | undefined> | null | undefined;

export function ErrorList({
  id,
  errors,
  className,
}: {
  errors?: ListOfErrors;
  id?: string;
  className?: string;
}) {
  const errorsToRender = errors?.filter(Boolean);
  if (!errorsToRender?.length) return null;
  return (
    <ul id={id} className={cn("flex flex-col gap-1", className)}>
      {errorsToRender.map((error) => (
        <li key={error} className="text-sm text-destructive">
          {error}
        </li>
      ))}
    </ul>
  );
}

export function Field({
  labelProps,
  inputProps: { key, id: inputId, ...inputProps },
  errors,
  className,
}: {
  labelProps: React.ComponentProps<"label">;
  inputProps: React.ComponentProps<"input">;
  errors?: ListOfErrors;
  className?: string;
}) {
  const fallbackId = useId();
  const id = inputId ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : undefined;
  return (
    <div className={className}>
      <Label htmlFor={id} {...labelProps} />
      <Input
        id={id}
        aria-invalid={errorId ? true : undefined}
        aria-describedby={errorId}
        key={key}
        {...inputProps}
      />
      <div className="min-h-[40px] px-4 pb-3 pt-1">
        {errorId ? <ErrorList id={errorId} errors={errors} /> : null}
      </div>
    </div>
  );
}

export function TextareaField({
  labelProps,
  textareaProps: { key, id: textareaId, ...textareaProps },
  errors,
  className,
}: {
  labelProps: React.ComponentProps<"label">;
  textareaProps: React.ComponentProps<"textarea">;
  errors?: ListOfErrors;
  className?: string;
}) {
  const fallbackId = useId();
  const id = textareaId ?? textareaProps.name ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : undefined;
  return (
    <div className={className}>
      <Label htmlFor={id} {...labelProps} />
      <Textarea
        key={key}
        id={id}
        aria-invalid={errorId ? true : undefined}
        aria-describedby={errorId}
        {...textareaProps}
      />
      <div className="min-h-[32px] px-4 pb-3 pt-1">
        {errorId ? <ErrorList id={errorId} errors={errors} /> : null}
      </div>
    </div>
  );
}

//TODO: Move to atoms
export const SubmitButton = (props: ComponentProps<typeof Button>) => {
  const status = useFormStatus();

  return <Button disabled={status.pending} {...props} />;
};
