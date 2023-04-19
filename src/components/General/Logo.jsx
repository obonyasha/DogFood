import image from "../../assets/imagas/logo.png";

const Logo = () => {
    return <a href="/" className="logo">
        <img src={image} alt= "DogFood" />
        <span>DogFood</span>
    </a>
}

export default Logo;