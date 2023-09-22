import styled from 'styled-components';

export const AnimatedAppBarTitle = styled.h1`
  margin-top: 2%;
  margin-left: 4%;
  font-size: 32px;
  color: #333;
  animation: slideIn 1s ease-in-out forwards;
  opacity: 0;

  @keyframes slideIn {
    from {
      transform: translateX(50%); 
      opacity: 0; 
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  opacity: ${(props) => (props.hidden ? 1 : 0)};
  transform: translateY(${(props) => (props.hidden ? '0' : '100px')});
  transition: opacity 0.5s ease-in-out, transform 1s ease-in-out;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ModalContainer = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 1000; /* Ensure it's above other content */
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 300px;
  margin: 100px auto; /* Center the modal vertically and horizontally */
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

export const ProjectListContainer = styled.div`
  margin-top: 20px;
`;

export const ProjectItem = styled.div`
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

export const UserDetails = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const Strong = styled.strong`
  font-weight: bold;
`;

export const NoReadmeMessage = styled.p`
  font-style: italic;
  color: #999;
`;

export const ReadmeContainer = styled.div`
max-width: 800px;
width: 85%;
padding: 20px;
border: 1px solid #ddd;
border-radius: 4px;
background-color: #fff;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
margin-top: 20px;

/* Style the markdown content */
p {
  margin: 10px 0;
}
a {
  color: #007bff;
}
/* Add more styles as needed */
`;