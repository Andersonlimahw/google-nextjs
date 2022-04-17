type Props = {
    title:string;
}

const Footer = ({ title } : Props) => (
    <footer>
        {title}
    </footer>
);

export default Footer;