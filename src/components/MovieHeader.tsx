import '../styles/movie-header.scss'

type MovieHeaderProps = {
  title: string,
}

export function MovieHeader({ title }: MovieHeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {title}</span></span>
    </header>
  )
}