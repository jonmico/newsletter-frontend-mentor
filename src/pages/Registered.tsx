import styled from 'styled-components';
import Button from '../ui/Button';

const StyledRegistered = styled.div`
  background-color: var(--color-white);
  width: 500px;
  border-radius: 20px;
  padding: 3rem 4rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.75rem;
`;

const Image = styled.img`
  width: 60px;
`;

const Header = styled.h1`
  font-size: 3.25rem;
  color: var(--color-dark-slate-grey);
`;

const Paragraph = styled.p`
  line-height: 1.5;
`;

export default function Registered() {
  return (
    <StyledRegistered>
      <Image src={'icon-success.svg'} alt={'Success Icon'} />
      <Header>Thanks for subscribing!</Header>
      <Paragraph>
        A confirmation email has been sent to{' '}
        <strong>ash@loremcompany.com</strong>. Please open it and click the
        button inside to confirm your subscription.
      </Paragraph>
      <Button>Dismiss message</Button>
    </StyledRegistered>
  );
}
