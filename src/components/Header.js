const Header = () => {
    const role = sessionStorage.getItem("role");

    return (
        <div>{role}</div>
    )
}

export default Header;