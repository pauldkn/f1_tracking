import cn from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean
  text: string
}

export const Button: React.FC<ButtonProps> = ({ isActive, text, ...props }) => {
  return (
    <button
      className={cn(
        'grid w-20 min-w-fit place-items-center rounded bg-slate-900 px-4 py-2 hover:cursor-pointer hover:bg-slate-950 md:w-40',
        { 'bg-slate-950 hover:bg-slate-950': isActive }
      )}
      {...props}
    >
      <span>{text}</span>
    </button>
  )
}
