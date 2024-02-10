import { ReactNode } from "react"

interface Props {
    children: ReactNode
    className : string
  }

export const Button = ({
    children,
    ...props
} : Props
) => {
    return (
        <button {...props}>{children}</button>
    )
}