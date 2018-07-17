import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'   ;
import * as userinfoActions from '../../actions/userInfo'

class re extends React.Component {
    render() {
        return (
            <div><b>{this.props.userInfo.name}</b>
                <hr/>

                redux
                <div onClick={this.handelClick.bind(this)}>更改用户</div>
            </div>
        )
    }

    componentDidMount() {


        this.props.userAction.login(
            {
                name: 'pgc',
                id: '1651202349'
            }
        )

        setTimeout(() => {
            console.log(this.props)
        }, 2000)
    }

    handelClick() {
        this.props.userAction.login(
            {
                name: '潘国臣',
                id: '981551531'
            }
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(re);