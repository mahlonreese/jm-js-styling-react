import { Attribute, AttributeList } from "./AttributeList";
import Badge from "./Badge";
import FlavorText from "./FlavorText";
import styles from "./Card.module.css";
import styled from "styled-components";

const personalityColorMap = {
  Cranky: "#219FB5",
  Jock: "#FF8C00",
  Lazy: "#7287FD",
  Normal: "#7D7F93",
  Peppy: "#FE640C",
  Smug: "#05A5E5",
  Snooty: "#8839ef",
  Uchi: "#FF1493",
};

const CardBody = styled.div`
  padding-top: 0.5rem;
  padding-inline: 0.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem 0;
`;

const HeaderContent = styled.div`
  margin: 0;
`;

const Figure = styled.figure`
  width: 280px;
  margin: 0;
  padding-top: 0.5rem;
  background: ${props => props.$bgColor || "#ccc"};
  color: ${props => props.$fgColor || "#000"};

  img {
    margin-inline: 0.5rem;
    width: calc(100% - 1rem);
  }

  figcaption {
    padding-bottom: 0.25rem;
    text-align: center;
  }

`;

export default function Card({ villager }) {
  const catchPhrase = <>&ldquo;{villager.catchPhrase}&rdquo;</>;
  return (
    <div className={styles.card}>
      <CardHeader title={villager.name} subtitle={villager.species} />
      <CardImage
        imageURI={villager.image}
        afterImageText={villager.birthday}
        figureBg={villager.bubbleColor}
        figureFg={villager.textColor}
      />
      <CardBody>
        <div>
          <Badge
            bgColor={personalityColorMap[villager.personality]}
            fgColor="#fff"
          >
            {villager.personality}
          </Badge>
        </div>
        <AttributeList>
          <Attribute name="Hobby" value={villager.hobby} />
          <Attribute name="Catchphrase" value={catchPhrase} />
        </AttributeList>
        <FlavorText>{villager.saying}</FlavorText>
      </CardBody>
    </div>
  );
}

function CardHeader({ title, subtitle }) {
  return (
    <Header>
      <HeaderContent as="h1">{title}</HeaderContent>
      <HeaderContent as="p">{subtitle}</HeaderContent>
    </Header>
  );
}

function CardImage({ imageURI, afterImageText, figureBg, figureFg }) {
  return (
    <Figure $bgColor={figureBg} $fgColor={figureFg}>
      <img src={imageURI} />
      <figcaption>{afterImageText}</figcaption>
    </Figure>
  );
}

// function CardBody({ children }) {
//   return (
//     <div>
//       {children}
//     </div>
//   );
// }
