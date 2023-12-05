interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  text: string
}

export const Title: React.FC<TitleProps> = (props) => {
  return (
    <h1 className="text-3xl font-semibold" {...props}>
      {props.text}
    </h1>
  )
}
