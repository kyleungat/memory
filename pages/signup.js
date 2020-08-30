import Layout1 from '../components/layouts/Layout1'
import ThemeButton from '../components/theme-UI/ThemeButton'
import ThemeLink from '../components/theme-UI/ThemeLink'
import ThemeInput from '../components/theme-UI/ThemeInput'

function signup () {
    return (
            <Layout1 title="Sign Up - MCard">
                <ThemeInput label="email" type="email" name="useremail"/>
                <ThemeInput label="password" type="password" name="userpassword"/>
                <ThemeInput label="password" type="password" name="userpassword2" placeholder="Re-enter"/>
                <ThemeButton name="sign up"/>
                <ThemeLink text="back" href="/" type="secondary"/>
            </Layout1>
    );
}

export default signup