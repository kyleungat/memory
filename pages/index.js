import Layout1 from '../components/layouts/Layout1'
import ThemeButtonLink from '../components/theme-UI/ThemeButtonLink'
import ThemeLink from '../components/theme-UI/ThemeLink'

function index2 () {
    return (
            <Layout1 title="Welcome - MCard">
                <ThemeButtonLink name="sign up" href="/signup"/>
                <ThemeLink text="sign in" href="/signin" type="primary"/>
                <ThemeLink text="forgot password?" href="/" type="secondary"/>
            </Layout1>
    );
}

export default index2