interface Painting {
  id: string;
  title: string;
  scale: string;
  medium: string;
  date: string;
  photoUrl: string | undefined;
  year: string;
  tags: string[];
}

export default Painting;
