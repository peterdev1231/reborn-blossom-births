
import * as React from "react"
import { cn } from "@/lib/utils"

const VisuallyHidden = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export { VisuallyHidden }
