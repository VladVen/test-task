import './App.css';
import Header from "./Components/Header/Header";
import ImageBackground from "./Components/ImageBackground/ImageBackground";
import GetAreaContainer from "./Components/GetArea/getAreaContainer";
import {connect} from "react-redux";
import {useCallback, useEffect} from "react";
import {getToken} from "./Redux/userReducer";
import PostAreaContainer from "./Components/PostArea/PostAreaContainer";

function App({getToken, token}) {

    const requestToken = useCallback(
        async () => {
            await getToken()
        }, [getToken]
    )

    useEffect(() => requestToken, [])

    return (
        <div className="App">
            <Header/>
            <ImageBackground/>
            <GetAreaContainer/>
            <PostAreaContainer/>
        </div>
    );
}

const mapDispatchToProps = (state) => ({

})

export default connect(mapDispatchToProps, {getToken})(App);
