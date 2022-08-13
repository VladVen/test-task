import {connect} from "react-redux";
import PostArea from "./PostArea";
import {addNewUser} from "../../Redux/userReducer";


const PostAreaContainer = ({userAdded, addNewUser}) => {
    return <PostArea userAdded={userAdded} register={addNewUser} />
}

const mapStateToProps = (state) => ({
    userAdded: state.users.userAdded
})

export default connect(mapStateToProps, {addNewUser})(PostAreaContainer)