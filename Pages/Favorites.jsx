import { Container, Title, FavoritesBox } from '../styles';
import { ScrollView } from 'react-native';

export default function Favorites() {
  return (
    <ScrollView>
      <Container >
          <FavoritesBox></FavoritesBox>
        <Title>
        Favorites
        </Title>


      </Container>
    </ScrollView>
  );
}
