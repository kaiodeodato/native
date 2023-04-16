import { ScrollView, Image } from 'react-native';
import { Container, Title, HomeBox, PicImg, Pic } from '../styles';
import react from 'react';



export default function Home() {
  return (
    <ScrollView>
        <Container >
        
        <HomeBox></HomeBox>
        <Pic>
            <PicImg source={{uri:'https://kaiodeodato.github.io/API_AI_STORE/Images/Shoes/Boots/Boots_3.png'}}/>
        </Pic>

        <PicImg
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
        
      
       
      <Title>
        Home
      </Title>
            
        </Container>
    </ScrollView>
  );
}
