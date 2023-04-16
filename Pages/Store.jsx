import { Container, Title, StoreBox } from '../styles';
import { ScrollView } from 'react-native';

export default function Store() {
  return (
    <ScrollView>
        <Container >
            <StoreBox></StoreBox>
            <Title>
                Store
            </Title>

        </Container>
    </ScrollView>
  );
}
