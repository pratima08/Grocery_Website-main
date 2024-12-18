import React from 'react';
import styled from 'styled-components';
import { FiCheckCircle } from 'react-icons/fi';

const Career = () => {
  // Dynamic data for job positions
  const onlinePositions = [
    { id: 1, title: 'Creative Designer' },
    { id: 2, title: 'Product Marketing Expert' },
    { id: 3, title: 'Customer Help' },
  ];

  const showroomPositions = [
    { id: 1, title: 'Creative Designer' },
    { id: 2, title: 'Product Marketing Expert' },
    { id: 3, title: 'Customer Help' },
  ];

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <Title>Would you like to join our team?</Title>
          <SubText>
            our home. <span>Food fade, style is eternal.</span> Make money by supporting our team in a spacious
          </SubText>
        </HeroContent>
        <Image src="https://www.omninos.in/assets/grocery-images/grocery-man.png" alt="Team Member" />
        <Notification>
          <Avatar src="https://via.placeholder.com/50" alt="Cucumber" />
          <Info>
            <p><strong>Adam</strong> (San Francisco) purchased</p>
            <ProductName>Organic Cucumber</ProductName>
            <Time>16 minutes ago <FiCheckCircle color="green" /></Time>
          </Info>
        </Notification>
      </HeroSection>

      {/* Job Positions Section */}
      <JobSection>
        <JobCategory>
          <CategoryTitle>Online Positions</CategoryTitle>
          <CategoryDescription>
          Join our team from anywhere! Explore flexible online positions that allow you to work remotely while making a meaningful impact.
          </CategoryDescription>
          <PositionList>
            {onlinePositions.map(position => (
              <Position key={position.id}>
                <PositionTitle>{position.title}</PositionTitle>
                <ApplyButton>Apply</ApplyButton>
              </Position>
            ))}
          </PositionList>
        </JobCategory>

        <JobCategory>
          <CategoryTitle>Showroom Positions</CategoryTitle>
          <CategoryDescription>
            Join our team from anywhere! Explore flexible online positions that allow you to work remotely while making a meaningful impact.
          </CategoryDescription>
          <PositionList>
            {showroomPositions.map(position => (
              <Position key={position.id}>
                <PositionTitle>{position.title}</PositionTitle>
                <ApplyButton red>Apply</ApplyButton>
              </Position>
            ))}
          </PositionList>
        </JobCategory>
      </JobSection>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color:#747272;
  color: white;
  text-align: left;
`;

const HeroContent = styled.div`
  flex: 1;
  padding-right: 2rem;
  text-align:center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  span {
    color: #ff4081;
    font-weight: bold;
  }
`;

const Image = styled.img`
  width: 300px;
  border-radius: 50%;
`;

const Notification = styled.div`
  position: absolute;
  bottom: -2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.p`
  font-weight: bold;
  color: #28a745;
`;

const Time = styled.span`
  color: #888;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const JobSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  margin:30px;
  border-radius:20px;
`;

const JobCategory = styled.div`
  flex: 1;
  min-width: 300px;
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CategoryDescription = styled.p`
  width:400px;
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
  margin-top:20px;
  margin-bottom:30px;
`;

const PositionList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Position = styled.div`
  width:100%;
  height:100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
`;

const PositionTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const ApplyButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => (props.red ? '#e74c3c' : '#28a745')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  border-radius:20px;
`;

export default Career;
