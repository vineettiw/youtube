import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  WhatsApp,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  padding: 10px;
  margin-bottom: 20px;
`;
const Logo = styled.h2`
  font-weight: bold;
`;
const Desc = styled.p`
  margin: 30px 0px;
  font-weight: bold;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 10px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  padding: 10px;
  ${mobile({ backgroundColor: "#fff8f6" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-COMMERCE</Logo>
        <Desc>
          E-COMMERCE WEBSITE for Super Deal! & Best product for style.We see our
          customers as invited guests to a party, and we are the hosts. It’s our
          job every day to make every important aspect of the customer
          experience a little bit better.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <WhatsApp />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Lucknow, India
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +911234567890
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          vin@google.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
