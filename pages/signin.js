import Layout1 from '../components/layouts/Layout1'
import ThemeButton from '../components/theme-UI/ThemeButton'
import ThemeLink from '../components/theme-UI/ThemeLink'
import ThemeInput from '../components/theme-UI/ThemeInput'

function signin () {
    return (
            <Layout1 title="Sign In - MCard">
                <ThemeInput label="email" type="email" name="useremail"/>
                <ThemeInput label="password" type="password" name="userpassword"/>
                <ThemeButton name="sign in"/>
                <ThemeLink text="back" href="/" type="secondary"/>
            </Layout1>
    );
}

export default signin