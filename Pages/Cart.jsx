import { Container, Title, CartBox } from '../styles';
import { ScrollView } from 'react-native';


export default function Cart() {

  return (
    <ScrollView>
        <Container >
            <CartBox></CartBox>
            <Title>
                Cart
            </Title>
        </Container>
    </ScrollView>
  );
}
