import {
    FooterStyled,
    FooterIconsContainerStyled,
    FooterIconStyled,
} from './Footer.styled'
export const Footer = () => (
    <>
        <FooterStyled>
            Anderson Lima | {new Date().getFullYear()}
            <FooterIconsContainerStyled>
                <a
                    href='https://github.com/Andersonlimahw'
                    target='_blank' rel="noreferrer"
                >
                    <FooterIconStyled
                        src='/icons/social/github.svg'
                    />
                </a>
                <a
                    href='https://www.linkedin.com/in/anderson-lima-4b572651'
                    target='_blank' rel="noreferrer"
                >
                    <FooterIconStyled
                        src='/icons/social/linkedin.svg'
                    />
                </a>
                <a
                    href='https://www.instagram.com/andersonlimahw'
                    target='_blank' rel="noreferrer"
                >
                    <FooterIconStyled
                        src='/icons/social/instagram.svg'
                    />
                </a>
            </FooterIconsContainerStyled>
        </FooterStyled>
    </>
);

export default Footer;