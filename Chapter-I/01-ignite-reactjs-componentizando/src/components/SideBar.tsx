import { Button } from '../components/Button';

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SelectedGenreProps {
  genres: GenreResponseProps[];
  selectedGenreIdProps: number;
  setSelectedGenreIdProps: (id: number) => void;
}

export function SideBar({ genres, selectedGenreIdProps, setSelectedGenreIdProps }: SelectedGenreProps) {

  function handleClickButton(id: number) {
    setSelectedGenreIdProps(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreIdProps === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}