import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Button, Row, Col } from 'react-bootstrap';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#4CAF50',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#4CAF50',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const ChatCyberethic = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

  const handleChatClose = () => {
    setShowChat(false);
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <ThemeProvider theme={theme}>
        {showChat && (
          <Row style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
            <Col xs={10} style={{ paddingRight: '0' }}>
              <ChatBot
                steps={[
                  {
                    id: '1',
                    message: 'Olá! Como posso ajudá-lo?',
                    trigger: '2',
                  },
                  {
                    id: '2',
                    user: true,
                    trigger: '3',
                  },
                  {
                    id: '3',
                    message: 'Obrigado pela sua mensagem! Em breve, entraremos em contato.',
                    end: true,
                  },
                ]}
                headerTitle="Chat"
                placeholder="Digite sua mensagem..."
                userDelay={1000}
                customDelay={1000}
              />
            </Col>
            <Col xs={2} style={{ paddingLeft: '0' }}>
              <Button onClick={handleChatClose} variant="danger" style={{ borderRadius: '0' }}>Fechar</Button>
              {/* Adicione aqui o botão de minimizar */}
            </Col>
          </Row>
        )}
      </ThemeProvider>
      <Button
        onClick={handleChatToggle}
        variant="primary"
        style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}
      >
        {showChat ? 'Minimizar' : 'Abrir Chat'}
      </Button>
    </Container>
  );
};

export default ChatCyberethic;
